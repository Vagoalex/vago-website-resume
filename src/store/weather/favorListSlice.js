import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorList: [],
};

const weatherFavorListSlice = createSlice({
  name: 'weatherFavorList',
  initialState,
  reducers: {
    addFavorCity: (state, action) => {
      state.favorList.push(action.payload);
    },
    deleteFavorCity: (state, action) => {
      state.favorList = state.favorList.filter(
        (item) => item.name !== action.payload
      );
    },
  },
});

const { actions, reducer } = weatherFavorListSlice;

export default reducer;

export const { addFavorCity, deleteFavorCity } = actions;
