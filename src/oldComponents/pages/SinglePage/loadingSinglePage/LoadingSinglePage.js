import './LoadingSinglePage.scss';
import loadingGif from './Marvel-gif.gif';

const LoadingSinglePage = () => {
  return (
    <div className='LoadingSinglePage'>
      <img
        className='LoadingSinglePage__img'
        src={loadingGif}
        alt='marvel loading'
      />
    </div>
  );
};

export default LoadingSinglePage;
