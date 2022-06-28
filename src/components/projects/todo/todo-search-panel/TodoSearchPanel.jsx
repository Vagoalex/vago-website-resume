import './TodoSearchPanel.scss';

const filterButtons = [
  { id: 1, label: 'All' },
  { id: 2, label: 'Active' },
  { id: 3, label: 'Done' },
];

const TodoSearchPanel = ({ status, statusFilter }) => {
  const defaultBtnClasses = 'TodoSearchPanel__btn';
  const activeBtnClasses = 'TodoSearchPanel__btn TodoSearchPanel__btn--active';

  return (
    <div className='TodoSearchPanel'>
      {filterButtons.map(({ id, label }) => {
        return (
          <button
            key={id}
            className={status === label ? activeBtnClasses : defaultBtnClasses}
            data-status={label}
            onClick={(e) => statusFilter(e.target.getAttribute('data-status'))}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};

export default TodoSearchPanel;
