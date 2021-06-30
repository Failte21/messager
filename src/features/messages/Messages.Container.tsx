import React, { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetch, selectMessages, selectStatus } from "./messagesSlice";
import MessagesView from "./Messages.View";

export default function MessagesContainer() {
  const messages = useAppSelector(selectMessages);
  const status = useAppSelector(selectStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetch());
  }, [fetch]);

  return <MessagesView messages={messages} status={status} />;
}
