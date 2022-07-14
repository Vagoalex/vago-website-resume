import { useSelector, useDispatch } from 'react-redux';
import { addFavorCity } from '../../../../../../store/weather/favorListSlice';

import './WeatherNow.scss';

const WeatherNow = () => {
  const { activeTab, weatherData } = useSelector((state) => state.weather);
  const { favorList } = useSelector((state) => state.weatherFavorList);
  const dispatch = useDispatch();
  const { city, img, temp } = weatherData;

  if (weatherData.length === 0) {
    return (
      <div className={activeTab === 'Now' ? 'WeatherNow' : 'hidden'}>
        <div className='WeatherNow-empty'>
          <p className='WeatherNow-empty__title'>Enter the city</p>
        </div>
      </div>
    );
  }

  const addCity = (city) => {
    const cityExist = favorList.filter((item) => item.name === city);
    if (cityExist && cityExist.length !== 0) return;

    dispatch(addFavorCity({ id: city, name: city }));
  };

  return (
    <div className={activeTab === 'Now' ? 'WeatherNow' : 'hidden'}>
      <p className='WeatherNow__temp'>
        {temp}
        <span>&deg;</span>
      </p>
      <span
        className='WeatherNow__image'
        style={img ? { backgroundImage: `url(${img})` } : null}
      ></span>
      <div className='WeatherNow-city'>
        <p className='WeatherNow-city__text'>{city}</p>
        <span
          onClick={() => addCity(city)}
          className='WeatherNow-city__like'
        ></span>
      </div>
    </div>
  );
};

export default WeatherNow;
