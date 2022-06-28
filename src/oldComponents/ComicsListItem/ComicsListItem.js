import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './ComicsListItem.scss';

const ComicsListItem = (props) => {
  const { data, id } = props;
  const { title, thumbnail, price } = data;

  return (
    <li className='ComicsList-cards-item'>
      <Link to={`/comics/${id}`} className='ComicsList-cards-item__link'>
        <img
          className='ComicsList-cards-item__img'
          src={thumbnail}
          alt={`comics: ${title}`}
        />
        <div className='ComicsList-cards-item-titles'>
          <h3 className='ComicsList-cards-item-titles__title'>{title}</h3>
          <h4 className='ComicsList-cards-item-titles__price'>
            {price === 0 ? 'Not available' : price + '$'}
          </h4>
        </div>
      </Link>
    </li>
  );
};

ComicsListItem.propTypes = {
  data: PropTypes.object,
  id: PropTypes.number,
};

export default ComicsListItem;
