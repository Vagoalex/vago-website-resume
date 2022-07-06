import { useState, lazy, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeActiveTab } from '../../../../store/weather/weather';
import './WeatherTabs.scss';

const WeatherNow = lazy(() =>
  import('./weather-content/weather-now/WeatherNow')
);
const WeatherDetails = lazy(() =>
  import('./weather-content/weather-details/WeatherDetails')
);
const WeatherForecast = lazy(() =>
  import('./weather-content/weather-forecast/WeatherForecast')
);

const tabButtons = [
  { id: 'Now', label: 'Now', clazzName: 'Tab-btn' },
  { id: 'Details', label: 'Details', clazzName: 'Tab-btn' },
  { id: 'Forecast', label: 'Forecast', clazzName: 'Tab-btn' },
];

const WeatherTabs = () => {
  const { activeTab } = useSelector((state) => state.weather);
  const dispatch = useDispatch();

  const tabs = tabButtons.map(({ id, label, clazzName }) => {
    return (
      <button
        id={id}
        key={id}
        onClick={() => dispatch(changeActiveTab(id))}
        className={
          activeTab === id ? `${clazzName} Tab-btn--active` : clazzName
        }
      >
        {label}
      </button>
    );
  });

  return (
    <div className='WeatherTabs'>
      <WeatherNow />
      <WeatherDetails />
      <WeatherForecast />
      <div className='Tabs'>{tabs}</div>
    </div>
  );
};

export default WeatherTabs;
