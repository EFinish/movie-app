import TheMovieDb from '../utils/clients/TheMovieDb';

const GenreService = (function () {
  async function getGenres() {
    const responseData = await TheMovieDb.getGenres();

    return responseData.genres;
  }

  return {
    getGenres,
  };
}());

export default GenreService;
