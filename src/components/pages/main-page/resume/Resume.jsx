import data from '../../../../app-data.json';
import ResumeView from './resume-view/ResumeView';

import './Resume.scss';

const resumeData = data.resume;

const Resume = () => {
  return (
    <section className='Resume' id='resume'>
      {resumeData.map(({ id, title, ...data }) => {
        return (
          <div key={id} className='resume-section'>
            <ResumeView title={title} id={id} {...data} />
          </div>
        );
      })}

      <svg
        className='resume-border'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 180'
      >
        <path d='M0 43.418h288c96 0 192 0 288 26.7 96 26.3 192 80.3 288 69.3s192-85 288-117.3c96-31.7 192-21.7 240-16l48 5.3V180H0z' />
      </svg>
    </section>
  );
};

export default Resume;
