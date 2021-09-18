import { configureStore } from "@reduxjs/toolkit";
import photoReducer from "../reducerSlices/photoSlice";
import albumReducer from "../reducerSlices/albumSlice";

export default configureStore({
  reducer: { photo: photoReducer, album: albumReducer },
});
