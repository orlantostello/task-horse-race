import { createSlice } from "@reduxjs/toolkit";
import horsesDate from "../utils/horsesDate";

const initialState = {
  horses: horsesDate,
  pedestal: [],
};

const horsesSlice = createSlice({
  name: "horses",
  initialState,
  reducers: {
    raceData(state, action) {
      state.horses = action.payload;
    },
    pedestalArray(state, action) {
      state.pedestal = action.payload;
    },
  },
});

export default horsesSlice.reducer;
export const { raceData, pedestalArray } = horsesSlice.actions;
