import { useDispatch, useSelector } from 'react-redux';
import { Link, animateScroll as scroll } from 'react-scroll';
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

const NavListItem = ({ title, pathLink }) => {
  const dispatch = useDispatch();

  return (
    <li
      onClick={() => dispatch(changeActiveLink(title))}
      className='NavList__item'
    >
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
