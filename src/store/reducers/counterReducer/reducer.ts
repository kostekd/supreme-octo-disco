import { createReducer } from "@reduxjs/toolkit";
import { add } from "./actions";

interface counterState {
    value: number,
};

const initialState: counterState = {
    value: 0,
}

const counterReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(add, (state, action) => {
        state.value += action.payload.number;
    })
})

export default counterReducer;