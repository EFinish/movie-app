import Vue from 'vue';
import Vuex from 'vuex';

import GenreService from '../services/GenreService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    genres: [],
    movies: [],
  },
  mutations: {
    setGenres(state, payload) {
      state.genres = payload;
    },
    setMovies(state, payload) {
      state.movies = payload;
    },
  },
  actions: {
    async initState(context) {
      const genres = await GenreService.getGenres();

      context.commit('setGenres', genres);
    },
    async updateMoviesByGenreId(context, genreId) {
      const movies = await GenreService.getMoviesByGenreId(genreId);

      console.log('movies', movies);

      context.commit('setMovies', movies);
    },
  },
  modules: {
  },
});
