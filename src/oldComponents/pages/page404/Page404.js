import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import './Page404.scss';

const path = '/marvelApp__React';

const Page404 = () => {
  return (
    <>
      <Helmet>
        <meta name='description' content='404 page from mini app Marvel App' />
        <title>404 page</title>
      </Helmet>

      <div className='Page404'>
        <h2 className='Page404__title'>Oops! This page is not found!</h2>
        <img
          className='Page404__img'
          src='https://i.gifer.com/fy3e.gif'
          alt='error'
        />
        <Link to={`${path}/`} className='Page404__link'>
          Click the Home Page...
        </Link>
      </div>
    </>
  );
};

export default Page404;
