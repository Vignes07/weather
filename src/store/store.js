import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "../reducers/weatherReducer";

const store = configureStore({
  reducer: {
    dash: weatherReducer,
  },
});

export default store;
