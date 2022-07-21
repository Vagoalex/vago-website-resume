import { Link, animateScroll as scroll } from 'react-scroll';
import { useDispatch } from 'react-redux';
import { onChangeBurgerMenu } from '../../../../../store/nav/navSlice';

import './NavListItem.scss';

const NavListItem = ({ type, title, pathLink }) => {
  const dispatch = useDispatch();

  const onScroll = () => {
    dispatch(onChangeBurgerMenu(false));
    document.body.style.overflow = 'visible';
    if (title === 'Контакты') scroll.scrollToBottom();
  };

  return (
    <li
      className={`${type}__item  ${
        type === 'NavList' ? 'NavList-items--burger-will-hidden' : ''
      }`}
    >
      <Link
        onClick={onScroll}
        activeClass={`${type}-link--active`}
        to={pathLink}
        spy={true}
        smooth={true}
        duration={150}
        name={title}
        className={`${type}-link`}
      >
        {title}
      </Link>
    </li>
  );
};

export default NavListItem;
