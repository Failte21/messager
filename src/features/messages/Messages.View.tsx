import React from "react";
import MessageList from "./components/MessageList/MessageList";

import { Message } from "./constants";
import "./Messages.View.css";

type Props = {
  messages: Message[];
  status: "idle" | "loading" | "failed";
};

export default function MessagesView({ messages, status }: Props) {
  return (
    <div className="messages-container">
      {status === "loading" ? (
        "Loading..."
      ) : (
        <MessageList messages={messages} />
      )}
    </div>
  );
}
