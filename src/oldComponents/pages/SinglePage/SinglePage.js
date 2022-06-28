import { useState, useEffect, lazy } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ComicsBanner from '../../ComicsBanner/ComicsBanner';
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary';
import Page404 from '../page404/Page404';
import useMarvelService from '../../../hooks/useMarvelService';

const LoadingPage = lazy(() => import('./loadingSinglePage/LoadingSinglePage'));

const SinglePage = ({ Component, dataType }) => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const { getElementById, process, setProcess, clearError } =
    useMarvelService();

  useEffect(() => {
    updateData();
    scrollToTop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const updateData = () => {
    clearError();
    // eslint-disable-next-line default-case
    switch (dataType) {
      case 'characters':
        getElementById(id, 'characters')
          .then(onDataLoaded)
          .then(() => setProcess('confirmed'));
        break;
      case 'comics':
        getElementById(id, 'comics')
          .then(onDataLoaded)
          .then(() => setProcess('confirmed'));
        break;
    }
  };

  const onDataLoaded = (element) => {
    setData(element);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  const setContent = (process, Component, data) => {
    switch (process) {
      case 'waiting':
        return null;
      case 'loading':
        return <LoadingPage />;
      case 'error':
        return <Page404 />;
      case 'confirmed':
        return <Component data={data} />;

      default:
        throw new Error('Unexpected process state!');
    }
  };

  return (
    <>
      <Helmet>
        <meta
          name='description'
          content={`${
            data?.name || data?.title || 'Marvel'
          } page from mini app Marvel App`}
        />
        <title>{`${
          data?.name || data?.title || 'Marvel'
        } - single page`}</title>
      </Helmet>

      <ComicsBanner />
      <section className='container wrapper'>
        <div className='main__content'>
          <ErrorBoundary>{setContent(process, Component, data)}</ErrorBoundary>
        </div>
      </section>
    </>
  );
};

export default SinglePage;
