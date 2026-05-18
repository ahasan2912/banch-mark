import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  target: null,
};

const targetSlice = createSlice({
  name: "target",
  initialState,
  reducers: {
    targetInformation: (state, action) => {
      state.target = action.payload;
    },
    removeTargetInfo: (state) => {
      state.target = null;
    },
  },
});

export const { targetInformation, removeTargetInfo } = targetSlice.actions;
export default targetSlice.reducer;