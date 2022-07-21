import { Link } from 'react-scroll';
import HeroBanner from './hero-banner/HeroBanner';

import './Hero.scss';

const Hero = () => {
  return (
    <section className='Hero' id='home'>
      <HeroBanner />
      <div className='Hero-scroll'>
        <Link to='about' className='Hero-scroll__link'>
          link
        </Link>
      </div>
    </section>
  );
};

export default Hero;
