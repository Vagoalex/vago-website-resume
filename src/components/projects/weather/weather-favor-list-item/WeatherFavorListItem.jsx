import { useDispatch } from 'react-redux';

import {
  fetchCityWeather,
  fetchForecast,
} from '../../../../store/weather/weather';

import './WeatherFavorListItem.scss';

const WeatherFavorListItem = ({ onDeleteFavor, name }) => {
  const dispatch = useDispatch();

  return (
    <>
      <li
        onClick={() => {
          dispatch(fetchCityWeather(name));
          dispatch(fetchForecast(name));
        }}
        className='WeatherFavorListItem'
      >
        {name}
        <div
          onClick={(e) => {
            e.stopPropagation();
            onDeleteFavor(e);
          }}
          className='WeatherFavorListItem-delete'
        >
          <span className='WeatherFavorListItem-delete__element'></span>
        </div>
      </li>
    </>
  );
};

export default WeatherFavorListItem;
