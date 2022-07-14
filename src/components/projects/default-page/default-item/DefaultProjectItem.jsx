import { useDispatch } from 'react-redux';
import { changeActivePage } from '../../../../store/page/pageSlice';
import todoImg from '../../../../assets/images/project-page/todo.jpg';
import weatherImg from '../../../../assets/images/project-page/weather.jpg';

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

// const LinkLiveCard = ({ id, link, liveTitle }) => {
//   switch (id) {
//     case 'mini-projects':
//       return (
//         <Link to={link} className='Project-btn live' title={liveTitle}>
//           see live
//         </Link>
//       );
//     case 'marvel-app':
//       return (
//         <a
//           href={link}
//           className='Project-btn live'
//           target='_blank'
//           rel='noreferrer'
//           title={liveTitle}
//         >
//           see live
//         </a>
//       );
//     case 'hero-panel':
//       return (
//         <a
//           href={link}
//           className='Project-btn live'
//           target='_blank'
//           rel='noreferrer'
//           title={liveTitle}
//         >
//           github repo
//         </a>
//       );

//     default:
//       throw new Error('Invalid id');
//   }
// };

export default DefaultProjectItem;
