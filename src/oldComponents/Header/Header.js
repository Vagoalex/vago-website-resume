import { useMemo } from 'react';

import { NavLink } from 'react-router-dom';

import './Header.scss';

const Header = ({ Characters, Comics }) => {
  const routesForNav = useMemo(
    () => [
      { key: 11, path: '/', name: 'Characters', Component: Characters },
      { key: 21, name: 'slash' },
      { key: 31, path: '/comics', name: 'Comics', Component: Comics },
    ],
    [Characters, Comics]
  );

  return (
    <div className='Header wrapper'>
      <h1 className='Header__title'>
        <a
          tabIndex={0}
          className='Header__title-link'
          href='https://developer.marvel.com/'
          target='_blank'
          rel='noreferrer'
        >
          Marvel
        </a>{' '}
        information portal
      </h1>
      <nav className='Header__nav'>
        <ul className='nav'>
          {routesForNav.map((route) => {
            if (route.name === 'slash') {
              return (
                <span key={route.key} className='nav__slash'>
                  /
                </span>
              );
            }

            return (
              <li key={route.key} className='nav__item'>
                <NavLink
                  exact
                  className='nav__link'
                  activeClassName=' nav__link--active'
                  to={route.path}
                >
                  {route.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
