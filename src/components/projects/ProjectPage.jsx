import { lazy, Suspense } from 'react';

import './ProjectPage.scss';

const TodoApp = lazy(() => import('./todo/todo-app/TodoApp'));

const ProjectPage = () => {
  return (
    <section className='ProjectPage'>
      <div className='ProjectPage-container'>
        <TodoApp />
      </div>
    </section>
  );
};

export default ProjectPage;
