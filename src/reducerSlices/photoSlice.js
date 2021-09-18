import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const photoSlice = createSlice({
  name: "photo",
  initialState: { data: [] },
  reducers: {
    addPhoto: (state, action) => {
      state.data.push(action.payload);
    },
  },
});

export const loadPhotosFromApi = () => {
  return (dispatch, getState) => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.data)
      .then((data) => {
        data.map((photo) => dispatch(addPhoto(photo)));
      });
  };
};

export const { addPhoto } = photoSlice.actions;

export default photoSlice.reducer;
