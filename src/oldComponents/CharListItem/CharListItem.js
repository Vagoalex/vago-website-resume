import PropTypes from 'prop-types';

import marvelIcon from '../../assets/icons/marvelIcon.jpg';

import './CharListItem.scss';

const CharListItem = (props) => {
  const { data, id, onCharSelected } = props;
  const { name, thumbnail } = data;

  const notAvailableImg = 'image_not_available.jpg';
  const image =
    thumbnail.slice(-23) === notAvailableImg ? marvelIcon : thumbnail;

  return (
    <li
      onClick={() => onCharSelected(id)}
      className='CharList-cards-item'
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          onCharSelected(id);
        }
      }}
    >
      <img
        className='CharList-cards-item__img'
        src={image}
        alt={`character: ${name}`}
      />
      <h3 className='CharList-cards-item__title'>{name}</h3>
    </li>
  );
};

CharListItem.propTypes = {
  data: PropTypes.object,
  id: PropTypes.number,
  onCharSelected: PropTypes.func,
};

export default CharListItem;
