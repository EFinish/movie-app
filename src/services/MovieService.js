import TheMovieDb from '../utils/clients/TheMovieDb';

const MovieService = (function () {
  async function getMoviesByGenreId(genreId, page = 1) {
    const responseData = await TheMovieDb.getDiscoverMovie({ genreId, page });

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
