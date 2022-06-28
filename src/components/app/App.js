import { lazy, Suspense } from 'react';
import ProjectPage from '../projects/ProjectPage';

import './App.scss';

const App = () => {
  return (
    <div className='App'>
      <ProjectPage />
    </div>
  );
};

export default App;
