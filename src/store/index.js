import { configureStore } from '@reduxjs/toolkit';
import navReducer from './nav/navSlice';
import pageReducer from './page/pageSlice';
import todoReducer from './todoList/todo';
import filterTodoReducer from './todoList/filterTodo';
import weatherReducer from './weather/weather';
import weatherFavorListReducer from './weather/favorListSlice';

const store = configureStore({
  reducer: {
    nav: navReducer,
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
