import { useState } from 'react';
import { Helmet } from 'react-helmet';

import RandomChar from '../../RandomChar/RandomChar';
import CharList from '../../CharList/CharList';
import CharInfo from '../../CharInfo/CharInfo';
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary';

import decorationVision from '../../../assets/images/decorations/decorationVision.png';

const Characters = () => {
  const [selectedChar, setSelectedChar] = useState(null);

  const onScrollToTop = () => {
    window.scrollTo({ top: 150 });
  };

  const onCharSelected = (id) => {
    setSelectedChar(id);
    onScrollToTop();
  };

  return (
    <>
      <Helmet>
        <meta
          name='description'
          content='Main page - Characters from mini app Marvel App'
        />
        <title>Main page Characters</title>
      </Helmet>
      <ErrorBoundary>
        <RandomChar />
      </ErrorBoundary>
      <div className='container wrapper'>
        <div className='main__content'>
          <ErrorBoundary>
            <CharList onCharSelected={onCharSelected} />
          </ErrorBoundary>
          <ErrorBoundary>
            <CharInfo charID={selectedChar} />
          </ErrorBoundary>
          <img
            className='decoration-vision'
            src={decorationVision}
            alt='decoration-vision'
          />
        </div>
      </div>
    </>
  );
};

export default Characters;
