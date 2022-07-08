import './Social.scss';

const socials = [
  { id: 1, name: 'vk', socialLink: 'https://vk.com/vagoalex' },
  { id: 2, name: 'instagram', socialLink: 'https://instagram.com/vagoalex13' },
  {
    id: 3,
    name: 'linkedin',
    socialLink: 'https://www.linkedin.com/in/aleksandr-vago-420b8723a/',
  },
  { id: 4, name: 'telegram', socialLink: 'https://t.me/vagoalex' },
  { id: 5, name: 'github', socialLink: 'https://github.com/vagoalex' },
];

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
        link
      </a>
    </li>
  );
};

export default Social;
