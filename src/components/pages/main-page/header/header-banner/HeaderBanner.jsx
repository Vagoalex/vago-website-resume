import Social from '../../social/Social';
import data from '../../../../../app-data.json';
import HeaderBannerItems from './HeaderBannerItems';
import './HeaderBanner.scss';

const headerBanner = data['header-banner'];

const {
  'banner-title': title,
  'banner-subtitle': subtitle,
  'banner-desks': desks,
} = headerBanner;

const {
  'first-part': firstDesk,
  'second-part': secondDesk,
  'span-part': spanDesk,
  'third-part': thirdDesk,
} = desks;

const HeaderBanner = () => {
  return (
    <div className='Header-banner'>
      <div className='Header-banner-title'>
        <HeaderBannerItems bannerArr={title} typeClass='title' />
      </div>
      <div className='Header-banner-text'>
        <div className='Header-banner-text-subtitle'>
          <HeaderBannerItems bannerArr={subtitle} typeClass='text-subtitle' />
        </div>
        <div className='Header-banner-text-about'>
          <p className='Header-banner-text-about__desk'>{firstDesk}</p>
          <p className='Header-banner-text-about__desk'>{secondDesk}</p>
          <p className='Header-banner-text-about__desk'>
            <span className='Header-banner-text-about--company'>
              {spanDesk}
            </span>
            {thirdDesk}
          </p>
        </div>
      </div>
      <div className='Header-banner-social'>
        <Social />
      </div>
    </div>
  );
};

export default HeaderBanner;
