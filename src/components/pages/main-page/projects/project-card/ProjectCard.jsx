import { useSelector } from 'react-redux';
import ImageProjectCard from './ImageProjectCard';
import LinkLiveCard from './LinkLiveCard';

import './ProjectCard.scss';

const ProjectCard = ({ data }) => {
  const { screenWidth } = useSelector((state) => state.nav);
  const { desk, adaptiveDesk, git, id, name, seeLive, seeLiveTitle, title } =
    data;

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
