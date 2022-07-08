import Social from '../../social/Social';
import './HeaderBanner.scss';

const HeaderBanner = () => {
  return (
    <div className='Header-banner'>
      <div className='Header-banner-title'>
        <div className='Header-banner-title__item'>I</div>
        <div className='Header-banner-title__item'>'</div>
        <div className='Header-banner-title__item'>m</div>
        <div className='Header-banner-title__item Header-banner-item-hidden'>
          .
        </div>
        <div className='Header-banner-title__item'>V</div>
        <div className='Header-banner-title__item'>a</div>
        <div className='Header-banner-title__item'>g</div>
        <div className='Header-banner-title__item'>o</div>
        <div className='Header-banner-title__item Header-banner-item-hidden'>
          .
        </div>
        <div className='Header-banner-title__item'>A</div>
        <div className='Header-banner-title__item'>l</div>
        <div className='Header-banner-title__item'>e</div>
        <div className='Header-banner-title__item'>k</div>
        <div className='Header-banner-title__item'>s</div>
        <div className='Header-banner-title__item'>a</div>
        <div className='Header-banner-title__item'>n</div>
        <div className='Header-banner-title__item'>d</div>
        <div className='Header-banner-title__item'>r</div>
      </div>
      <div className='Header-banner-text'>
        <div className='Header-banner-text-subtitle'>
          <div className='Header-banner-text-subtitle__item'>Я</div>
          <div className='Header-banner-text-subtitle__item Header-banner-item-hidden'>
            .
          </div>
          <div className='Header-banner-text-subtitle__item'>ф</div>
          <div className='Header-banner-text-subtitle__item'>р</div>
          <div className='Header-banner-text-subtitle__item'>о</div>
          <div className='Header-banner-text-subtitle__item'>н</div>
          <div className='Header-banner-text-subtitle__item'>т</div>
          <div className='Header-banner-text-subtitle__item'>е</div>
          <div className='Header-banner-text-subtitle__item'>н</div>
          <div className='Header-banner-text-subtitle__item'>д</div>
          <div className='Header-banner-text-subtitle__item Header-banner-item-hidden'>
            .
          </div>
          <div className='Header-banner-text-subtitle__item'>р</div>
          <div className='Header-banner-text-subtitle__item'>а</div>
          <div className='Header-banner-text-subtitle__item'>з</div>
          <div className='Header-banner-text-subtitle__item'>р</div>
          <div className='Header-banner-text-subtitle__item'>а</div>
          <div className='Header-banner-text-subtitle__item'>б</div>
          <div className='Header-banner-text-subtitle__item'>о</div>
          <div className='Header-banner-text-subtitle__item'>т</div>
          <div className='Header-banner-text-subtitle__item'>ч</div>
          <div className='Header-banner-text-subtitle__item'>и</div>
          <div className='Header-banner-text-subtitle__item'>к</div>
          <div className='Header-banner-text-subtitle__item Header-banner-item-hidden'>
            .
          </div>
          <div className='Header-banner-text-subtitle__item'>и</div>
          <div className='Header-banner-text-subtitle__item'>з</div>
          <div className='Header-banner-text-subtitle__item Header-banner-item-hidden'>
            .
          </div>
          <div className='Header-banner-text-subtitle__item'>К</div>
          <div className='Header-banner-text-subtitle__item'>а</div>
          <div className='Header-banner-text-subtitle__item'>з</div>
          <div className='Header-banner-text-subtitle__item'>а</div>
          <div className='Header-banner-text-subtitle__item'>н</div>
          <div className='Header-banner-text-subtitle__item'>и</div>
        </div>
        <div className='Header-banner-text-about'>
          <p className='Header-banner-text-about__desk'>
            Нажимаю на пиксели, перемешиваю данные
          </p>
          <p className='Header-banner-text-about__desk'>
            и шлепаю по клавиатуре, пока все не заработает.
          </p>
          <p className='Header-banner-text-about__desk'>
            <span className='Header-banner-text-about--company'>
              Ищу крутейшую команду
            </span>
            , где смогу реализовать свой потенциал на 100500%
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
