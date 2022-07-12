import { HashLink } from 'react-router-hash-link';
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
        <HashLink to={`/#about`} className='Header-scroll__link'>
          link
        </HashLink>
      </div>
    </header>
  );
};

export default Header;
