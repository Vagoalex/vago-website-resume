import { memo } from 'react';
import './TodoListItem.scss';

const defaultButtonImportantClasses =
  'TodoListItem-buttons-btn TodoListItem-buttons-btn-important';
const activeButtonImportantClasses =
  'TodoListItem-buttons-btn TodoListItem-btn--important';

const TodoListItem = ({
  id,
  index,
  text,
  important,
  done,
  onToggleValue,
  onDeleteTodo,
}) => {
  return (
    <li
      className={
        important ? 'TodoListItem TodoListItem--important' : 'TodoListItem'
      }
      style={
        done
          ? { border: '1px solid rgb(9, 255, 0)', color: 'rgb(9, 255, 0)' }
          : null
      }
    >
      <p
        className={
          done
            ? 'TodoListItem__text TodoListItem__text--done'
            : 'TodoListItem__text'
        }
        onClick={() => onToggleValue(id, 'done')}
      >
        {' '}
        <span
          className={
            done
              ? 'TodoListItem__index TodoListItem__index--done'
              : 'TodoListItem__index'
          }
        >{` ${index + 1} `}</span>
        {text}
      </p>
      <div className='TodoListItem-buttons'>
        <button
          className='TodoListItem-buttons-btn TodoListItem-buttons-btn-delete'
          onClick={onDeleteTodo}
          id={id}
        />
        <button
          onClick={() => onToggleValue(id, 'important')}
          className={
            important
              ? activeButtonImportantClasses
              : defaultButtonImportantClasses
          }
        />
      </div>
    </li>
  );
};

export default memo(TodoListItem);
