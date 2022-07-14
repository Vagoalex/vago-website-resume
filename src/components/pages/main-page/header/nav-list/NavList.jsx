import { useDispatch, useSelector } from 'react-redux';
import { HashLink } from 'react-router-hash-link';
import data from '../../../../../app-data.json';
import { changeActiveLink } from '../../../../../store/nav/navSlice';
import './NavList.scss';

const navList = data['nav-list'];

const NavList = () => {
  const { activeLink } = useSelector((state) => state.nav);

  return (
    <ul className='NavList'>
      {navList.map(({ id, ...data }) => (
        <NavListItem key={id} {...data} activeLink={activeLink} />
      ))}
    </ul>
  );
};

const NavListItem = ({ title, pathLink, activeLink }) => {
  const dispatch = useDispatch();
  const activeLinkClass = 'NavList-link--active';

  return (
    <li
      onClick={() => dispatch(changeActiveLink(title))}
      className='NavList__item'
    >
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
