import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeScreenWidth,
  checkActiveMenu,
} from '../../../../store/nav/navSlice';
import NavList from './nav-list/NavList';

import './Header.scss';
import Burger from './burger/Burger';
import BurgerList from './burger/burger-list/BurgerList';

const Header = () => {
  const { activeScreenBurgerMenu } = useSelector((state) => state.nav);
  const dispatch = useDispatch();

  const trackWidth = useCallback(() => {
    dispatch(changeScreenWidth(window.outerWidth));

    window.outerWidth <= 768
      ? dispatch(checkActiveMenu(true))
      : dispatch(checkActiveMenu(false));
  }, [dispatch]);

  useEffect(() => {
    dispatch(changeScreenWidth(window.outerWidth));
    window.outerWidth <= 768
      ? dispatch(checkActiveMenu(true))
      : dispatch(checkActiveMenu(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.addEventListener('resize', trackWidth);
    return () => {
      window.removeEventListener('resize', trackWidth);
    };
  }, [trackWidth]);

  return (
    <>
      <header className='Header'>
        <nav className='Header__nav'>
          {activeScreenBurgerMenu ? <Burger /> : <NavList type='NavList' />}
        </nav>
      </header>
      {activeScreenBurgerMenu ? <BurgerList header='Навигация' /> : null}
    </>
  );
};

export default Header;
