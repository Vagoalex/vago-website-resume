import { TransitionGroup, CSSTransition } from 'react-transition-group';
import TodoListItem from '../todo-list-item/TodoListItem';

import './TodoList.scss';

const TodoList = ({ todoList, setTodoList }) => {
  const removeTodoItem = (id) => {
    setTodoList([...todoList.filter((todo) => todo.id !== id)]);
  };

  const onToggleValue = (id, propName) => {
    const idx = todoList.findIndex((todo) => todo.id === id);
    const oldItem = todoList[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };
    setTodoList([
      ...todoList.slice(0, idx),
      newItem,
      ...todoList.slice(idx + 1),
    ]);
  };

  return (
    <div className='TodoList'>
      <TransitionGroup component='ul' className='TodoList-list'>
        {todoList.map((listProps, i) => (
          <CSSTransition
            key={listProps.id}
            timeout={500}
            classNames='item-transition'
          >
            <TodoListItem
              removeTodoItem={removeTodoItem}
              onToggleValue={onToggleValue}
              index={i}
              key={listProps.id}
              {...listProps}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default TodoList;
