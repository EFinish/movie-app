<template>
    <div>
        <b-row  v-for="(chunk, index) in movieChunks" :key='index' class="mt-3">
          <b-col v-for="movie in chunk" :key="movie.id">
            <b-link :href="`#/movie/${movie.id}`">
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
};
</script>
