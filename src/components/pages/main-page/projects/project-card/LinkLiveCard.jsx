import { Link } from 'react-router-dom';

const LinkLiveCard = ({ id, link, liveTitle }) => {
  switch (id) {
    case 'mini-projects':
      return (
        <Link to={link} className='Project-btn live' title={liveTitle}>
          see live
        </Link>
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
  }
};

export default LinkLiveCard;
