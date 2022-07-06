import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { URL, getWeather, getForecast } from './modules/getWeather';

const initialState = {
  weatherData: [],
  forecastData: [],
  activeTab: 'Now',
  weatherLoadingStatus: 'idle',
  forecastLoadingStatus: 'idle',
};

export const fetchCityWeather = createAsyncThunk(
  'weather/fetchCityWeather',
  async (city) => {
    return await getWeather(`${URL.WEATHER}?q=${city}&appid=${URL.API_KEY}`);
  }
);
export const fetchForecast = createAsyncThunk(
  'weather/fetchCityForecast',
  async (city) => {
    return await getForecast(`${URL.FORECAST}?q=${city}&appid=${URL.API_KEY}`);
  }
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    changeActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCityWeather.pending, (state) => {
        state.weatherLoadingStatus = 'loading';
      })
      .addCase(fetchCityWeather.fulfilled, (state, action) => {
        state.weatherData = action.payload;
        state.weatherLoadingStatus = 'idle';
      })
      .addCase(fetchCityWeather.rejected, (state) => {
        state.weatherLoadingStatus = 'error';
      })
      .addCase(fetchForecast.pending, (state) => {
        state.forecastLoadingStatus = 'loading';
      })
      .addCase(fetchForecast.fulfilled, (state, action) => {
        state.forecastData = action.payload;
        state.forecastLoadingStatus = 'idle';
      })
      .addCase(fetchForecast.rejected, (state) => {
        state.forecastLoadingStatus = 'error';
      })
      .addDefaultCase(() => {});
  },
});

const { actions, reducer } = weatherSlice;

export default reducer;

export const { changeActiveTab } = actions;
