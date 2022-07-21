import { createSlice } from '@reduxjs/toolkit';

const navSlice = createSlice({
  name: 'nav',
  initialState: {
    activeBurgerMenu: false,
  },
  reducers: {
    onChangeBurgerMenu: (state, action) => {
      state.activeBurgerMenu = action.payload;
    },
  },
});

const { actions, reducer } = navSlice;
export default reducer;

export const { onChangeBurgerMenu } = actions;
