import './About.scss';

import myPhoto from '../../../../assets/images/main-page/about-photo.jpg';

const About = () => {
  return (
    <section className='About' id='about'>
      <div className='about-container wrapper'>
        <div className='about-img columns'>
          <img src={myPhoto} alt='my face :)' className='about-img__image' />
        </div>
        <div className='about-info columns'>
          <div className='about-me'>
            <div className='about-title'>
              <div className='about-title__item'>О</div>
              <div className='about-title__item'>б</div>
              <div className='about-title__item'>о</div>
              <div className='about-title__item about-title-item-hidden'>.</div>
              <div className='about-title__item'>М</div>
              <div className='about-title__item'>н</div>
              <div className='about-title__item'>е</div>
            </div>

            <p className='about-me__desk'>
              По своей натуре я спортсмен, путешественник, всегда люблю что
              нибудь новое, с радостью изучаю разные новые технологии и обладаю
              безумной страстью к программированию. Я с детства дружу с
              компьютером и постоянно шел в ногу с технологиями. Это сподвигло
              меня обучаться разработке и я планирую стать крутым программистом
              в будущем. Я люблю творить, создавать и часами сидеть и полировать
              код, пока он не будет блистать. Не боюсь трудной работы и очень
              люблю поработать во внерабочее время. Вне работы я заядлый
              спортсмен, катаюсь на сноуборде, хожу в зал, бегаю по утрам
              (иногда :)), люблю поиграть в playstation или в ПК. Обожаю
              путешествовать и исследовать мир.
            </p>
          </div>
          <div className='about-details'>
            <div className='about-details-contacts'>
              <div className='about-title'>
                <div className='about-title__item'>К</div>
                <div className='about-title__item'>о</div>
                <div className='about-title__item'>н</div>
                <div className='about-title__item'>т</div>
                <div className='about-title__item'>а</div>
                <div className='about-title__item'>к</div>
                <div className='about-title__item'>т</div>
                <div className='about-title__item'>ы</div>
              </div>
              <p className='about-details-contacts__desk'>Ваго Александр</p>
              <p className='about-details-contacts__desk'>25 лет</p>
              <p className='about-details-contacts__desk'>г. Казань</p>
              <p className='about-details-contacts__desk'>
                <a
                  className='about-details-contacts-phone'
                  href='tel:+79509464465'
                  title='Нажми, чтобы позвонить :)'
                >
                  {' '}
                  +7(950)-946-44-65
                </a>
              </p>
              <p className='about-details-contacts__desk'>
                <a
                  href='mailto:vagoalex666@mail.ru'
                  className='about-details-contacts-mail'
                  title='Нажми, чтобы написать на мыло :)'
                >
                  vagoalex666@mail.ru
                </a>
              </p>
            </div>
            <div className='about-details-download'>
              <a
                href='#!'
                className='about-details-download__link'
                target='_blank'
                title='Download Resume'
                download
              >
                {' '}
                <i className='about-details-download-icon' />
                Скачать резюме
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
