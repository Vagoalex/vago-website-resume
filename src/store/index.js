import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoList/todo';
import filterTodoReducer from './todoList/filterTodo';
import weatherReducer from './weather/weather';
import weatherFavorListReducer from './weather/favorListSlice';

const store = configureStore({
  reducer: {
    todoList: todoReducer,
    filterTodo: filterTodoReducer,
    weather: weatherReducer,
    weatherFavorList: weatherFavorListReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;