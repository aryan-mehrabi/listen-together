import React from "react";
import supabase from "auth/supabase";
import { useQuery } from "react-query";

const ChannelMessageImage = ({ image, className = "" }) => {
  const { data } = useQuery(["image", image.url], async () => {
    if (!image.url) return image;
    const { data } = await supabase.auth.getSession();
    const res = await fetch(image.url, {
      headers: {
        apiKey: process.env.REACT_APP_SUPABASE_API_KEY,
        Authorization: `Bearer ${data.session.access_token}`,
      },
    });
    const response = new Response(res.body);
    const blob = await response.blob();
    return blob;
  });

  const renderImageBlob = (blob) => (
    <img className={className} src={URL.createObjectURL(blob)} alt="" />
  );

  if (!image.url) {
    return renderImageBlob(image);
  }

  return data && renderImageBlob(data);
};

export default ChannelMessageImage;
