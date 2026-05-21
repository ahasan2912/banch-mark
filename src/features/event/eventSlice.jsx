import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  event: null,
};

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    eventInformation: (state, action) => {
      state.event = action.payload;
    },
    removeeventInfo: (state) => {
      state.event = null;
    },
  },
});

export const { eventInformation, removeeventInfo } = eventSlice.actions;
export default eventSlice.reducer;