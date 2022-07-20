import { useDispatch, useSelector } from 'react-redux';
import { onChangeBurgerMenu } from '../../../../../../store/nav/navSlice';
import NavList from '../../nav-list/NavList';
import data from '../../../../../../app-data.json';

import './BurgerList.scss';

const navList = data['nav-list'];

const BurgerList = ({ header }) => {
  const dispatch = useDispatch();
  const { activeBurgerMenu } = useSelector((state) => state.nav);

  return (
    <div
      className={
        activeBurgerMenu ? 'BurgerList BurgerList--active' : 'BurgerList'
      }
      onClick={() => dispatch(onChangeBurgerMenu(false))}
    >
      <div className='BurgerList-blur'></div>
      <div className='BurgerList-content' onClick={(e) => e.stopPropagation()}>
        <div className='BurgerList-content__header'>{header}</div>
        <NavList type='BurgerNavList' navList={navList} />
      </div>
    </div>
  );
};

export default BurgerList;
