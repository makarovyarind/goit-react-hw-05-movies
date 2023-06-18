import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'd607859253f419a97e2a864827f40ef4';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
  language: 'en-US',
};

export const IMAGE_URL = 'https://image.tmdb.org/t/p/w200';

export async function getPopularMovies(page) {
  try {
    const config = {
      url: `trending/movie/day`,
      params: {
        page,
      },
    };
    const { data } = await axios(config);
    return data;
  } catch (error) {
    console.log('error', { error });
    return null;
  }
}

export async function getMoviesWithName(name, page) {
  try {
    const config = {
      url: `search/movie`,
      params: {
        query: name,
        page,
      },
    };
    const { data } = await axios(config);
    return data;
  } catch (error) {
    console.log('error', { error });
    return null;
  }
}

export async function getMoviesDetails(id) {
  try {
    const config = {
      url: `movie/${id}`,
    };
    const { data } = await axios(config);
    return data;
  } catch (error) {
    console.log('error', { error });
    return null;
  }
}

export async function getCastInfo(id) {
  try {
    const config = {
      url: `movie/${id}/credits`,
    };
    const { data } = await axios(config);
    return data;
  } catch (error) {
    console.log('error', { error });
    return null;
  }
}

export async function getMovieReview(id) {
  try {
    const config = {
      url: `movie/${id}/reviews`,
    };
    const response = await axios(config);
    return response.data.results;
  } catch (error) {
    console.log('error', { error });
    return null;
  }
}
