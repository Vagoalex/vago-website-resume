import { Link } from 'react-scroll';
import NavList from './nav-list/NavList';
import HeaderBanner from './header-banner/HeaderBanner';

import './Header.scss';

const Header = () => {
  return (
    <header className='Header' id='home'>
      <nav className='Header__nav'>
        <NavList />
      </nav>
      <HeaderBanner />
      <div className='Header-scroll'>
        <Link to='about' className='Header-scroll__link'>
          link
        </Link>
      </div>
    </header>
  );
};

export default Header;
