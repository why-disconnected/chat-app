import React, { useCallback } from "react";
import MessageBubble from "../utilities/MessageBubble";

export default function MessageContainer({ selectedConversation }) {
  const setRef = useCallback((node) => {
    if (node) {
      node.scrollIntoView({ smooth: true });
    }
  }, []);
  
  return (
    <React.StrictMode>
      Right siad
      {selectedConversation.messages.map((mes, index) => {
        const lastMessage = selectedConversation.messages.length - 1 === index;
        return (
          <div
            ref={lastMessage ? setRef : null}
            key={index.toString()}
            id={index}
            className={`message-bubble  ${
              mes.forMe ? "message-bubble-sended" : ""
            }`}
          >
            <MessageBubble
              className={
                mes.forMe
                  ? "text-msg-wrapper-sended"
                  : "text-msg-wrapper-received"
              }
              mes={mes.text}
              name={mes.forMe ? "You" : mes.senderName}
            />
          </div>
        );
      })}
    </React.StrictMode>
  );
}
