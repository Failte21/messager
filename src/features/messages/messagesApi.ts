import { Message } from "./constants";
import { messagesMock } from "./messagesMock";

export function fetchMessages() {
  return new Promise<{ data: Message[] }>((resolve) => {
    setTimeout(() => resolve({ data: messagesMock }), 500);
  });
}
