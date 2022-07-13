import Header from './header/Header';
import About from './about/About';
import Resume from './resume/Resume';
import Projects from './projects/Projects';

import './MainPage.scss';

const MainPage = () => {
  return (
    <>
      <Header />
      <About />
      <Resume />
      <Projects />
    </>
  );
};

export default MainPage;
