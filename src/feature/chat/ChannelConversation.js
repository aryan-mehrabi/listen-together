import React from "react";
import useChannel from "context/ChannelContext";
import ChannelMessage from "./ChannelMessage";
import useMessage from "context/MessageContext";

const ChannelConversation = () => {
  const { selectedChannel } = useChannel();
  const {
    messages,
    fetchMessages,
    scrollDownElement,
    messageContainer,
    pages,
  } = useMessage();
  const channelMessages = Object.values(messages[selectedChannel] || {});
  const page = pages[selectedChannel];

  const onClickLoadMore = () => {
    fetchMessages(selectedChannel);
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
    <section
      ref={messageContainer}
      className="overflow-y-auto overflow-x-hidden flex flex-col items-start flex-grow p-6"
    >
      {page && page.page * 10 < page.count && (
        <button
          className="text-cta border-[1px] border-cta rounded-lg py-2 px-8 mb-6 mx-auto flex items-center gap-2"
          onClick={onClickLoadMore}
        >
          <span>More</span>
          <i className="fa fa-arrow-up" />
        </button>
      )}
      {renderMessages()}
      <div ref={scrollDownElement}></div>
    </section>
  );
};

export default ChannelConversation;
