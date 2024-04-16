import { createContext, useContext, useReducer, useRef, useState } from "react";
import messageReducer from "./messageReducer";
import supabase from "auth/supabase";
import useUser from "context/UserContext";
import useAuth from "context/AuthContext";
import useChannel from "context/ChannelContext";
import { v4 as uuidv4 } from "uuid";

const initVal = {};
const MessageContext = createContext(initVal);

export const MessageProvider = ({ children }) => {
  const [state, dispatch] = useReducer(messageReducer, initVal);
  const [reply, setReply] = useState(null);
  const [attachments, setAttachments] = useState([]);
  const [pages, setPages] = useState({});
  const messageContainer = useRef(null);
  const scrollDownElement = useRef(null);
  const { setUsers, fetchUser, users } = useUser();
  const { userId } = useAuth();
  const { selectedChannel, updateChannel } = useChannel();

  // ACTIONS
  const fetchMessages = async (channelId) => {
    const RANGE = 10;
    const page = pages[channelId]?.page || 0;
    const {
      data: messages,
      error,
      count,
    } = await supabase
      .from("messages")
      .select(
        `
      id,
      created_at,
      channel_id,
      content,
      reply_id,
      message_type,
      users (
        id,
        name,
        avatar
      ),
      attachments (
        id,
        url
      )
      `,
        {
          count: "exact",
        }
      )
      .eq("channel_id", channelId)
      .order("created_at", { ascending: false })
      .range(page * RANGE, page * RANGE + RANGE - 1);
    if (!error) {
      dispatch({ type: "FETCH_MESSAGES", payload: { messages, channelId } });
      setUsers(messages);
      setPages((pages) => ({
        ...pages,
        [channelId]: { page: page + 1, count },
      }));
      const MARGIN = 150;
      const parent = messageContainer.current.getBoundingClientRect();
      const child = scrollDownElement.current.getBoundingClientRect();
      if (!page || child.bottom - parent.top - MARGIN <= parent.height) {
        setTimeout(() => {
          scrollDownElement.current.scrollIntoView({ behavior: "smooth" });
        }, 0);
      }
    }
  };

  const subscribeMessagesChannel = (channelId) => {
    const messagesChannel = supabase
      .channel("messages-channel-channel")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "messages",
          filter: `channel_id=eq.${channelId}`,
        },
        async (payload) => {
          if (payload.new.message_type === "image") {
            const res = await supabase
              .from("attachments")
              .select("*")
              .eq("message_id", payload.new.id);
            dispatch({
              type: "INSERT_MESSAGE",
              payload: { ...payload.new, attachments: res.data },
            });
          } else {
            dispatch({ type: "INSERT_MESSAGE", payload: payload.new });
          }
          if (!(payload.new.user_id in users)) {
            fetchUser(payload.new.user_id);
          }
        }
      )
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "channels",
          filter: `id=eq.${channelId}`,
        },
        (payload) => {
          updateChannel(payload.new);
        }
      )
      .subscribe();
    return () => supabase.removeChannel(messagesChannel);
  };

  const sendMessage = async (
    content,
    message_type = "text",
    attachments = []
  ) => {
    const message = {
      content,
      user_id: userId,
      channel_id: selectedChannel,
      client_id: uuidv4(),
      reply_id: reply,
      message_type,
    };
    dispatch({ type: "INSERT_MESSAGE", payload: { ...message, attachments } });
    let uploadedImages;
    if (attachments.length) {
      const promises = attachments.map((attachment) =>
        supabase.storage
          .from("images")
          .upload(
            `${selectedChannel}/${new Date().getTime()}${attachment.name}`,
            attachment
          )
      );
      uploadedImages = await Promise.all(promises);
    }
    const { data } = await supabase
      .from("messages")
      .insert(message)
      .select()
      .single();
    if (attachments.length) {
      await supabase.from("attachments").insert(
        uploadedImages.map((image, i) => ({
          url: `${process.env.REACT_APP_SUPABASE_URL}/storage/v1/object/authenticated/images/${image.data.path}`,
          message_id: data.id,
          mime_type: attachments[i].type,
        }))
      );
    }
    scrollDownElement.current.scrollIntoView({ behavior: "smooth" });
  };
  const value = {
    messages: state,
    reply,
    setReply,
    attachments,
    setAttachments,
    sendMessage,
    fetchMessages,
    subscribeMessagesChannel,
    messageContainer,
    scrollDownElement,
    pages,
  };
  return (
    <MessageContext.Provider {...{ value }}>{children}</MessageContext.Provider>
  );
};

const useMessage = () => {
  const context = useContext(MessageContext);
  if (context === undefined) {
    throw new Error("useMessage should be use within its provider");
  }
  return context;
};

export default useMessage;
