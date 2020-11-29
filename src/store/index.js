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
    focusPoint: {
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
    setFocusPoint(state, { refNumber, componentSection }) {
      state.focusPoint = {
        refNumber,
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
      let newRefNumber = context.state.focusPoint.refNumber;
      const newComponentSection = context.state.focusPoint.componentSection;

      switch (direction) {
        case 'left':

          break;
        case 'up':
          newRefNumber += 1;
          break;
        case 'right':

          break;
        case 'down':
          if (newRefNumber > 0) {
            newRefNumber -= 1;
          }
          break;
        default:
          break;
      }

      context.commit('setFocusPoint', { refNumber: newRefNumber, componentSection: newComponentSection });
    },
    handleEnter() {

    },
    handleBack() {

    },
    focusToFocusPoint(context) {
      const refName = `${context.state.focusPoint.componentSection}-${context.state.focusPoint.refNumber}`;
      this.$refs[refName].focus();
    },
  },
  modules: {
  },
});
