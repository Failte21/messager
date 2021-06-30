import React from "react";

import { Message } from "../../constants";
import MessageBox from "../MessageBox/MessageBox";
import "./MessageList.css";

type Props = {
  messages: Message[];
  depth?: number;
};

export default function MessageList({ messages, depth }: Props) {
  return (
    <ul className={`message-list ${!depth ? "message-list-first" : ""}`}>
      {messages.map((message) => (
        <li key={message.id} className="message-list-element">
          <MessageBox message={message} />
          {message.messages ? (
            <MessageList messages={message.messages} depth={depth || 0 + 1} />
          ) : null}
        </li>
      ))}
    </ul>
  );
}
