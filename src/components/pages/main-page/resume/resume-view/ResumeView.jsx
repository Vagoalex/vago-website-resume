import ResumeViewContent from './resume-view-content/ResumeViewContent';
import './ResumeView.scss';

const aboutContacts = ['К', 'о', 'н', 'т', 'а', 'к', 'т', 'ы'];

const ResumeView = ({ id, title, data }) => {
  console.log(title, data, id);
  return (
    <div className='ResumeSectionView-container wrapper'>
      <div className='ResumeSectionView-title'>
        <div className='ResumeSectionView-title__element'>
          <div className='resume-title'>
            {aboutContacts.map((char, index) => {
              return (
                <div key={index} className='resume-title__item'>
                  {char}
                </div>
              );
            })}
          </div>
        </div>
        {/* <h2 className='ResumeSectionView-title__element'>{title}</h2> */}
        {/* <h2 className='ResumeSectionView-title__element'>{title}</h2> */}
      </div>
      <div className='ResumeSectionView-content'>
        {/* <ResumeViewContent /> */}

        <div className='ViewDefaultContent'>
          <h3 className='ViewDefaultContent__title'>title subtitle subtitle</h3>
          <div className='ViewDefaultContent-subtitles'>
            <h4 className='ViewDefaultContent-subtitles__subtitle'>
              Обучался на крутого чувака
            </h4>
            <span className='ViewDefaultContent-subtitles__date-info'>
              dateInfo info some
            </span>
          </div>
          <p className='ViewDefaultContent__desk'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam saepe
            facilis eveniet odit pariatur perspiciatis rem aliquam vitae vel
            error explicabo qui corrupti libero, hic unde voluptas harum
            similique molestiae.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResumeView;
