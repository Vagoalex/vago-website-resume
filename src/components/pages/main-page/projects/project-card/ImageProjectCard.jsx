import idaprojectImg from '../../../../../assets/images/main-page/idaproject-adaptive.webp';
import welbexImg from '../../../../../assets/images/main-page/welbex-adaptive.webp';

import miniProjectsImg from '../../../../../assets/images/main-page/mini-projects-adaptive.webp';
import heroAdminImg from '../../../../../assets/images/main-page/project-hero-admin-panel-adaptive.webp';
import marvellAppImg from '../../../../../assets/images/main-page/project-marvel-app-adaptive.webp';

const ImageProjectCard = ({ id }) => {
  switch (id) {
    case 'welbex':
      return (
        <img
          src={welbexImg}
          className='Project-img'
          alt='welbex'
          loading='lazy'
        />
      );
    case 'idaproject':
      return (
        <img
          src={idaprojectImg}
          className='Project-img'
          alt='idaproject'
          loading='lazy'
        />
      );
    case 'mini-projects':
      return (
        <img
          src={miniProjectsImg}
          className='Project-img'
          alt='mini-projects'
          loading='lazy'
        />
      );
    case 'marvel-app':
      return (
        <img
          src={marvellAppImg}
          className='Project-img'
          alt='marvel-app'
          loading='lazy'
        />
      );
    case 'hero-panel':
      return (
        <img
          src={heroAdminImg}
          className='Project-img'
          alt='hero-panel'
          loading='lazy'
        />
      );

    default:
      throw new Error('Invalid id');
  }
};

export default ImageProjectCard;
