import React, { useEffect, useRef } from 'react';
import Message from './Message';
import useGetMessage from '../../context/useGetMessage.js';
import Loading from '../../components/Loading.jsx';
import useGetSocketMessage from '../../context/useGetSocketMessage.js';

const Messages = () => {
  const { loading, messages } = useGetMessage();
  useGetSocketMessage(); // Listening to incoming messages
  const lastMsgRef = useRef(null);

  useEffect(() => {
    // Scroll to the last message whenever the messages array changes
    setTimeout(() => {
      if (lastMsgRef.current) {
        lastMsgRef.current.scrollIntoView({
          behavior: "smooth",
        });
      }
    }, 100);
  }, [messages]);

  return (
    <div
      className="flex-1 overflow-y-auto"
      style={{ minHeight: 'calc(92vh - 8vh)', scrollbarWidth: 'none' }}
    >
      {loading ? (
        <Loading />
      ) : (
        messages.length > 0 &&
        messages.map((message, index) => {
          const isLastMessage = index === messages.length - 1;
          return (
            <div key={message._id} ref={isLastMessage ? lastMsgRef : null}>
              <Message message={message} />
            </div>
          );
        })
      )}

      {!loading && messages.length === 0 && (
        <div>
          <p className="text-center mt-[20%]">Say! Hi to start the conversation</p>
        </div>
      )}
    </div>
  );
};

export default Messages;
