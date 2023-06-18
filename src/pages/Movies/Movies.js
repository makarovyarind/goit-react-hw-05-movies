import React, { useState, useEffect } from "react";
import { Searchbar } from "components/Searchbar/Searchbar";
import { getMoviesWithName } from "services/api";
import { Button } from "components/LoadButton/Button";
import { MoviesList } from "components/MoviesList/MoviesList";

function Movies() {
  const [searchName, setSearchName] = useState("");
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [searchState, setSearchState] = useState(false);

  useEffect(() => {
    if (searchName === "") {
      setMovies([]);
    }

    const getMovies = async () => {
      const data = await getMoviesWithName(searchName, page);
      if (data && data.results) {
        setMovies((prevMovies) => [...prevMovies, ...data.results]);
      }
    };

    getMovies();
  }, [searchName, page]);

  const searchImageSubmit = (name) => {
    if (name === searchName) {
      return alert(`${name} already entered`);
    }

    setSearchName(name);
    setPage(1);
    setMovies([]);
    setSearchState(true);
  };

  const movieLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <Searchbar onSubmit={searchImageSubmit} />
      <MoviesList movies={movies} />
      {searchState && movies.length - 1 !== page && <Button onClick={movieLoadMore} />}
    </div>
  );
}

export default Movies;