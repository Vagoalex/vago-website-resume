import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import data from '../../../../../app-data.json';
import './NavList.scss';

const navList = data['nav-list'];

const NavList = () => {
  const [activeLink, setActiveLink] = useState('Главная');

  return (
    <ul className='NavList'>
      {navList.map(({ id, ...data }) => (
        <NavListItem key={id} {...data} activeLink={activeLink} />
      ))}
    </ul>
  );
};

const NavListItem = ({ title, pathLink, activeLink }) => {
  const activeLinkClass = 'NavList-link--active';

  return (
    <li className='NavList__item'>
      <HashLink
        to={`/${pathLink}`}
        name={title}
        className={`NavList-link ${
          activeLink === title ? activeLinkClass : ''
        }`}
      >
        {title}
      </HashLink>
    </li>
  );
};

export default NavList;
