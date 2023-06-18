import React, { useState, useEffect } from 'react';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import { getPopularMovies } from 'services/api';
import { Button } from 'components/LoadButton/Button';

function Home() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getMovies = async () => {
        const fetchData = async () => {
          const data = await getPopularMovies(page);
          if (data && data.results) {
            setMovies((prevMovies) => [...prevMovies, ...data.results]);
          }
        };
        fetchData();
    };

    getMovies();
  }, [page]);

  const movieLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <h1 className="HomeTitle">Tranding today</h1>
      <ul>
        <MoviesList movies={movies} />
      </ul>
      {movies.length - 1 !== page && <Button onClick={movieLoadMore} />}
    </div>
  );
}

export default Home;