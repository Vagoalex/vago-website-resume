import Header from './header/Header';
import Hero from './hero/Hero';
import About from './about/About';
import Resume from './resume/Resume';
import Projects from './projects/Projects';
import Footer from './footer/Footer';

import './MainPage.scss';

const MainPage = () => {
  return (
    <div className='MainPage'>
      <Header />
      <Hero />
      <About />
      <Resume />
      <Projects />
      <Footer />
    </div>
  );
};

export default MainPage;
