import './ComicsBanner.scss';

const ComicsBanner = () => {
  return (
    <section className='ComicsBanner wrapper'>
      <div className='ComicsBanner-box'>
        <div className='ComicsBanner-box-logo'>
          <img
            src='https://i.giphy.com/media/9r75CL4HcusetkC3d4/giphy.webp'
            alt='logo-stanLee'
            className='ComicsBanner-box-logo__img'
          />
        </div>
        <div className='ComicsBanner-box-titles'>
          <h3 className='ComicsBanner-box-titles__title'>
            New comics every week!
          </h3>
          <h3 className='ComicsBanner-box-titles__title'>Stay tuned!</h3>
        </div>
        <div className='ComicsBanner-box-logo'>
          <img
            src='https://i.giphy.com/media/13kajTax0GCg0g/giphy.webp'
            alt='logo-Avengers'
            className='ComicsBanner-box__logo-avengers'
          />
        </div>
      </div>
    </section>
  );
};

export default ComicsBanner;
