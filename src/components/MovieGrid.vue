<template>
    <div>
        <b-row  v-for="(chunk, chunkIndex) in movieChunks" :key='chunkIndex' class="mt-3">
          <b-col v-for="(movie, movieIndex) in chunk" :key="movie.id">
            <b-link
              class="moviegrid-link"
              :ref="`moviegrid-${(4 * chunkIndex)+movieIndex}`"
              :href="`#/movie/${movie.id}`">
            <b-img
              fluid
              :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`"
              />
            </b-link>
          </b-col>
        </b-row>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { chunk } from 'lodash';

export default {
  name: 'MovieGrid',
  computed: {
    ...mapState({
      movies: 'movies',
    }),
    movieChunks() {
      return chunk(this.movies.results, 4);
    },
  },
  watch: {
    '$store.state.focusPoint': function (nv) {
      if (nv.componentSection !== 'moviegrid') {
        return;
      }

      const refName = `moviegrid-${nv.refNumber}`;
      const ref = this.$refs[refName][0];
      ref.focus();
    },
  },
};
</script>

<style scoped>
  .moviegrid-link:focus > img {
    border: 3px solid orange
  }
</style>
