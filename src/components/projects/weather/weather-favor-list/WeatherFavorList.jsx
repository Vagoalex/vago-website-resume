import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { deleteFavorCity } from '../../../../store/weather/favorListSlice';

import WeatherFavorListItem from '../weather-favor-list-item/WeatherFavorListItem';
import './WeatherFavorList.scss';

const WeatherFavorList = () => {
  const { favorList } = useSelector((state) => state.weatherFavorList);
  const dispatch = useDispatch();

  const onDeleteFavor = useCallback(
    (itemName) => {
      dispatch(deleteFavorCity(itemName));
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const renderElements = (arr) => {
    if (arr.length === 0) {
      return (
        <CSSTransition timeout={1500} classNames='favorItem-transition'>
          <li className='WeatherFavorListItem-empty'>
            <p className='WeatherFavorListItem-empty__text'>
              Locations not found.
            </p>
          </li>
        </CSSTransition>
      );
    }

    return arr.map(({ name }) => (
      <CSSTransition
        key={name}
        timeout={1500}
        classNames='favorItem-transition'
      >
        <WeatherFavorListItem
          onDeleteFavor={() => onDeleteFavor(name)}
          key={name}
          name={name}
        />
      </CSSTransition>
    ));
  };

  const elements = renderElements(favorList);

  return (
    <div className='WeatherFavorList'>
      <div className='WeatherFavorList__title'>Added Locations:</div>
      <TransitionGroup component='ul' className='WeatherFavorList__cities'>
        {elements}
      </TransitionGroup>
    </div>
  );
};

export default WeatherFavorList;
