import { Link } from 'react-router-dom';

import './SingleComicLayout.scss';

const SingleComicPageContent = ({ data }) => {
  const { title, description, thumbnail, price, language, pages, homepage } =
    data;

  return (
    <section className='SingleComicPage'>
      <a
        href={homepage}
        target='_blank'
        className='SingleComicPage-link'
        rel='noreferrer'
      >
        <img
          src={thumbnail}
          alt='comic'
          className='SingleComicPage-link__img'
        />
      </a>
      <div className='SingleComicPage-info'>
        <h3 className='SingleComicPage-info__title'>{title}</h3>
        <p className='SingleComicPage-info__desk'>{description}</p>
        <p className='SingleComicPage-info__comic-length'>
          {pages === 0 ? 0 : pages} pages
        </p>
        <p className='SingleComicPage-info__comic-lang'>
          language:{' '}
          <span className='SingleComicPage-info__comic-lang--inner'>
            {language}
          </span>
        </p>
        <h3 className='SingleComicPage-info__price'>
          {price > 0 ? `${price}$` : 'NOT AVAILABLE'}
        </h3>
      </div>
      <div className='SingleComicPage-btn-back'>
        <Link
          to='/comics'
          className='SingleComicPage-btn-back button button__long'
        >
          <div className='inner'>Back to all</div>
        </Link>
      </div>
    </section>
  );
};

export default SingleComicPageContent;
