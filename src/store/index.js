import Vue from 'vue';
import Vuex from 'vuex';

import GenreService from '../services/GenreService';
import MovieService from '../services/MovieService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    genres: [],
    movies: {},
    movieDetails: {},
    focus: {
      refNumber: 0,
      componentSection: 'genre',
    },
  },
  mutations: {
    setGenres(state, payload) {
      state.genres = payload;
    },
    setMovies(state, payload) {
      state.movies = payload;
    },
    setMovieDetails(state, payload) {
      state.movieDetails = payload;
    },
    setFocus(state, { ref, componentSection }) {
      state.focus = {
        ref,
        componentSection,
      };
    },
  },
  actions: {
    async initState(context) {
      const genres = await GenreService.getGenres();

      context.commit('setGenres', genres);
    },
    async updateMoviesByGenreId(context, genreId) {
      const movies = await MovieService.getMoviesByGenreId(genreId);

      context.commit('setMovies', movies);
    },
    async updateMovieDetailsByMovieId(context, movieId) {
      const movieDetails = await MovieService.getMovieByMovieId(movieId);

      console.log('movie details', movieDetails);

      context.commit('setMovieDetails', movieDetails);
    },
    handleMovement(context, direction) {
      // console.log('movement', direction);
      switch (direction) {
        case 'left':

          break;
        case 'up':

          break;
        case 'right':

          break;
        case 'down':
          break;
        default:
          console.log('movement', direction);
      }
      context.commit('setFocus', { refNumber: 0, componentSection: 'genre' });
    },
    handleEnter() {

    },
    handleBack() {

    },
  },
  modules: {
  },
});
