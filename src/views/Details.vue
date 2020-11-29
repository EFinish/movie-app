<template>
  <div>
    <b-container v-if="movieDetails !== null">
      <b-row>
        <b-col>
          <h4>{{ movieDetails.title }} ({{ movieDetails.release_date }})</h4>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <MovieDetails />
        </b-col>
      </b-row>
    </b-container>
    <b-spinner v-if="movieDetails === null" />
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
  },
};
</script>
