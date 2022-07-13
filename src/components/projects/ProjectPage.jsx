import { lazy, Suspense } from 'react';

import './ProjectPage.scss';

const TodoApp = lazy(() => import('./todo/todo-app/TodoApp'));
const WeatherApp = lazy(() => import('./weather/weather-app/WeatherApp'));

const ProjectPage = () => {
  return (
    <section className='ProjectPage'>
      <div className='ProjectPage-container'>
        <TodoApp />
        {/* <WeatherApp /> */}
      </div>
    </section>
  );
};

export default ProjectPage;
