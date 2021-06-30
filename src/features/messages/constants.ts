export type Message = {
  id: string;
  text: string;
  visibility: "public" | "private";
  messages?: Message[];
};
