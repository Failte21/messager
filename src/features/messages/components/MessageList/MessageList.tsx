import React from "react";

import { Message } from "../../constants";
import MessageBox from "../MessageBox/MessageBox";
import "./MessageList.css";

type Props = {
  messages: Message[];
  path: string[];
  send: (text: string, path: string[]) => void;
};

export default function MessageList({ messages, path, send }: Props) {
  return (
    <ul className={`message-list ${!path.length ? "message-list-first" : ""}`}>
      {messages.map((message) => (
        <li key={message.id} className="message-list-element">
          <MessageBox message={message} send={send} path={path} />
          {message.messages ? (
            <MessageList
              messages={message.messages}
              send={send}
              path={[...path, message.id]}
            />
          ) : null}
        </li>
      ))}
    </ul>
  );
}
