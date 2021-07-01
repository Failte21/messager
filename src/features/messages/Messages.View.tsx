import React from "react";

import MessageList from "./components/MessageList/MessageList";
import MessageInput from "./components/MessageInput/MessageInput";
import { Message } from "./constants";
import "./Messages.View.css";

type Props = {
  messages: Message[];
  status: "idle" | "loading" | "failed";
  send: (text: string, path: string[]) => void;
};

export default function MessagesView({ messages, status, send }: Props) {
  return (
    <div className="messages-container">
      <MessageInput send={send} path={[]} />
      <div>
        {status === "loading" ? (
          "Loading..."
        ) : (
          <MessageList messages={messages} send={send} path={[]} />
        )}
      </div>
    </div>
  );
}
