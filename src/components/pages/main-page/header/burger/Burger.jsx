import { useDispatch, useSelector } from 'react-redux';
import { onChangeBurgerMenu } from '../../../../../store/nav/navSlice';

import './Burger.scss';

const Burger = () => {
  const dispatch = useDispatch();
  const { activeBurgerMenu } = useSelector((state) => state.nav);

  return (
    <div className='NavList Burger'>
      <div
        onClick={() => dispatch(onChangeBurgerMenu(!activeBurgerMenu))}
        className='Burger-item'
      >
        <span />
      </div>
    </div>
  );
};

export default Burger;
