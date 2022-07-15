import { Link, animateScroll as scroll } from 'react-scroll';
import data from '../../../../../app-data.json';
import './NavList.scss';

const navList = data['nav-list'];

const NavList = () => {
  return (
    <ul className='NavList'>
      {navList.map(({ id, ...data }) => (
        <NavListItem key={id} {...data} />
      ))}
    </ul>
  );
};

const NavListItem = ({ title, pathLink }) => {
  return (
    <li className='NavList__item'>
      <Link
        activeClass='NavList-link--active'
        to={pathLink}
        spy={true}
        smooth={true}
        duration={300}
        name={title}
        className='NavList-link'
      >
        {title}
      </Link>
    </li>
  );
};

export default NavList;
