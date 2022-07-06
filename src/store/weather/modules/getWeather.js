import { toCelcius, renderTime, convertDate } from './helpers';

export const URL = {
  WEATHER: 'https://api.openweathermap.org/data/2.5/weather',
  FORECAST: 'https://api.openweathermap.org/data/2.5/forecast',
  ICON: 'https://openweathermap.org/img/wn',
  API_KEY: '9d5c7750d3f080c8236742f786633435',
};

// TODO: delete 2 functions and add one of them
export const getWeather = async (url) => {
  try {
    const response = await fetch(url);

    if (!response.ok)
      throw new Error(`Could not fetch ${url}, status: ${response.status}`);

    const data = await response.json();
    return renderWeatherData(data);
  } catch (error) {
    throw error;
  }
};

export const getForecast = async (url) => {
  try {
    const response = await fetch(url);

    if (!response.ok)
      throw new Error(`Could not fetch ${url}, status: ${response.status}`);

    const data = await response.json();

    return data.list.map((item) => renderWeatherData(item));
  } catch (error) {
    throw error;
  }
};

const renderWeatherData = ({ dt, dt_txt, main, weather, sys, name }) => {
  return {
    date: renderTime(dt),
    day: dt_txt ? convertDate(dt_txt) : dt,
    time: dt_txt ? dt_txt.slice(-8, -3) : dt,
    temp: toCelcius(main.temp),
    feels: toCelcius(main.feels_like),
    weather: weather[0].main,
    img: `${URL.ICON}/${weather[0].icon.slice(0, 2)}n@2x.png`,
    city: name,
    sunrise: renderTime(sys.sunrise),
    sunset: renderTime(sys.sunset),
    alt: weather[0].description,
  };
};
