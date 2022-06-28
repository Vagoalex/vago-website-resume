import { Link } from 'react-router-dom';

import './SingleCharacterLayout.scss';

const SingleCharacterPageContent = ({ data }) => {
  const { name, description, thumbnail, homepage, wiki, comics } = data;

  const availableComics = comics.length === 0 ? ' hidden' : '';

  const comicsContent = comics.map(({ name }, i) => {
    return (
      <li key={i} className='SingleCharPage-comics-list__item'>
        {name}
      </li>
    );
  });

  return (
    <section className='SingleCharPage'>
      <a
        href={homepage}
        target='_blank'
        className='SingleCharPage-link'
        rel='noreferrer'
      >
        <img
          src={thumbnail}
          alt='character'
          className='SingleCharPage-link__img'
        />
      </a>
      <div className='SingleCharPage-info'>
        <h3 className='SingleCharPage-info__title'>{name}</h3>
        <p className='SingleCharPage-info__desk'>{description}</p>

        <div className={`SingleCharPage-comics ${availableComics}`}>
          <h4 className='SingleCharPage-comics__title'>Comics:</h4>
          <ul className='SingleCharPage-comics-list'>{comicsContent}</ul>
        </div>
      </div>
      <div className='SingleCharPage-btn-back'>
        <Link to='/' className='SingleCharPage-btn-back button button__long'>
          <div className='inner'>Back to all</div>
        </Link>
      </div>
    </section>
  );
};

export default SingleCharacterPageContent;
