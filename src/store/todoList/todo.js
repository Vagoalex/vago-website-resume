import { createSlice } from '@reduxjs/toolkit';

const todoListState = {
  todoList: [
    {
      id: 1,
      text: 'Сделай чертов туду лист, срочно! Я устал ждать!',
      important: false,
      done: true,
    },
    {
      id: 2,
      text: 'Попить пивка для рывка!',
      important: true,
      done: false,
    },
  ],
  counterId: 3,
};

const todoListSlice = createSlice({
  name: 'todo-list',
  initialState: todoListState,
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== action.payload
      );
    },
    toggleValue: (state, action) => {
      state.todoList = action.payload;
    },
    plusCounter: (state) => {
      state.counterId += 1;
    },
  },
});

const { actions, reducer } = todoListSlice;
export default reducer;

export const { addTodo, deleteTodo, toggleValue, plusCounter } = actions;
