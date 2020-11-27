import TheMovieDb from '../utils/clients/TheMovieDb';

const GenreService = (function () {
  async function getGenres() {
    const responseData = await TheMovieDb.getGenres();

    return responseData.genres;
  }

  async function getMoviesByGenreId(genreId) {
    const responseData = await TheMovieDb.getDiscoverMovie({ genreId });

    return responseData;
  }

  return {
    getGenres,
    getMoviesByGenreId,
  };
}());

export default GenreService;
