import axios from 'axios';

const getGenres = async () => {
  try {
    let res = await axios.get(
      'https://api.themoviedb.org/3/genre/movie/list?api_key=b0421518822720cc02b5a30f104b81bb&language=en-US',
    );
    return res.data.genres;
  } catch (error) {
    console.warn(`Error at getGenres -> ${error.message}`);
    return error.message;
  }
};

const getMoviesByGenre = async genre => {
  try {
    let res = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=b0421518822720cc02b5a30f104b81bb&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genre}&with_watch_monetization_types=flatrate`,
    );
    return res.data.results;
  } catch (error) {
    console.warn(`Error at getMoviesByGenre -> ${error.message}`);
    return error.message;
  }
};

const getMovie = async id => {
  try {
    return await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=b0421518822720cc02b5a30f104b81bb&language=en-US`,
    );
  } catch (error) {
    console.warn(`Error at getMovie -> ${error.message}`);
    return error.message;
  }
};

const getPopular = async () => {
  try {
    let res = await axios.get(
      'https://api.themoviedb.org/3/movie/popular?api_key=b0421518822720cc02b5a30f104b81bb&language=en-US&page=1',
    );
    return res.data.results;
  } catch (error) {
    console.warn(`Error at getPopular -> ${error.message}`);
    return error.message;
  }
};

export {getGenres, getMoviesByGenre, getMovie, getPopular};
