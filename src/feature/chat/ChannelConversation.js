import React, { useState } from "react";
import useChannel from "context/ChannelContext";
import ChannelMessage from "./ChannelMessage";
import useMessage from "context/MessageContext";
import Button from "components/Button";
import noMsg from "assets/no-message.png";
import { BiUpArrowAlt } from "react-icons/bi";
import Spinner from "components/Spinner";

const ChannelConversation = () => {
  const [loading, setLoading] = useState(false);
  const { selectedChannel } = useChannel();
  const { messages, fetchMessages, conversionContainerElement, hasNext } =
    useMessage();
  const channelMessages = messages[selectedChannel];

  const onClickLoadMore = async () => {
    setLoading(true);
    await fetchMessages(selectedChannel, true);
    setLoading(false);
  };

  const renderMessages = () => {
    if (channelMessages) {
      const msgs = Object.values(messages[selectedChannel]);
      if (!msgs.length) {
        return (
          <div className="w-full h-full grid justify-center content-center">
            <div className="flex flex-col justify-center content-center bg-neutral-700 rounded bg-opacity-60 px-4 py-6">
              <img src={noMsg} className="block w-16 mx-auto" />
              <p className="text-secondary">No Messages Yet!</p>
            </div>
          </div>
        );
      }

      return msgs
        .reverse()
        .map((message) => (
          <ChannelMessage
            key={message.id || message.client_id}
            {...{ message }}
          />
        ));
    } else {
      // loading
      // return <p>loading</p>;
    }
  };

  return (
    <section
      ref={conversionContainerElement}
      className="overflow-y-auto overflow-x-hidden flex flex-col-reverse items-start flex-grow p-6"
    >
      {renderMessages()}
      {hasNext && (
        <Button
          className="mx-auto flex items-center gap-2 mb-6"
          type="outlined"
          onClick={onClickLoadMore}
        >
          <span>More</span>
          {loading ? (
            <Spinner className="w-4 h-4" />
          ) : (
            <BiUpArrowAlt className="text-lg" />
          )}
        </Button>
      )}
    </section>
  );
};

export default ChannelConversation;
