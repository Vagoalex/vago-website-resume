import { useSelector } from 'react-redux';

import './WeatherDetails.scss';

const WeatherDetails = () => {
  const { activeTab, weatherData } = useSelector((state) => state.weather);
  const { city, temp, feels, weather, sunrise, sunset } = weatherData;

  if (weatherData.length === 0) {
    return (
      <div className={activeTab === 'Details' ? 'WeatherDetails' : 'hidden'}>
        <div className='WeatherDetails__name'>Enter the city</div>
        <div className='WeatherDetails-about'></div>
      </div>
    );
  }
  return (
    <div className={activeTab === 'Details' ? 'WeatherDetails' : 'hidden'}>
      <div className='WeatherDetails__name'>{city}</div>
      <div className='WeatherDetails-about'>
        <p className='WeatherDetails-about__text'>
          Temperature:{' '}
          <span className='temperValue specialValue'>{temp}&deg;</span>
        </p>
        <p className='WeatherDetails-about__text'>
          Feels like:{' '}
          <span className='feelsValue specialValue'>{feels}&deg;</span>
        </p>
        <p className='WeatherDetails-about__text'>
          Weather: <span className='weatherValue specialValue'>{weather}</span>
        </p>
        <p className='WeatherDetails-about__text'>
          Sunrise: <span className='sunriseValue specialValue'>{sunrise}</span>
        </p>
        <p className='WeatherDetails-about__text'>
          Sunset: <span className='sunsetValue specialValue'>{sunset}</span>
        </p>
      </div>
    </div>
  );
};

export default WeatherDetails;
