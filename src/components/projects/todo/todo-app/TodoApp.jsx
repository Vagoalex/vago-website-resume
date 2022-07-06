import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ToDoHeader from '../todo-header/TodoHeader';
import TodoSearchPanel from '../todo-search-panel/TodoSearchPanel';
import TodoList from '../todo-list/TodoList';
import TodoAddForm from '../todo-add-form/TodoAddForm';

import './TodoApp.scss';

const ToDoApp = () => {
  const todoList = useSelector((state) => state.todoList.todoList);
  const [countTodo, setCountTodo] = useState(null);
  const [countDone, setCountDone] = useState(null);

  // const [todoList, setTodoList] = useState(() => {
  //   const localData = localStorage.getItem('todoList');
  //   return localData ? JSON.parse(localData) : defaultTodos;
  // });

  // const [counterId, setCounterId] = useState(() => {
  //   const localCounter = localStorage.getItem('counterId');
  //   return localCounter ? JSON.parse(localCounter) : defaultCounter;
  // });

  useEffect(() => {
    setCountTodo(todoList.length - countDone);
  }, [todoList, countDone]);

  useEffect(() => {
    setCountDone(todoList.filter((todo) => todo.done).length);
  }, [todoList]);

  return (
    <div className='Todo'>
      <div className='Todo-wrapper'>
        <div className='Todo-container'>
          <ToDoHeader todo={countTodo} done={countDone} />
          <TodoSearchPanel />
          <TodoList />
          <TodoAddForm />
        </div>
      </div>
    </div>
  );
};

export default ToDoApp;
