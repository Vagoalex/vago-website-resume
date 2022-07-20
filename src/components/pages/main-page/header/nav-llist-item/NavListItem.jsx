import { Link } from 'react-scroll';
import { useDispatch } from 'react-redux';
import { onChangeBurgerMenu } from '../../../../../store/nav/navSlice';

import './NavListItem.scss';

const NavListItem = ({ type, title, pathLink }) => {
  const dispatch = useDispatch();

  return (
    <li className={`${type}__item`}>
      <Link
        onClick={() => {
          dispatch(onChangeBurgerMenu(false));
          document.body.style.overflow = 'visible';
        }}
        activeClass={`${type}-link--active`}
        to={pathLink}
        spy={true}
        smooth={true}
        duration={300}
        name={title}
        className={`${type}-link`}
      >
        {title}
      </Link>
    </li>
  );
};

export default NavListItem;
