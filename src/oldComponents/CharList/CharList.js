import { useEffect, useState, useCallback } from 'react';
import useMarvelService from '../../hooks/useMarvelService';
import CharListItem from '../CharListItem/CharListItem';

import './CharList.scss';

import charItemLoadingGif from '../../assets/gifs/CharListItemLoading.gif';
import ironMan404 from '../../assets/gifs/ironMan404.gif';

const CharList = (props) => {
  const { getAllCharacters, loading, error, clearError } = useMarvelService();

  const { onCharSelected } = props;

  const [chars, setChars] = useState([]);
  const [newCharsLoading, setNewCharsLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [charEnded, setCharEnded] = useState(false);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    onRequestChars();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onRequestChars = (offset) => {
    clearError();
    setNewCharsLoading(true);
    getAllCharacters(offset).then(onCharsLoaded);
    setWindowHeight(document.body.scrollHeight);
  };

  const onCharsLoaded = (newChars) => {
    let ended = false;
    if (newChars.length < 9) {
      ended = true;
    }

    setChars((chars) => [...chars, ...newChars]);
    setNewCharsLoading(() => false);
    setOffset((offset) => offset + 9);
    setCharEnded(() => ended);
  };

  const onScrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  const onScrollToBottom = useCallback(() => {
    window.scrollTo(0, windowHeight);
  }, [windowHeight]);

  useEffect(() => {
    if (chars.length !== 0 && chars.length !== 9)
      setTimeout(onScrollToBottom, 1500);
  }, [chars.length, onScrollToBottom]);

  const heroes = chars.map(({ id, ...data }) => (
    <CharListItem
      onCharSelected={onCharSelected}
      key={id}
      data={data}
      id={id}
    />
  ));

  const statusArray = [...Array(chars.length === 0 ? 9 : chars.length)].map(
    (x, i) => <CharItemStatus loading={loading} error={error} key={i} />
  );

  const status = error || loading ? statusArray : null;
  const content = !(error || loading) ? heroes : null;

  return (
    <section className='CharList'>
      <ul className='CharList-cards'>
        {status}
        {content}
      </ul>

      <div className='CharList-assets'>
        <button
          disabled={newCharsLoading}
          onClick={() => onRequestChars(offset)}
          className='CharList-cards-more button button__long'
          style={{ visibility: charEnded ? 'hidden' : '' }}
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
          className='CharList-scroll'
        >
          <span className='CharList-scroll__up'>
            <span className='mouse-wheel'></span>
          </span>
        </button>
      </div>
    </section>
  );
};

const CharItemStatus = (props) => {
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
    <div className='CharList-cards-item '>
      <img
        className='CharList-cards-item__img'
        src={loading ? loadData.src : errorData.src}
        alt={loading ? loadData.alt : errorData.alt}
      />
      <h3 className='CharList-cards-item__title'>
        {loading ? loadData.title : errorData.title}
      </h3>
    </div>
  );
};

export default CharList;
