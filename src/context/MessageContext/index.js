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
  const [hasNext, setHasNext] = useState(false);
  const scrollDownElement = useRef(null);
  const { users } = useUser();
  const { userId } = useAuth();
  const { selectedChannel, updateChannel } = useChannel();

  // ACTIONS
  const fetchMessages = async (channelId, next = false) => {
    const RANGE = 10;
    const messagesCurrentCount = Object.keys(
      state[selectedChannel] || []
    ).length;
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
      message_type,
      users (
        id,
        name,
        avatar
      ),
      attachments (
        id,
        url
      ),
      replied_message:reply_id(
        id,
        content,
        message_type,
        attachments (id, url),
        users (
          id,
          name
        )
      )
      `,
        {
          count: "exact",
        }
      )
      .eq("channel_id", channelId)
      .order("created_at", { ascending: false })
      .range(
        next ? messagesCurrentCount : 0,
        (next ? messagesCurrentCount : 0) + RANGE
      );
    if (!error) {
      dispatch({ type: "FETCH_MESSAGES", payload: { messages, channelId } });
      setHasNext(messagesCurrentCount + messages.length < count);
      if (!next) {
        setTimeout(() => {
          scrollDownElement.current?.scrollIntoView({ behavior: "smooth" });
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
          const { data, error } = await supabase
            .from("messages")
            .select(
              `id,
            replied_message:reply_id(
              id,
              content,
              message_type,
              attachments (id, url),
              users (
                id,
                name
              )
            ),
            users (
              id,
              name,
              avatar
            ),
            attachments (
              id,
              url
            )`
            )
            .eq("id", payload.new.id)
            .single();
          if (!error) {
            dispatch({
              type: "INSERT_MESSAGE",
              payload: { ...payload.new, ...data },
            });
            setTimeout(() => {
              scrollDownElement.current?.scrollIntoView({ behavior: "smooth" });
            }, 0);
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
    const client_id = uuidv4();
    const message = {
      content,
      users: {
        id: userId,
        name: users[userId].name,
        avatar: users[userId].avatar,
      },
      channel_id: selectedChannel,
      client_id,
      replied_message: reply
        ? {
            id: reply,
            content: state[selectedChannel][reply].content,
            message_type: state[selectedChannel][reply].message_type,
            attachments: state[selectedChannel][reply].attachments,
          }
        : undefined,
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
      .insert({
        user_id: userId,
        reply_id: reply,
        channel_id: selectedChannel,
        client_id,
        content,
        message_type,
      })
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
    scrollDownElement.current?.scrollIntoView({ behavior: "smooth" });
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
    scrollDownElement,
    hasNext,
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
