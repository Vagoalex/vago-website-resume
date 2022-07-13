import { lazy, Suspense, useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import LoadingPage from '../pages/loading-page/LoadingPage';

import './App.scss';

const MainPage = lazy(() => import('../pages/main-page/MainPage'));
const ProjectPage = lazy(() => import('../projects/ProjectPage'));

const App = () => {
  const location = useLocation();
  const [suspended, setSuspended] = useState(false);
  useEffect(() => {
    setTimeout(() => setSuspended((s) => (s ? s : !s)), 2500);
  }, []);

  return (
    <div className='App'>
      <TransitionGroup component={null}>
        <CSSTransition key={location.key} classNames='fade' timeout={1000}>
          <Routes location={location}>
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
            <Route path='*' element={<>Error 404...</>} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default App;
