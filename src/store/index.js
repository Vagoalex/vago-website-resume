import { configureStore } from '@reduxjs/toolkit';
import pageReducer from './page/pageSlice';
import todoReducer from './todoList/todo';
import filterTodoReducer from './todoList/filterTodo';
import weatherReducer from './weather/weather';
import weatherFavorListReducer from './weather/favorListSlice';

const store = configureStore({
  reducer: {
    page: pageReducer,
    todoList: todoReducer,
    filterTodo: filterTodoReducer,
    weather: weatherReducer,
    weatherFavorList: weatherFavorListReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
