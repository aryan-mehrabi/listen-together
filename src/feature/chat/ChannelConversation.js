import React from "react";
import useChannel from "context/ChannelContext";
import ChannelMessage from "./ChannelMessage";
import useMessage from "context/MessageContext";
import Button from "components/Button";
import noMsg from "assets/no-message.png";

const ChannelConversation = () => {
  const { selectedChannel } = useChannel();
  const { messages, fetchMessages, scrollDownElement, hasNext } = useMessage();
  const channelMessages = messages[selectedChannel];

  const onClickLoadMore = () => {
    fetchMessages(selectedChannel, true);
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

      return msgs.map((message) => (
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
    <section className="overflow-y-auto overflow-x-hidden flex flex-col items-start flex-grow p-6">
      {hasNext && (
        <Button
          className="mx-auto flex items-center gap-2 mb-6"
          type="outlined"
          onClick={onClickLoadMore}
        >
          <span>More</span>
          <i className="fa fa-arrow-up" />
        </Button>
      )}
      {renderMessages()}
      <div ref={scrollDownElement}></div>
    </section>
  );
};

export default ChannelConversation;
