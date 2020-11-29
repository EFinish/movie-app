import Vue from 'vue';
import Vuex from 'vuex';

import GenreService from '../services/GenreService';
import MovieService from '../services/MovieService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    genres: [],
    movies: [],
    movieDetails: null,
    focusSection: null,
    latestMovement: null,
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
    setFocusSection(state, payload) {
      state.focusSection = payload;
    },
    setLatestMovement(state, payload) {
      state.latestMovement = payload;
    },
  },
  actions: {
    async initGenres(context) {
      const genres = await GenreService.getGenres();

      context.commit('setGenres', genres);
    },
    async updateMoviesByGenreId(context, genreId) {
      const movies = await MovieService.getMoviesByGenreId(genreId);

      context.commit('setMovies', movies.results);
    },
    async addMoviesPageByGenreId(context, { page, genreId }) {
      const movies = await MovieService.getMoviesByGenreId(genreId, page);
      context.commit('setMovies', [...context.state.movies, ...movies.results]);
    },
    async updateMovieDetailsByMovieId(context, movieId) {
      const movieDetails = await MovieService.getMovieByMovieId(movieId);

      context.commit('setMovieDetails', movieDetails);
    },
    updateMovement(context, movement) {
      let newMovement = movement;
      if (context.state.latestMovement === movement) {
        newMovement = `${movement}2`;
      }
      context.commit('setLatestMovement', newMovement);
    },
    updateFocusSection(context, focusSection) {
      context.commit('setFocusSection', focusSection);
    },
  },
  modules: {
  },
});
