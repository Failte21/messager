import { v4 as uuidv4 } from "uuid";

import { Message } from "./constants";
import { messagesMock } from "./messagesMock";

export function fetchMessages() {
  return new Promise<{ data: Message[] }>((resolve) => {
    setTimeout(() => resolve({ data: messagesMock }), 500);
  });
}

export function sendMessage(text: string) {
  return new Promise<{ data: Message }>((resolve) => {
    setTimeout(
      () =>
        resolve({
          data: {
            id: uuidv4(),
            text,
            visibility: "public",
          },
        }),
      300
    );
  });
}
