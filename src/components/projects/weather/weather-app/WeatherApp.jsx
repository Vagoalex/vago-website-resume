import { useDispatch } from 'react-redux';
import { changeActivePage } from '../../../../store/page/pageSlice';

import WeatherAddForm from '../weather-add-form/WeatherAddForm';
import WeatherFavorList from '../weather-favor-list/WeatherFavorList';
import WeatherTabs from '../weather-tabs/WeatherTabs';
import './WeatherApp.scss';

const WeatherApp = () => {
  const dispatch = useDispatch();

  return (
    <div className='Weather'>
      <div className='Weather-wrapper'>
        <div className='Weather-container'>
          <WeatherTabs />
          <div className='Weather-second'>
            <WeatherAddForm />
            <WeatherFavorList />
          </div>
        </div>
      </div>
      <div className='Weather-home'>
        <button
          onClick={() => dispatch(changeActivePage('default'))}
          className='Weather-home__btn'
        >
          Нажми, чтобы вернуться назад
        </button>
      </div>
    </div>
  );
};

export default WeatherApp;
