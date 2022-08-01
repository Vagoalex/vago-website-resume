import { lazy, Suspense, memo } from 'react';
import { useSelector } from 'react-redux';

import './ProjectPage.scss';

const DefaultProjectsPage = lazy(() =>
  import('./default-page/DefaultProjectsPage')
);
const TodoApp = lazy(() => import('./todo/todo-app/TodoApp'));
const WeatherApp = lazy(() => import('./weather/weather-app/WeatherApp'));

const ProjectPage = () => {
  const { activePage } = useSelector((state) => state.page);

  const defaultPage = activePage === 'default' ? <DefaultProjectsPage /> : null;
  const todoPage = activePage === 'todo' ? <TodoApp /> : null;
  const weatherPage = activePage === 'weather' ? <WeatherApp /> : null;

  return (
    <section className='ProjectPage'>
      <div className='ProjectPage-container'>
        <Suspense fallback={<LoadingProjectPage />}>
          {defaultPage}
          {todoPage}
          {weatherPage}
        </Suspense>
      </div>
    </section>
  );
};

const LoadingProjectPage = () => {
  <>
    <div className='LoadingProjectPage'>
      <h2 className='LoadingProjectPage__title'>Loading...</h2>
    </div>
  </>;
};

export default memo(ProjectPage);
