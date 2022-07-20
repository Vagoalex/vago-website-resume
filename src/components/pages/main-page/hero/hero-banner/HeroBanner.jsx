import { useSelector } from 'react-redux';

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
  'adativeDesk-first': firstAdaptiveDesk,
  'adativeDesk-span': spanAdaptiveDesk,
  'adativeDesk-second': secondAdaptiveDesk,
} = desks;

const HeroBanner = () => {
  const { activeScreenBurgerMenu } = useSelector((state) => state.nav);

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
          {activeScreenBurgerMenu ? <AdaptiveDesk /> : <DefaultDesk />}
        </div>
      </div>
      <div className='Hero-banner-social'>
        <Social />
      </div>
    </div>
  );
};

const DefaultDesk = () => {
  return (
    <>
      <p className='Hero-banner-text-about__desk'>{firstDesk}</p>
      <p className='Hero-banner-text-about__desk'>{secondDesk}</p>
      <p className='Hero-banner-text-about__desk'>
        <span className='Hero-banner-text-about--company'>{spanDesk}</span>
      </p>
      <p className='Hero-banner-text-about__desk'>{thirdDesk}</p>
    </>
  );
};
const AdaptiveDesk = () => {
  return (
    <>
      <p className='Hero-banner-text-about__desk'>{firstAdaptiveDesk}</p>
      <p className='Hero-banner-text-about__desk'>
        <span className='Hero-banner-text-about--company'>
          {spanAdaptiveDesk}
        </span>
      </p>
      <p className='Hero-banner-text-about__desk'>{secondAdaptiveDesk}</p>
    </>
  );
};

export default HeroBanner;
