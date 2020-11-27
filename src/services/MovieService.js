import TheMovieDb from '../utils/clients/TheMovieDb';

const MovieService = (function () {
  async function getMoviesByGenreId(genreId) {
    const responseData = await TheMovieDb.getDiscoverMovie({ genreId });

    return responseData;
  }

  async function getMovieByMovieId(movieId) {
    const responseData = await TheMovieDb.getMovieDetails(movieId);

    return responseData;
  }

  return {
    getMoviesByGenreId,
    getMovieByMovieId,
  };
}());

export default MovieService;
