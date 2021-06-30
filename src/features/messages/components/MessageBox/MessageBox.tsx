import React from "react";

import { Message } from "../../constants";
import "./MessageBox.css";

type Props = {
  message: Message;
};

export default function MessageBox({ message }: Props) {
  return <div className="message-container">{message.text}</div>;
}
