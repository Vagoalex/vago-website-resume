import { Link } from 'react-router-dom';

const LinkLiveCard = ({ id, link, liveTitle }) => {
  switch (id) {
    case 'mini-projects':
      return (
        <Link to={link} className='Project-btn live' title={liveTitle}>
          see live
        </Link>
      );
    case 'welbex':
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
    case 'idaproject':
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

export default LinkLiveCard;
