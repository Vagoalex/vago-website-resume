import NavList from './nav-list/NavList';
import './Header.scss';

export const Header = () => {
  return (
    <header className='Header'>
      <nav className='Header-nav'>
        <NavList />
      </nav>
    </header>
  );
};
