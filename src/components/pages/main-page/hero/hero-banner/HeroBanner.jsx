import Social from '../../social/Social';
import data from '../../../../../app-data.json';
import HeroBannerItems from './HeroBannerItems';
import './HeroBanner.scss';

const heroBanner = data['hero-banner'];

const {
  'banner-title': title,
  'banner-subtitle': subtitle,
  'banner-desks': desks,
} = heroBanner;

const {
  'first-part': firstDesk,
  'second-part': secondDesk,
  'span-part': spanDesk,
  'third-part': thirdDesk,
} = desks;

const HeroBanner = () => {
  return (
    <div className='Hero-banner'>
      <div className='Hero-banner-title'>
        <HeroBannerItems bannerArr={title} typeClass='title' />
      </div>
      <div className='Hero-banner-text'>
        <div className='Hero-banner-text-subtitle'>
          <HeroBannerItems bannerArr={subtitle} typeClass='text-subtitle' />
        </div>
        <div className='Hero-banner-text-about'>
          <p className='Hero-banner-text-about__desk'>{firstDesk}</p>
          <p className='Hero-banner-text-about__desk'>{secondDesk}</p>
          <p className='Hero-banner-text-about__desk'>
            <span className='Hero-banner-text-about--company'>{spanDesk}</span>
            {thirdDesk}
          </p>
        </div>
      </div>
      <div className='Hero-banner-social'>
        <Social />
      </div>
    </div>
  );
};

export default HeroBanner;
