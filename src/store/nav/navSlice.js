import { createSlice } from '@reduxjs/toolkit';

const navState = {
  activeLink: 'Главная',
};

const navSlice = createSlice({
  name: 'nav',
  initialState: navState,
  reducers: {
    changeActiveLink: (state, action) => {
      state.activeLink = action.payload;
    },
  },
});

const { actions, reducer } = navSlice;
export default reducer;

export const { changeActiveLink } = actions;
