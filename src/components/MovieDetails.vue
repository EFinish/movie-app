<template>
    <b-row>
      <b-col md="8">
        <b-row>
          <b-col>
            <div>Runtime</div>
            <div>{{ movieDetails.runtime }} min</div>
          </b-col>
          <b-col>
            <div>country</div>
            <div v-for="(country, index) in movieDetails.production_countries" :key="index">
              {{ country.iso_3166_1 }}
            </div>
          </b-col>
          <b-col>
            <div>language</div>
            <div>{{ movieDetails.original_language }}</div>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-img
              fluid
              :src="`https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`"
              />
          </b-col>
        </b-row>
        <b-row>
          <b-col class="text-center">
            <b-button
              class="movie-details-button"
              :ref="`moviedetails-0`">
              <b-icon-play-fill />
              Play
            </b-button>
          </b-col>
          <b-col class="text-center">
            <b-button
              class="movie-details-button"
              :ref="`moviedetails-1`">
              <b-icon-eye-fill />
              Trailer
            </b-button>
          </b-col>
          <b-col class="text-center">
            <b-button
              class="movie-details-button"
              :ref="`moviedetails-2`">
              <b-icon-list />
              Add to List
            </b-button>
          </b-col>
        </b-row>
      </b-col>
      <b-col md="4">
        <div>
          {{ movieDetails.overview }}
        </div>
      </b-col>
      <Keypress
        key-event="keydown"
        :key-code="66"
        :preventDefault="true"
        @success="handlePressBack" />
    </b-row>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'MovieDetails',
  components: {
    Keypress: () => import('vue-keypress'),
  },
  computed: {
    ...mapState({
      movieDetails: 'movieDetails',
      focusSection: 'focusSection',
    }),
  },
  data: () => ({
    refNumber: 0,
  }),
  mounted() {
    this.focusRef();
  },
  watch: {
    '$store.state.focusSection': function (nv) {
      if (nv !== 'moviedetails') {
        return;
      }

      this.focusRef();
    },
    '$store.state.latestMovement': function (nv) {
      if (this.focusSection !== 'moviedetails') {
        return;
      }

      switch (nv) {
        case 'left':
        case 'left2':
          if (this.refNumber > 0) {
            this.refNumber -= 1;
            this.focusRef();
          }
          break;
        case 'right':
        case 'right2':
          if (this.refNumber < 2) {
            this.refNumber += 1;
            this.focusRef();
          }
          break;
        default:
          break;
      }
    },
  },
  methods: {
    handlePressBack() {
      this.$router.go(-1);
      this.$store.commit('setMovieDetails', null);
    },
    focusRef() {
      const refs = this.$refs[`moviedetails-${this.refNumber}`];
      if (refs) {
        refs.focus();
      }
    },
  },
};
</script>

<style scoped>
  .movie-details-button {
    background-color: black;
    color: white;
    font-family: sans-serif;
    border: none;
  }
  .movie-details-button:focus {
    background-color: orange;
    color: white;
    font-family: sans-serif
  }
</style>
