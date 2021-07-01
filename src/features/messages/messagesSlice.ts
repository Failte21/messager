import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Message } from "./constants";
import { fetchMessages, sendMessage } from "./messagesApi";

export interface MessagesState {
  value: Message[];
  status: "idle" | "loading" | "failed";
}

const initialState: MessagesState = {
  value: [],
  status: "idle",
};

export const fetch = createAsyncThunk("messages/fetch", async () => {
  const response = await fetchMessages();
  return {
    messages: response.data,
  };
});

export const send = createAsyncThunk(
  "message/send",
  async ({ text, path }: { text: string; path: string[] }) => {
    const response = await sendMessage(text);
    return {
      message: response.data,
      path,
    };
  }
);

const insertMessage = (
  messages: Message[],
  newMessage: Message,
  path: string[]
): Message[] => {
  if (!path.length) {
    return [newMessage, ...messages];
  }
  const [firstId, ...restPath] = path;
  return messages.map((message) => {
    if (message.id === firstId) {
      return {
        ...message,
        messages: insertMessage(message.messages || [], newMessage, restPath),
      };
    }
    return message;
  });
};

export const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetch.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetch.fulfilled, (state, action) => {
        state.value = action.payload.messages;
        state.status = "idle";
      })
      .addCase(send.fulfilled, (state, action) => {
        state.value = insertMessage(
          state.value,
          action.payload.message,
          action.payload.path
        );
      });
  },
});

export const selectMessages = (state: RootState) => state.messages.value;
export const selectStatus = (state: RootState) => state.messages.status;
export default messagesSlice.reducer;
