import { useSelector } from 'react-redux';

import './WeatherForecast.scss';

const WeatherForecast = () => {
  const { activeTab, forecastData, weatherData } = useSelector(
    (state) => state.weather
  );

  const elements = forecastData.map((data, i) => (
    <ForecastView key={i} {...data} />
  ));

  return (
    <div className={activeTab === 'Forecast' ? 'WeatherForecast' : 'hidden'}>
      <div className='WeatherForecast__city-name'>
        {weatherData.city || 'Enter the city'}
      </div>
      <div className='WeatherForecast__days'>{elements}</div>
    </div>
  );
};

const ForecastView = ({ day, feels, temp, time, img, weather }) => {
  return (
    <>
      <div className='forecast-day'>
        <div className='forecast-day-date'>
          <p className='forecast-day-date__date'>{day}</p>
          <p className='forecast-day-date__time'>{time}</p>
        </div>
        <div className='forecast-day-weather'>
          <div className='forecast-weather'>
            <p className='forecast-weather__temperature'>
              Temperature:{' '}
              <span className='temperature-value'>{temp}&deg;</span>
            </p>
            <p className='forecast-weather__feelsLike'>
              Feels like: <span className='feelsLike-value'>{feels}&deg;</span>
            </p>
          </div>
          <div className='forecast-condition'>
            <p className='forecast-condition__title'>{weather}</p>
            <span
              className='forecast-condition__img'
              style={img ? { backgroundImage: `url(${img})` } : null}
            ></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherForecast;
