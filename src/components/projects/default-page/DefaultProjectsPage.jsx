import { Link } from 'react-router-dom';
import data from '../../../app-data.json';
import DefaultProjectItem from './default-item/DefaultProjectItem';
import './DefaultProjectsPage.scss';

const { title, pages } = data.projectPages;

const DefaultProjectsPage = () => {
  return (
    <div className='DefaultProjectsPage'>
      <div className='DefaultProjects-title-container'>
        <div className='DefaultProjects-title'>
          {title.map((item, index) => {
            const hiddenClass =
              item === '.' ? ' DefaultProjects-item-hidden' : '';

            return (
              <div
                key={index}
                className={`DefaultProjects-title__item${hiddenClass}`}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
      <div className='DefaultProjects-content'>
        {pages.map((data) => (
          <DefaultProjectItem key={data.id} data={data} />
        ))}
      </div>
      <div className='DefaultProjectsPage-home'>
        <Link to='/' className='DefaultProjectsPage-home__btn'>
          Нажми, чтобы вернуться на главную
        </Link>
      </div>
    </div>
  );
};

export default DefaultProjectsPage;
