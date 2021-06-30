import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Message } from "./constants";
import { fetchMessages } from "./messagesApi";

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
      });
  },
});

export const selectMessages = (state: RootState) => state.messages.value;
export const selectStatus = (state: RootState) => state.messages.status;
export default messagesSlice.reducer;
