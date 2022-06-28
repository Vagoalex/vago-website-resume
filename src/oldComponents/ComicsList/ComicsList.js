import { useEffect, useState, useCallback } from 'react';
import useMarvelService from '../../hooks/useMarvelService';

import charItemLoadingGif from '../../assets/gifs/CharListItemLoading.gif';
import ironMan404 from '../../assets/gifs/ironMan404.gif';

import './ComicsList.scss';
import ComicsListItem from '../ComicsListItem/ComicsListItem';

const ComicsList = (props) => {
  const { getAllComics, loading, error, clearError } = useMarvelService();

  //   const { onComicsSelected } = props;

  const [comics, setComics] = useState([]);
  const [newComicsLoading, setNewComicsLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [comicsEnded, setComicsEnded] = useState(false);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    onRequestComics();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onRequestComics = (offset) => {
    clearError();
    setNewComicsLoading(true);
    getAllComics(offset).then(onComicsLoaded);
    setWindowHeight(document.body.scrollHeight);
  };

  const onComicsLoaded = (newComics) => {
    let ended = false;
    if (newComics.length < 8) {
      ended = true;
    }

    setComics((comics) => [...comics, ...newComics]);
    setNewComicsLoading(() => false);
    setOffset((offset) => offset + 8);
    setComicsEnded(() => ended);
  };

  const onScrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  const onScrollToBottom = useCallback(() => {
    window.scrollTo(0, windowHeight);
  }, [windowHeight]);

  useEffect(() => {
    if (comics.length !== 0 && comics.length !== 8)
      setTimeout(onScrollToBottom, 1500);
  }, [comics.length, onScrollToBottom]);

  const comicsContent = comics.map(({ id, ...data }, i) => (
    <ComicsListItem key={i} data={data} id={id} />
  ));

  const statusArray = [...Array(comics.length === 0 ? 8 : comics.length)].map(
    (x, i) => <ComicsItemStatus loading={loading} error={error} key={i} />
  );

  const status = error || loading ? statusArray : null;
  const content = !(error || loading) ? comicsContent : null;

  return (
    <section className='ComicsList'>
      <button
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            onScrollToBottom();
          }
        }}
        onClick={onScrollToBottom}
        className='ComicsList-scroll-to-bottom'
      >
        <span className='ComicsList-scroll-to-bottom__inner'>
          <span className='mouse-wheel'></span>
        </span>
      </button>

      <ul className='ComicsList-cards'>
        {status}
        {content}
      </ul>

      <div className='ComicsList-assets'>
        <button
          disabled={newComicsLoading}
          onClick={() => onRequestComics(offset)}
          className='ComicsList-cards-more button button__long'
          style={{ visibility: comicsEnded ? 'hidden' : '' }}
        >
          <div className='inner'>Load More</div>
        </button>

        <button
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              onScrollToTop();
            }
          }}
          onClick={onScrollToTop}
          className='ComicsList-scroll'
        >
          <span className='ComicsList-scroll__up'>
            <span className='mouse-wheel'></span>
          </span>
        </button>
      </div>
    </section>
  );
};

const ComicsItemStatus = (props) => {
  const { loading } = props;
  const loadData = {
    src: charItemLoadingGif,
    alt: 'loading gif',
    title: 'Loading...',
  };

  const errorData = {
    src: ironMan404,
    alt: 'error gif',
    title: 'Load Error!',
  };

  return (
    <div className='ComicsList-cards-item '>
      <img
        className='ComicsList-cards-item__img'
        src={loading ? loadData.src : errorData.src}
        alt={loading ? loadData.alt : errorData.alt}
      />
      <div className='ComicsList-cards-item-titles'>
        <h3 className='ComicsList-cards-item-titles__title'>
          {loading ? loadData.title : errorData.title}
        </h3>
        <h4 className='ComicsList-cards-item-titles__price'>
          {loading ? loadData.title : errorData.title}
        </h4>
      </div>
    </div>
  );
};

export default ComicsList;
