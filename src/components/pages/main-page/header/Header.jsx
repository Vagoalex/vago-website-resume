import NavList from './nav-list/NavList';
import './Header.scss';
import HeaderBanner from './header-banner/HeaderBanner';

export const Header = () => {
  return (
    <header className='Header'>
      <nav className='Header__nav'>
        <NavList />
      </nav>
      {/* Very biggest component :))) */}
      <HeaderBanner />
    </header>
  );
};
