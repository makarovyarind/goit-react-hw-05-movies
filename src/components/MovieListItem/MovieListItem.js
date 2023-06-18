import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

export function MovieListItem ({ imageUrl, title, id }) {

    const location = useLocation();
    return (
        
        <Link to={{
            pathname: `/movies/${id}`,
            state: {from: location},
        }} >
        
        <li className="MovieListItem">
            <img className='MovieListItemImage' src={IMAGE_URL + imageUrl} alt={title} />
            <p className='MovieListItemTitle'>{title}</p>
          </li>

          </Link>
    );
};

MovieListItem.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  };