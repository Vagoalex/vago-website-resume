import ResumeViewContent from './resume-view-content/ResumeViewContent';
import './ResumeView.scss';

const ResumeView = ({ id, title, data }) => {
  return (
    <div className='ResumeSectionView-container wrapper'>
      <div className='ResumeSectionView-title'>
        <div className='ResumeSectionView-title__element'>
          <div className='resume-title'>
            {title.map((char, index) => {
              const hiddenClass = 'resume-title-hidden';

              return (
                <div
                  key={index}
                  className={`resume-title__item ${
                    char === '.' ? hiddenClass : ''
                  }`}
                >
                  {char}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className='ResumeSectionView-content'>
        {data.map((data, i) => (
          <ResumeViewContent key={i} id={id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default ResumeView;
