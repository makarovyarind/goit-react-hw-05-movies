import { useState, useEffect, Suspense } from 'react';
import { NavLink, useParams, useNavigate, useLocation, Outlet } from 'react-router-dom';
import { getMoviesDetails } from '../../services/api';
import defaultPhoto from '../../components/img/no_image.jpg';
import './MovieDetails.css';

function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  let backLocation = location.state?.from;

  const goBack = () => {
    if (backLocation) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  useEffect(() => {
    const getMovie = async () => {
      const data = await getMoviesDetails(movieId);
      if (data) {
        setMovie(data);
      }
    };

    getMovie();
  }, [movieId]);

  return (
    <div className="movie-details">
      <button onClick={goBack}>Go Back</button>
      <div className="poster">
        {movie ? (
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : defaultPhoto
            }
            alt={movie.title}
            width="250"
          />
        ) : (
          <div>Loading...</div>
        )}
      </div>
      <div className="movie-info">
        {movie && (
          <>
            <h1>{movie.title}</h1>
            <p>User Score: {movie.vote_average * 10}%</p>
            <h2>Overview</h2>
            <span>{movie.overview}</span>
            {movie.genres && (
              <>
                <h3>Genres</h3>
                <ul>
                  {movie.genres.map((genre) => (
                    <li key={genre.id}>{genre.name}</li>
                  ))}
                </ul>
              </>
            )}
          </>
        )}
      </div>
      <div className="additional-info">
        <p>Additional information</p>
        <nav>
          <NavLink to={`/movies/${movieId}/cast`} activeClassName="active-link">Cast</NavLink>
          <NavLink to={`/movies/${movieId}/reviews`} activeClassName="active-link">Reviews</NavLink>
        </nav>
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}

export default MovieDetails;
