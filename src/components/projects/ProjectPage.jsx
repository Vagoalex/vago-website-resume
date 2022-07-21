import { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';

import LoadingPage from '../pages/loading-page/LoadingPage';

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
        <Suspense fallback={<LoadingPage />}>
          {defaultPage}
          {todoPage}
          {weatherPage}
        </Suspense>
      </div>
    </section>
  );
};

export default ProjectPage;
