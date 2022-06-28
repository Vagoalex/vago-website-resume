import './TodoSearchPanel.scss';

const TodoSearchPanel = () => {
  return (
    <div className='TodoSearchPanel'>
      <input
        className='TodoSearchPanel__input'
        placeholder='type to search'
        type='text'
      />
      <button className='TodoSearchPanel__btn TodoSearchPanel__btn--active'>
        All
      </button>
      <button className='TodoSearchPanel__btn'>Active</button>
      <button className='TodoSearchPanel__btn'>Done</button>
    </div>
  );
};

export default TodoSearchPanel;
