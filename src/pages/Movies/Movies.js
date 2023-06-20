import React, { useState, useEffect } from "react";
import { Searchbar } from "components/Searchbar/Searchbar";
import { getMoviesWithName } from "services/api";
import { Button } from "components/LoadButton/Button";
import { MoviesList } from "components/MoviesList/MoviesList";
import { useSearchParams } from "react-router-dom";

function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchName = searchParams.get("searchName") || "";
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [searchState, setSearchState] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (searchName === "") {
      setMovies([]);
    }

    const getMovies = async () => {
      try {
        const data = await getMoviesWithName(searchName, page);
        
        if (data && data.results) {
          setMovies((prevMovies) => [...prevMovies, ...data.results]);
        }
      } catch (error) {
        setError(error);
        alert(error);
      }
    };

    getMovies();
  }, [searchName, page]);

  const searchImageSubmit = (name) => {
    if (name === searchName) {
      return alert(`${name} already entered`);
    }

    setSearchParams({ searchName: name });
    setPage(1);
    setMovies([]);
    setSearchState(true);
  };

  const movieLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  if (error) {
    alert(" An error occurred. Please try again later.");
  }

  return (
    <div>
      <Searchbar onSubmit={searchImageSubmit} />
      <MoviesList movies={movies} />
      {searchState && movies.length - 1 !== page && <Button onClick={movieLoadMore} />}
    </div>
  );
}

export default Movies;