import NavList from './nav-list/NavList';

import './Header.scss';
import Burger from './burger/Burger';
import BurgerList from './burger/burger-list/BurgerList';

const Header = () => {
  return (
    <>
      <header className='Header'>
        <nav className='Header__nav'>
          <Burger />
          <NavList type='NavList' />
        </nav>
      </header>
      <BurgerList header='Навигация' />
    </>
  );
};

export default Header;
