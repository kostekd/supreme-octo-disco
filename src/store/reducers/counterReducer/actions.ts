import { createAction } from "@reduxjs/toolkit";

function withPayloadType<T>() {
  return (t: T) => ({ payload: { number: t } });
}

export const add = createAction("counter/add", withPayloadType<number>());
