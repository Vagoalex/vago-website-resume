import { useState, useEffect } from 'react';
import ToDoHeader from '../todo-header/TodoHeader';
import TodoSearchPanel from '../todo-search-panel/TodoSearchPanel';
import TodoList from '../todo-list/TodoList';
import TodoAddForm from '../todo-add-form/TodoAddForm';

import './TodoApp.scss';

const ToDoApp = () => {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      text: 'Сделай чертов туду лист, срочно! Я устал ждать!',
      important: false,
      done: true,
    },
    {
      id: 2,
      text: 'Попить пивка!',
      important: true,
      done: false,
    },
  ]);
  const [countTodo, setCountTodo] = useState(null);
  const [countDone, setCountDone] = useState(null);
  const [counterId, setCounterId] = useState(3);

  useEffect(() => {
    setCountTodo(todoList.length - countDone);
  }, [todoList, countDone]);

  useEffect(() => {
    setCountDone(todoList.filter((todo) => todo.done).length);
  }, [todoList]);

  const addTodoItem = ({ todo }) => {
    setTodoList([
      ...todoList,
      { id: counterId, text: todo, important: false, done: true },
    ]);
    setCounterId(counterId + 1);
  };

  return (
    <div className='Todo'>
      <div className='Todo-wrapper'>
        <div className='Todo-container'>
          <ToDoHeader todo={countTodo} done={countDone} />
          <TodoSearchPanel />
          <TodoList todoList={todoList} setTodoList={setTodoList} />
          <TodoAddForm addTodoItem={addTodoItem} />
        </div>
      </div>
    </div>
  );
};

export default ToDoApp;

// import { useState } from 'react';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';

// import './ToDoApp.scss';

// const ToDoApp = () => {
//   const [text, setText] = useState('');
//   const [todoList, setTodoList] = useState([
//     { id: 1, text: 'Сделай чертов туду лист' },
//   ]);
//   const [counterId, setCounterId] = useState(2);

//   const addTodoItem = () => {
//     const validateText = text === '' ? 'Some text' : text;
//     setTodoList([...todoList, { id: counterId, text: validateText }]);
//     setCounterId(counterId + 1);
//     setText('');
//   };

//   const removeTodoItem = (id) => {
//     setTodoList([...todoList.filter((todo) => todo.id !== id)]);
//   };

//   return (
//     <div className='ToDo'>
//       <div className='ToDo-container'>
//         <div className='ToDo-header'>
//           <div className='ToDo-header'>
//             <input
//               className='ToDo-header__input'
//               onChange={(e) => setText(e.target.value)}
//               value={text}
//               placeholder='Введите текст'
//               type='text'
//             />
//             <button className='ToDo-header__btn' onClick={() => addTodoItem()}>
//               Добавить дело
//             </button>
//           </div>
//         </div>
//         <div className='ToDo-body'>
//           <TransitionGroup component='ul' className='ToDo-list'>
//             {todoList.map((listProps, i) => (
//               <CSSTransition
//                 key={listProps.id}
//                 timeout={500}
//                 classNames='item-transition'
//                 onEnter={() => console.log('Enter')}
//                 onExit={() => console.log('Exit')}
//               >
//                 <ToDoItem
//                   removeTodoItem={removeTodoItem}
//                   index={i}
//                   key={listProps.id}
//                   {...listProps}
//                 />
//               </CSSTransition>
//             ))}
//           </TransitionGroup>
//         </div>
//       </div>
//     </div>
//   );
// };

// const ToDoItem = ({ id, index, text, removeTodoItem }) => {
//   return (
//     <li onClick={() => removeTodoItem(id)} id={id} className='ToDo-list__item'>
//       {`${index + 1}: ${text}`}
//     </li>
//   );
// };

// export default ToDoApp;
