import './NavList.scss';

const navList = [
  { id: 'link-1', title: 'Home', ref: '#home' },
  { id: 'link-2', title: 'About', ref: '#about' },
  { id: 'link-3', title: 'Resume', ref: '#resume' },
  { id: 'link-4', title: 'Projects', ref: '#projects' },
  { id: 'link-5', title: 'Contacts', ref: '#contacts' },
];

const NavList = () => {
  return (
    <ul className='NavList'>
      {navList.map(({ id, ...data }) => (
        <NavListItem key={id} {...data} />
      ))}
    </ul>
  );
};

const NavListItem = ({ title, ref }) => {
  return (
    <li>
      <a href={ref}>{title}</a>
    </li>
  );
};

export default NavList;
