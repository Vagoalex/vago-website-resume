import { createSlice } from '@reduxjs/toolkit';

const filterTodoState = {
  filteredTodo: [],
  activeFilter: 'All',
};

const filterTodoSlice = createSlice({
  name: 'filter-todo',
  initialState: filterTodoState,
  reducers: {
    changeActiveFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
  },
});

const { actions, reducer } = filterTodoSlice;
export default reducer;

export const { changeActiveFilter } = actions;
