<template>
  <div>
    <transition name="slide-right">
      <b-container v-if="movieDetails !== null">
        <b-row>
          <b-col>
            <h4>{{ movieDetails.title }} ({{ releaseDateYear }})</h4>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <MovieDetails />
          </b-col>
        </b-row>
      </b-container>
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import MovieDetails from '@/components/MovieDetails.vue';

export default {
  name: 'Details',
  components: {
    MovieDetails,
  },
  computed: {
    ...mapState({
      movieDetails: 'movieDetails',
    }),
    releaseDateYear() {
      if (this.movieDetails !== null) {
        return new Date(this.movieDetails.release_date).getFullYear();
      }

      return '';
    },
  },
};
</script>

<style scoped>
 .slide-right-enter {
   transform: translateX(5vw);
    opacity: 0;
 }
 .slide-right-enter-active {
   transition: all .5s ease;
 }
</style>
