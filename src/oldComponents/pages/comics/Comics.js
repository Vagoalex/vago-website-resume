import ComicsBanner from '../../ComicsBanner/ComicsBanner';
import ComicsList from '../../ComicsList/ComicsList';
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary';
import { Helmet } from 'react-helmet';

import decorationVision from '../../../assets/images/decorations/decorationVision.png';

import './Comics.scss';

const Comics = () => {
  return (
    <>
      <Helmet>
        <meta
          name='description'
          content='Second page - Comics from mini app Marvel App'
        />
        <title>Comics page</title>
      </Helmet>

      <ComicsBanner />
      <section className='container wrapper'>
        <div className='main__content'>
          <ErrorBoundary>
            <ComicsList />
          </ErrorBoundary>
          <img
            className='decoration-vision'
            src={decorationVision}
            alt='decoration-vision'
          />
        </div>
      </section>
    </>
  );
};

export default Comics;
