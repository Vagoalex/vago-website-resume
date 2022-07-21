import NavListItem from '../nav-llist-item/NavListItem';
import data from '../../../../../app-data.json';

import './NavList.scss';

const navList = data['nav-list'];

const NavList = ({ type }) => {
  return (
    <ul className={type}>
      {navList.map(({ id, ...data }) => (
        <NavListItem type={type} key={id} {...data} />
      ))}
    </ul>
  );
};

export default NavList;
