import { Message } from "./constants";

export const messagesMock: Message[] = [
  {
    id: "1",
    text: "Hi there",
    visibility: "public",
    messages: [
      {
        id: "2",
        text: "Hello you",
        visibility: "public",
        messages: [
          {
            id: "3",
            text: "Deep",
            visibility: "public",
          },
        ],
      },
    ],
  },
  {
    id: "4",
    text: "Another message",
    visibility: "public",
  },
];
