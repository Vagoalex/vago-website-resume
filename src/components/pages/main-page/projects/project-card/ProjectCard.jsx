import { Link } from 'react-router-dom';
import miniProjectsImg from '../../../../../assets/images/main-page/mini-projects.jpg';
import heroAdminImg from '../../../../../assets/images/main-page/project-hero-admin-panel.jpg';
import marvellAppImg from '../../../../../assets/images/main-page/project-marvel-app.jpg';

import './ProjectCard.scss';

const ProjectCard = ({ data }) => {
  const { desk, git, id, name, seeLive, seeLiveTitle, title } = data;

  return (
    <div className='Project-card'>
      <ImageProjectCard id={id} />
      <div className='Project-content'>
        <h2 className='Project-title'>{name}</h2>
        <p className='Project-info'>{desk}</p>
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

const ImageProjectCard = ({ id }) => {
  switch (id) {
    case 'mini-projects':
      return (
        <img
          src={miniProjectsImg}
          className='Project-img'
          alt='hero-admin-img'
        />
      );
    case 'marvel-app':
      return (
        <img src={marvellAppImg} className='Project-img' alt='hero-admin-img' />
      );
    case 'hero-panel':
      return (
        <img src={heroAdminImg} className='Project-img' alt='hero-admin-img' />
      );

    default:
      throw new Error('Invalid id');
  }
};

const LinkLiveCard = ({ id, link, liveTitle }) => {
  switch (id) {
    case 'mini-projects':
      return (
        <Link to={link} className='Project-btn live' title={liveTitle}>
          see live
        </Link>
      );
    case 'marvel-app':
      return (
        <a
          href={link}
          className='Project-btn live'
          target='_blank'
          rel='noreferrer'
          title={liveTitle}
        >
          see live
        </a>
      );
    case 'hero-panel':
      return (
        <a
          href={link}
          className='Project-btn live Project-btn--disabled'
          target='_blank'
          rel='noreferrer'
          title={liveTitle}
        >
          see live
        </a>
      );

    default:
      throw new Error('Invalid id');
  }
};

export default ProjectCard;
