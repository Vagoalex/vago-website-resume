import { useState } from 'react';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';

import useMarvelService from '../../hooks/useMarvelService';
import ErrorMessageComponent from '../ErrorMessage/ErrorMessage';

import './CharForm.scss';

const validate = (values) => {
  const errors = {};

  if (!values.charName) {
    errors.charName = 'This field is required';
  }
  return errors;
};

const CharForm = () => {
  const [character, setCharacter] = useState(null);

  const { getCharacterByName, loading, error, clearError } = useMarvelService();

  const onCharLoaded = (char) => {
    setCharacter(char);
  };

  const updateChar = (charName) => {
    clearError();

    getCharacterByName(charName).then(onCharLoaded);
  };

  const formik = useFormik({
    initialValues: {
      charName: '',
    },
    validate,
    onSubmit: ({ charName }) => updateChar(charName),
  });

  const result = !character ? null : character.length > 0 ? (
    <div className='found-char'>
      <div>
        <p className='CharForm-desk found-char__desk'>There is!</p>
        <p className='CharForm-desk found-char__desk'>
          Visit{' '}
          <span className='found-char__desk--charName'>
            {character[0].name}
          </span>{' '}
          page?
        </p>
      </div>
      <Link
        to={`/characters/${character[0].id}`}
        className='button button__secondary found-char__button'
        type='button'
      >
        <div className='inner'>TO PAGE</div>
      </Link>
    </div>
  ) : (
    <div className='found-char'>
      <p className='CharForm-desk CharForm-desk--error'>
        The character was not found. Check the name and try again
      </p>
    </div>
  );

  const formikRequired =
    formik.touched.charName && formik.errors.charName ? (
      <div className='found-char'>
        <div className='char-form__error CharForm-desk--error'>
          {formik.errors.charName}
        </div>
      </div>
    ) : null;

  return (
    <div className='CharForm'>
      <h3 className='pulse CharForm__title'>Or find a character by name:</h3>

      <form className='char-form' onSubmit={formik.handleSubmit}>
        <input
          id='charName'
          name='charName'
          type='text'
          className='char-form__input'
          placeholder='Enter name'
          value={formik.values.charName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <button className='button' type='submit'>
          <div className='inner'>FIND</div>
        </button>
        {formikRequired}
      </form>
      {result}
    </div>
  );
};

export default CharForm;
