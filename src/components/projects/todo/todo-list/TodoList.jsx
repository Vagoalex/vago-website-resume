import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { toggleValue, deleteTodo } from '../../../../store/todoList/todo';
import TodoListItem from '../todo-list-item/TodoListItem';

import './TodoList.scss';

const TodoList = () => {
  const filteredTodoListSelector = createSelector(
    (state) => state.filterTodo.activeFilter,
    (state) => state.todoList.todoList,
    (filter, todoList) => {
      if (filter === 'All') {
        return todoList;
      }
      if (filter === 'Active') {
        return todoList.filter((todo) => todo.done === false);
      }
      if (filter === 'Done') {
        return todoList.filter((todo) => todo.done === true);
      } else {
        return todoList.filter((todo) => todo.status === filter);
      }
    }
  );
  const filteredTodoList = useSelector(filteredTodoListSelector);
  const todoList = useSelector((state) => state.todoList.todoList);

  const dispatch = useDispatch();

  const onDeleteTodo = useCallback(
    (id) => {
      dispatch(deleteTodo(id));
      console.log(id);
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const onToggleValue = (id, propName) => {
    const idx = todoList.findIndex((todo) => todo.id === id);
    const oldItem = todoList[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };

    dispatch(
      toggleValue([
        ...todoList.slice(0, idx),
        newItem,
        ...todoList.slice(idx + 1),
      ])
    );
  };

  const renderElements = (arr) => {
    if (arr.length === 0) {
      return (
        <CSSTransition timeout={1000} classNames='item-transition'>
          <li className='TodoList-item-empty'>
            <p className='TodoList-item-empty__text'>
              Никаких дел нет, Добби свободен!
            </p>
          </li>
        </CSSTransition>
      );
    }

    return arr.map((listProps, i) => (
      <CSSTransition
        key={listProps.id}
        timeout={1000}
        classNames='item-transition'
      >
        <TodoListItem
          onDeleteTodo={() => onDeleteTodo(listProps.id)}
          onToggleValue={onToggleValue}
          index={i}
          key={listProps.id}
          {...listProps}
        />
      </CSSTransition>
    ));
  };

  const elements = renderElements(filteredTodoList);

  return (
    <div className='TodoList'>
      <TransitionGroup component='ul' className='TodoList-list'>
        {elements}
      </TransitionGroup>
    </div>
  );
};

export default TodoList;
