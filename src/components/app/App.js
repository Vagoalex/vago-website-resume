import { lazy, Suspense } from 'react';
// import ProjectPage from '../projects/ProjectPage';

import './App.scss';

const MainPage = lazy(() => import('../pages/main-page/MainPage'));

const App = () => {
  return (
    <div className='App'>
      <MainPage />
      {/* <ProjectPage /> */}
    </div>
  );
};

export default App;
