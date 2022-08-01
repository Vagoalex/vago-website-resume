import { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeActiveFilter } from '../../../../store/todoList/filterTodo';
import './TodoSearchPanel.scss';

const filterButtons = [
  { id: 1, label: 'All' },
  { id: 2, label: 'Active' },
  { id: 3, label: 'Done' },
];

const TodoSearchPanel = () => {
  const activeFilter = useSelector((state) => state.filterTodo.activeFilter);
  const dispatch = useDispatch();

  const defaultBtnClasses = 'TodoSearchPanel__btn';
  const activeBtnClasses = 'TodoSearchPanel__btn TodoSearchPanel__btn--active';

  return (
    <div className='TodoSearchPanel'>
      {filterButtons.map(({ id, label }) => {
        return (
          <button
            key={id}
            className={
              activeFilter === label ? activeBtnClasses : defaultBtnClasses
            }
            data-status={label}
            onClick={(e) =>
              dispatch(changeActiveFilter(e.target.getAttribute('data-status')))
            }
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};

export default memo(TodoSearchPanel);
