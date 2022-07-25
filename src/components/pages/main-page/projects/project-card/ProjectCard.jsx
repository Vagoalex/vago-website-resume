import { useState, useCallback, useEffect } from 'react';
import ImageProjectCard from './ImageProjectCard';
import LinkLiveCard from './LinkLiveCard';

import './ProjectCard.scss';

const ProjectCard = ({ data }) => {
  const [screenWidth, setScreenWidth] = useState(0);
  const { desk, adaptiveDesk, git, id, name, seeLive, seeLiveTitle, title } =
    data;

  const trackWidth = useCallback(() => {
    setScreenWidth(window.outerWidth);
  }, []);

  useEffect(() => {
    trackWidth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setScreenWidth(window.outerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', trackWidth);
    return () => {
      window.removeEventListener('resize', trackWidth);
    };
  }, [trackWidth]);

  return (
    <div className='Project-card'>
      <ImageProjectCard id={id} />
      <div className='Project-content'>
        <h2 className='Project-title'>{name}</h2>
        <p className='Project-info'>
          {screenWidth < 991 ? adaptiveDesk : desk}
        </p>
        <div className='Project-btn-grp'>
          <a
            href={git}
            className='Project-btn github'
            target='_blank'
            rel='noreferrer'
            title={title}
          >
            github repo
          </a>
          <LinkLiveCard id={id} link={seeLive} liveTitle={seeLiveTitle} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
