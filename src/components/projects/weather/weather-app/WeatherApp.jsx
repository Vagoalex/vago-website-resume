import WeatherAddForm from '../weather-add-form/WeatherAddForm';
import WeatherFavorList from '../weather-favor-list/WeatherFavorList';
import WeatherTabs from '../weather-tabs/WeatherTabs';
import './WeatherApp.scss';

const WeatherApp = () => {
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
    </div>
  );
};

export default WeatherApp;
