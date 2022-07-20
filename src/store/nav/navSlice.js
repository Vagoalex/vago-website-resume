import { createSlice } from '@reduxjs/toolkit';

const navSlice = createSlice({
  name: 'nav',
  initialState: {
    screenWidth: 768,
    activeScreenBurgerMenu: false,
    activeBurgerMenu: false,
  },
  reducers: {
    changeScreenWidth: (state, action) => {
      state.screenWidth = action.payload;
    },
    checkActiveMenu: (state, action) => {
      state.activeScreenBurgerMenu = action.payload;
    },
    onChangeBurgerMenu: (state, action) => {
      state.activeBurgerMenu = action.payload;
    },
  },
});

const { actions, reducer } = navSlice;
export default reducer;

export const { changeScreenWidth, checkActiveMenu, onChangeBurgerMenu } =
  actions;
