import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const albumSlice = createSlice({
  name: "album",
  initialState: {
    data: [],
  },
  reducers: {
    addAlbum: (state, action) => {
      state.data.push(action.payload);
    },
  },
});

export const loadAlbumsFromApi = () => {
  return (dispatch, getState) => {
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.data)
      .then((data) => {
        data.map((album) => dispatch(addAlbum(album)));
      });
  };
};

export const { addAlbum } = albumSlice.actions;

export default albumSlice.reducer;
