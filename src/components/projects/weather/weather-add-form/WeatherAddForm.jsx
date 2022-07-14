import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import {
  fetchCityWeather,
  fetchForecast,
} from '../../../../store/weather/weather';

import './WeatherAddForm.scss';

const validate = (values) => {
  const errors = {};

  if (!values.weatherInput) {
    errors.weatherInput = 'This field is required!';
  } else if (values.weatherInput.length < 2) {
    errors.weatherInput = 'Minimum 2 symbols!';
  }

  return errors;
};

const WeatherAddForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      weatherInput: '',
    },

    validate,
    onSubmit: ({ weatherInput }, { resetForm }) => {
      dispatch(fetchCityWeather(weatherInput));
      dispatch(fetchForecast(weatherInput));
      resetForm(formik.initialValues);
    },
  });

  return (
    <div className='WeatherAddForm'>
      <form className='WeatherAddForm-form' onSubmit={formik.handleSubmit}>
        <input
          className='WeatherAddForm-form__input'
          type='text'
          name='weatherInput'
          placeholder='Enter the city'
          maxLength='38'
          value={formik.values.weatherInput}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <button className='WeatherAddForm-form__btn' type='submit' />
      </form>
      {formik.touched.weatherInput && formik.errors.weatherInput ? (
        <div className='WeatherAddForm-error'>{formik.errors.weatherInput}</div>
      ) : null}
    </div>
  );
};

export default WeatherAddForm;
