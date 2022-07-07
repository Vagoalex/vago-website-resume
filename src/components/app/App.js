import { lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import ProjectPage from '../projects/ProjectPage';

import './App.scss';

const MainPage = lazy(() => import('../pages/main-page/MainPage'));

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<MainPage />} />
        </Routes>
        {/* <ProjectPage /> */}
      </div>
    </Router>
  );
};

export default App;
