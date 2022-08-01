import { useDispatch } from 'react-redux';
import { changeActivePage } from '../../../../store/page/pageSlice';
import todoImg from '../../../../assets/images/project-page/todo-adaptive.webp';
import weatherImg from '../../../../assets/images/project-page/weather-adaptive.webp';

import './DefaultProjectItem.scss';

const DefaultProjectItem = ({ data }) => {
  const dispatch = useDispatch();
  const { name, title, id, seeLiveTitle } = data;

  return (
    <div className='DefaultProjectsItem'>
      <ImageProjectItem id={id} />
      <div className='DefaultProjectsItem-content'>
        <h2 className='DefaultProjectsItem-content__title'>{title}</h2>
        <button
          onClick={() => dispatch(changeActivePage(name))}
          className='DefaultProjectsItem-content__btn'
          title={seeLiveTitle}
        >
          Перейти к приложению
        </button>
      </div>
    </div>
  );
};

const ImageProjectItem = ({ id }) => {
  switch (id) {
    case 'todo':
      return (
        <img src={todoImg} className='DefaultProjectsItem-img' alt='todo-img' />
      );
    case 'weather':
      return (
        <img
          src={weatherImg}
          className='DefaultProjectsItem-img'
          alt='weather-img'
        />
      );

    default:
      throw new Error('Invalid id');
  }
};

export default DefaultProjectItem;
