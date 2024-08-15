import React from "react";
import useChannel from "context/ChannelContext";
import ChannelMessage from "./ChannelMessage";
import useMessage from "context/MessageContext";
import Button from "components/Button";

const ChannelConversation = () => {
  const { selectedChannel } = useChannel();
  const { messages, fetchMessages, scrollDownElement, hasNext } = useMessage();
  const channelMessages = Object.values(messages[selectedChannel] || {});

  const onClickLoadMore = () => {
    fetchMessages(selectedChannel, true);
  };

  const renderMessages = () => {
    if (channelMessages) {
      return channelMessages.map((message) => (
        <ChannelMessage
          key={message.id || message.client_id}
          {...{ message }}
        />
      ));
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
