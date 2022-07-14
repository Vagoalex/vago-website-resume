import Header from './header/Header';
import About from './about/About';
import Resume from './resume/Resume';
import Projects from './projects/Projects';

import './MainPage.scss';

const MainPage = () => {
  return (
    <div className='MainPage'>
      <Header />
      <About />
      <Resume />
      <Projects />
    </div>
  );
};

export default MainPage;
