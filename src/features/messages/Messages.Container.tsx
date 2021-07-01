import React, { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetch, selectMessages, selectStatus, send } from "./messagesSlice";
import MessagesView from "./Messages.View";

export default function MessagesContainer() {
  const messages = useAppSelector(selectMessages);
  const status = useAppSelector(selectStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetch());
  }, [dispatch]);

  return (
    <MessagesView
      messages={messages}
      status={status}
      send={(text, path) => dispatch(send({ text, path }))}
    />
  );
}
