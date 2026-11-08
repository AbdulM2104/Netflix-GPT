import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    moviesFromTMDB: [],
    moviesFromGPT: [],
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptSearchResults: (state, action) => {
      const { moviesFromTMDB, moviesFromGPT } = action.payload;
      // state.gptSearchResults = action.payload;
      state.moviesFromTMDB = moviesFromTMDB;
      state.moviesFromGPT = moviesFromGPT;
    },
  },
});

export const { toggleGptSearchView, addGptSearchResults } = gptSlice.actions;
export default gptSlice.reducer;
