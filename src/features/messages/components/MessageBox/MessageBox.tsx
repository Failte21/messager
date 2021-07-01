import React, { useState } from "react";

import { Message } from "../../constants";
import MessageInput from "../MessageInput/MessageInput";
import "./MessageBox.css";

type Props = {
  message: Message;
  send: (text: string, path: string[]) => void;
  path: string[];
};

export default function MessageBox({ message, send, path }: Props) {
  const [isMessageInputOpen, setIsMessageInputOpen] = useState(false);
  return (
    <div>
      <div className="message-container">{message.text}</div>
      {isMessageInputOpen ? (
        <MessageInput send={send} path={[...path, message.id]} />
      ) : (
        <div className="message-action">
          <button onClick={() => setIsMessageInputOpen(true)}>Reply</button>
        </div>
      )}
    </div>
  );
}
