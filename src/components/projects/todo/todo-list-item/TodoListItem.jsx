import './TodoListItem.scss';

const TodoListItem = ({
  id,
  index,
  text,
  important,
  done,
  removeTodoItem,
  onToggleValue,
}) => {
  return (
    <li
      className={
        important ? 'TodoListItem TodoListItem--important' : 'TodoListItem'
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
          onClick={() => removeTodoItem(id)}
          id={id}
        />
        <button
          onClick={() => onToggleValue(id, 'important')}
          className='TodoListItem-buttons-btn TodoListItem-buttons-btn-important'
        />
      </div>
    </li>
  );
};

export default TodoListItem;
