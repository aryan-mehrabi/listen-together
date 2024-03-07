import React, { useState, useEffect } from "react";
import supabase from "auth/supabase";

const ChannelMessageImage = ({ image, className = "" }) => {
  const [imageBlob, setImageBlob] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      const { data } = await supabase.auth.getSession();
      const res = await fetch(image.url, {
        headers: {
          apiKey: process.env.REACT_APP_SUPABASE_API_KEY,
          Authorization: `Bearer ${data.session.access_token}`,
        },
      });
      const response = new Response(res.body);
      setImageBlob(await response.blob());
    };
    if (image.url) {
      fetchImage();
    }
  }, []);

  const renderImageBlob = (blob) => (
    <img className={className} src={URL.createObjectURL(blob)} alt="" />
  );

  if (!image.url) {
    return renderImageBlob(image);
  }

  return imageBlob && renderImageBlob(imageBlob);
};

export default ChannelMessageImage;
