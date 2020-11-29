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

      context.commit('setMovieDetails', movieDetails);
    },
    handleMovement(context, direction) {
      switch (context.state.focusPoint.componentSection) {
        case 'moviedetails':
          context.dispatch('handleMovementFromMovieDetails', direction);
          break;
        case 'genre':
          context.dispatch('handleMovementFromGenreList', direction);
          break;
        case 'moviegrid':
          context.dispatch('handleMovementFromMovieGrid', direction);
          break;
        default:
          break;
      }
    },
    handleMovementFromGenreList(context, direction) {
      let newRefNumber = context.state.focusPoint.refNumber;
      let newComponentSection = context.state.focusPoint.componentSection;

      switch (direction) {
        case 'up':
          if (newRefNumber > 0) {
            newRefNumber -= 1;
          }
          break;
        case 'down':
          newRefNumber += 1;
          break;
        case 'right':
          newComponentSection = 'moviegrid';
          newRefNumber = 0;
          break;
        default:
          break;
      }

      context.commit('setFocusPoint', { refNumber: newRefNumber, componentSection: newComponentSection });
    },
    handleMovementFromMovieGrid(context, direction) {
      let newRefNumber = context.state.focusPoint.refNumber;
      let newComponentSection = context.state.focusPoint.componentSection;

      switch (direction) {
        case 'up':
          if (newRefNumber > 3) {
            newRefNumber -= 4;
          }
          break;
        case 'down':
          newRefNumber += 4;
          break;
        case 'left':
          if (newRefNumber % 4 === 0) {
            newComponentSection = 'genre';
            newRefNumber = 0;
            break;
          }
          newRefNumber -= 1;
          break;
        case 'right':
          newRefNumber += 1;
          break;
        default:
          break;
      }

      context.commit('setFocusPoint', { refNumber: newRefNumber, componentSection: newComponentSection });
    },
    handleMovementFromMovieDetails() {

    },
    handleBack() {

    },
  },
  modules: {
  },
});
