import NavList from './nav-list/NavList';

import './Header.scss';

const Header = () => {
  return (
    <header className='Header'>
      <nav className='Header__nav'>
        <NavList />
      </nav>
    </header>
  );
};

export default Header;
