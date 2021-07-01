import React, { useState } from "react";

import "./MessageInput.css";

type Props = {
  send: (text: string, path: string[]) => void;
  path: string[];
};

export default function MessageInput({ send, path }: Props) {
  const [message, setMessage] = useState("");

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const submitMessage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    send(message, path);
    setMessage("");
  };

  return (
    <form onSubmit={submitMessage}>
      <input
        className="message-input"
        value={message}
        onChange={onInputChange}
        placeholder="Write your message here"
      />
    </form>
  );
}
