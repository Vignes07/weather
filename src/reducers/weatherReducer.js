import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dash: [],
};

const weatherReducer = createSlice({
  name: "dash",
  initialState,
  reducers: {
    addZone: {
      reducer: (state, action) => {
        state.dash.push(action.payload);
      },
      prepare: (location, day, temperature) => {
        return {
          payload: {
            location,
            day,
            temperature,
          },
        };
      },
    },
    removeZone: (state, action) => {
      const id = action.payload;
      state.dash = state.dash.filter((zone) => zone.id !== id);
    },
  },
});

export const { addZone, removeZone } = weatherReducer.actions;

export default weatherReducer.reducer;
