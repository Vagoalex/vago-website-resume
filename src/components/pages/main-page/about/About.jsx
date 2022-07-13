import data from '../../../../app-data.json';
import myPhoto from '../../../../assets/images/main-page/about-photo.jpg';
import { ReactComponent as DownloadArrow } from '../../../../assets/icons/about/download-arrow.svg';

import './About.scss';

const { titles, 'about-desk': desk, 'about-contacts': contacts } = data.about;

const { 'about-me': meTitle, 'about-contacts': contactsTitle } = titles;

const { name, age, city, phone, mail } = contacts;
const { phoneRef, phoneNumber, phoneTitle } = phone;
const { mailRef, mailNumber, mailTitle } = mail;

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
              {meTitle.map((char, index) => {
                const hiddenClass = 'about-title-item-hidden';

                return (
                  <div
                    key={index}
                    className={`about-title__item ${
                      char === '.' ? hiddenClass : ''
                    }`}
                  >
                    {char}
                  </div>
                );
              })}
            </div>

            <p className='about-me__desk'>{desk}</p>
          </div>
          <div className='about-details'>
            <div className='about-details-contacts'>
              <div className='about-title'>
                {contactsTitle.map((char, index) => (
                  <div key={index} className='about-title__item'>
                    {char}
                  </div>
                ))}
              </div>
              <p className='about-details-contacts__desk'>{name}</p>
              <p className='about-details-contacts__desk'>{age}</p>
              <p className='about-details-contacts__desk'>{city}</p>
              <p className='about-details-contacts__desk'>
                <a
                  className='about-details-contacts-phone'
                  href={phoneRef}
                  title={phoneTitle}
                >
                  {' '}
                  {phoneNumber}
                </a>
              </p>
              <p className='about-details-contacts__desk'>
                <a
                  href={mailRef}
                  className='about-details-contacts-mail'
                  title={mailTitle}
                >
                  {mailNumber}
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
                <span
                  alt='Download Resume'
                  className='about-details-download-icon'
                >
                  {' '}
                  <DownloadArrow />
                </span>
                Скачать резюме
              </a>
            </div>
          </div>
        </div>
      </div>

      <svg
        className='about-border'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 180'
      >
        <path d='M0 43.418h288c96 0 192 0 288 26.7 96 26.3 192 80.3 288 69.3s192-85 288-117.3c96-31.7 192-21.7 240-16l48 5.3V180H0z' />
      </svg>
    </section>
  );
};

export default About;
