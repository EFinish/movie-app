const axios = require('axios');

const TheMovieDb = (function () {
  const apiPrefix = 'https://api.themoviedb.org/3';
  const apiKey = ''; // no apikey for now

  async function getGenres() {
    try {
      const response = await axios.get(`${apiPrefix}/genre/movie/list?api_key=${apiKey}`);

      return response.data;
    } catch (error) {
      alert(`Error! Error while fetching genres. ${error}`);

      return null;
    }
  }

  async function getDiscoverMovie({ genreId, page }) {
    try {
      const response = await axios.get(
        `${apiPrefix}/discover/movie?api_key=${apiKey}&with_genres=${genreId}&page=${page}`,
      );

      return response.data;
    } catch (error) {
      alert(`Error! Error while fetching discover movies. ${error}`);

      return null;
    }
  }

  async function getMovieDetails(movieId) {
    try {
      const response = await axios.get(
        `${apiPrefix}/movie/${movieId}?api_key=${apiKey}`,
      );

      return response.data;
    } catch (error) {
      alert(`Error! Error while fetching discover movies. ${error}`);

      return null;
    }
  }

  return {
    getGenres,
    getDiscoverMovie,
    getMovieDetails,
  };
}());

export default TheMovieDb;
