import { Link } from 'react-scroll';
import data from '../../../../app-data.json';

import './Footer.scss';

const { 'footer-socials': footerSocials } = data;

const Footer = () => {
  return (
    <div className='Footer'>
      <div className='Footer-section' id='contacts'>
        {/* Костыль >.< */}
      </div>
      <div className='Footer-wrapper'>
        <div className='Footer-scroll'>
          <Link to='home' className='Footer-scroll__link'>
            link
          </Link>
        </div>
        <div className='Footer-container'>
          <ul className='FooterSocial-list'>
            {footerSocials.map(({ id, ...data }) => (
              <FooterSocialItem key={id} {...data} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const FooterSocialItem = ({ title, socialLink }) => {
  return (
    <li className='FooterSocial-list-item'>
      <a
        className={`FooterSocial-list-item__link`}
        href={socialLink}
        target='_blank'
        rel='noreferrer'
      >
        {title}
      </a>
    </li>
  );
};

export default Footer;
