import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import './NavList.scss';

const navList = [
  { id: 'link-1', title: 'Главная', pathLink: '#home' },
  { id: 'link-2', title: 'Обо мне', pathLink: '#about' },
  { id: 'link-3', title: 'Резюме', pathLink: '#resume' },
  { id: 'link-4', title: 'Проекты', pathLink: '#projects' },
  { id: 'link-5', title: 'Контакты', pathLink: '#contacts' },
];

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
