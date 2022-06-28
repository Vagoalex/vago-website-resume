import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import useMarvelService from '../../hooks/useMarvelService';
import setContent from '../../utils/setContent';

import './RandomChar.scss';

import randomizerDecorate from '../../assets/icons/RandomChar-mjolnerShild.png';
import marvelIcon from '../../assets/icons/marvelIcon.jpg';

const RandomChar = (props) => {
  const [char, setChar] = useState(null);
  const [loadChar, setLoadChar] = useState(false);

  const { getElementById, process, setProcess, clearError } =
    useMarvelService();

  useEffect(() => {
    updateChar();
    const timerId = setInterval(updateChar, 120000);

    return () => {
      clearInterval(timerId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onCharLoaded = (char) => {
    setChar(char);
    setLoadChar(true);
  };

  const updateChar = () => {
    clearError();
    const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
    getElementById(id, 'characters')
      .then(onCharLoaded)
      .then(() => setProcess('confirmed'));
    setLoadChar(false);
  };

  return (
    <CSSTransition in={loadChar} timeout={500} classNames='random-char-load'>
      <section className='RandomChar wrapper'>
        <div className='RandomChar__character-info'>
          {setContent(process, View, char)}
        </div>
        <div className='RandomChar__randomizer'>
          <div className='randomizer-top'>
            <h3 className='randomizer-top__title random-title'>
              Random character for today!
            </h3>
            <h3 className='randomizer-top__title  random-title'>
              Do you want to get to know him better?
            </h3>
          </div>
          <div className='randomizer-bottom'>
            <h3 className='randomizer-bottom__title  random-title'>
              Or choose another one
            </h3>
            <button
              onClick={updateChar}
              className='randomizer-bottom__button button'
              type='button'
            >
              <div className='inner'>Try it</div>
            </button>
          </div>
          <img
            className='randomizer-img'
            src={randomizerDecorate}
            alt='mjolnir'
          />
        </div>
      </section>
    </CSSTransition>
  );
};

const View = ({ data }) => {
  const { name, description, thumbnail, homepage, wiki } = data;

  const filteredDesc =
    description.length > 100 ? `${description.slice(0, 100)}...` : description;

  const notAvailableImg = 'image_not_available.jpg';
  const image =
    thumbnail.slice(-23) === notAvailableImg ? marvelIcon : thumbnail;
  return (
    <>
      <img className='character-img' src={image} alt={name} />
      <div className='character-info'>
        <h3 className='character-info__title'>{name}</h3>
        <p className='character-info__desc'>{filteredDesc}</p>
        <div className='character-links'>
          <a
            className='character-links__link first-link button'
            href={homepage}
            target='_blank'
            rel='noreferrer'
          >
            <div className='inner'>Homepage</div>
          </a>
          <a
            className='character-links__link second-link button button__secondary'
            href={wiki}
            target='_blank'
            rel='noreferrer'
          >
            <div className='inner'>Wiki</div>
          </a>
        </div>
      </div>
    </>
  );
};

RandomChar.propTypes = {
  onCharLoaded: PropTypes.func,
  onCharLoading: PropTypes.func,
  onError: PropTypes.func,
  updateChar: PropTypes.func,
};

export default RandomChar;
