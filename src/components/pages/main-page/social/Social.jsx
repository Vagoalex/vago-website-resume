import data from '../../../../app-data.json';

import './Social.scss';

const { socials } = data;

const Social = () => {
  return (
    <ul className='Social-list'>
      {socials.map(({ id, ...data }) => (
        <SocialItem key={id} {...data} />
      ))}
    </ul>
  );
};

const SocialItem = ({ name, socialLink }) => {
  return (
    <li className='Social-list-item'>
      <a
        className={`Social-list-item-link Social-list-item-link__${name}`}
        href={socialLink}
        target='_blank'
        rel='noreferrer'
      >
        <i className={`fa fa-${name}`}></i>
      </a>
    </li>
  );
};

export default Social;
