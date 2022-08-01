import { memo } from 'react';
import './TodoHeader.scss';

const TodoHeader = ({ todo, done }) => {
  return (
    <div className='TodoHeader'>
      <h2 className='TodoHeader__title'>Todo List</h2>
      <div className='TodoHeader-info'>
        <p className='TodoHeader-info__desk'>
          <span className='TodoHeader-info__desk--active'>{`${todo} `}</span>
          more to do
        </p>
        <p className='TodoHeader-info__desk'>
          <span className='TodoHeader-info__desk--active'>{`${done} `}</span>
          done
        </p>
      </div>
    </div>
  );
};

export default memo(TodoHeader);
