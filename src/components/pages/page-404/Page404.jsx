import { Link } from 'react-router-dom';

import './Page404.scss';

const Page404 = () => {
  return (
    <div className='Page404'>
      <div className='Page404-not-found'>
        <div className='Page404-not-found-404'>
          <h2 className='Page404-not-found-404__title'>404</h2>
          <h3 className='Page404-not-found-404__subtitle'>Page not found</h3>
        </div>
        <Link to='/' className='Page404-not-found__link'>
          Homepage
        </Link>
      </div>
    </div>
  );
};

export default Page404;
