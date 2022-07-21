import { lazy, Suspense, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import LoadingPage from '../pages/loading-page/LoadingPage';
import Page404 from '../pages/page-404/Page404';

import './App.scss';

const MainPage = lazy(() => import('../pages/main-page/MainPage'));
const ProjectPage = lazy(() => import('../projects/ProjectPage'));

const App = () => {
  const [suspended, setSuspended] = useState(false);
  useEffect(() => {
    setTimeout(() => setSuspended((s) => (s ? s : !s)), 2500);
  }, []);

  return (
    <div className='App'>
      <Routes>
        <Route
          index
          path='/'
          element={
            <Suspense fallback={<LoadingPage />}>
              {suspended ? <MainPage /> : <LoadingPage />}
            </Suspense>
          }
        />
        <Route
          path='/project-page'
          element={
            <Suspense fallback={<LoadingPage />}>
              {suspended ? <ProjectPage /> : <LoadingPage />}
            </Suspense>
          }
        />
        <Route
          path='*'
          element={
            <Suspense fallback={<LoadingPage />}>
              {suspended ? <Page404 /> : <LoadingPage />}
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
