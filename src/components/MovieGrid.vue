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
  data() {
    return {
      pageNumber: 1,
      refNumber: 0,
    };
  },
  mounted() {
    if (this.$route.params.genreId) {
      this.$store.dispatch('updateMoviesByGenreId', this.$route.params.genreId);
    }
  },
  computed: {
    ...mapState({
      movies: 'movies',
      focusSection: 'focusSection',
    }),
    movieChunks() {
      return chunk(this.movies, 4);
    },
  },
  watch: {
    '$store.state.focusSection': function (nv) {
      if (nv !== 'moviegrid') {
        return;
      }

      this.focusRef();
    },
    '$store.state.latestMovement': function (nv) {
      if (this.focusSection !== 'moviegrid') {
        return;
      }

      switch (nv) {
        case 'up':
        case 'up2':
          if (this.refNumber > 3) {
            this.refNumber -= 4;
            this.focusRef();
          }
          break;
        case 'down':
        case 'down2':
          this.refNumber += 4;
          this.focusRef();
          break;
        case 'left':
        case 'left2':
          if (this.refNumber % 4 === 0) {
            this.$store.dispatch('updateFocusSection', 'genre');
            break;
          }
          this.refNumber -= 1;
          this.focusRef();
          break;
        case 'right':
        case 'right2':
          this.refNumber += 1;
          this.focusRef();
          break;
        default:
          break;
      }
    },
    '$route.params.genreId': function () {
      this.pageNumber = 1;
    },
    refNumber(nv) {
      if (nv <= this.movies.length) {
        return;
      }

      this.pageNumber += 1;
      this.$store.dispatch(
        'addMoviesPageByGenreId',
        { page: this.pageNumber, genreId: this.$route.params.genreId },
      );
    },
  },
  methods: {
    focusRef() {
      const refs = this.$refs[`moviegrid-${this.refNumber}`];
      if (refs[0]) {
        refs[0].focus();
      }
    },
  },
};
</script>

<style scoped>
  .moviegrid-link:focus > img {
    border: 3px solid orange
  }
</style>
