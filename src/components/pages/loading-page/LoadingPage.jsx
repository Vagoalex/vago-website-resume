import './LoadingPage.scss';

const LoadingPage = () => {
  return (
    <>
      <div className='Loader'>
        <div className='loader-wrapper'>
          <div className='loader'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoadingPage;
