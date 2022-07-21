import miniProjectsImg from '../../../../../assets/images/main-page/mini-projects.jpg';
import heroAdminImg from '../../../../../assets/images/main-page/project-hero-admin-panel.jpg';
import marvellAppImg from '../../../../../assets/images/main-page/project-marvel-app.jpg';

import miniProjectsImgAdaptive from '../../../../../assets/images/main-page/mini-projects-adaptive.webp';
import heroAdminImgAdaptive from '../../../../../assets/images/main-page/project-hero-admin-panel-adaptive.webp';
import marvellAppImgAdaptive from '../../../../../assets/images/main-page/project-marvel-app-adaptive.webp';

const ImageProjectCard = ({ id }) => {
  switch (id) {
    case 'mini-projects':
      return (
        <img
          src={
            window.outerWidth <= 768 ? miniProjectsImgAdaptive : miniProjectsImg
          }
          className='Project-img'
          alt='hero-admin-img'
        />
      );
    case 'marvel-app':
      return (
        <img
          src={window.outerWidth <= 768 ? marvellAppImgAdaptive : marvellAppImg}
          className='Project-img'
          alt='hero-admin-img'
        />
      );
    case 'hero-panel':
      return (
        <img
          src={window.outerWidth <= 768 ? heroAdminImgAdaptive : heroAdminImg}
          className='Project-img'
          alt='hero-admin-img'
        />
      );

    default:
      throw new Error('Invalid id');
  }
};

export default ImageProjectCard;
