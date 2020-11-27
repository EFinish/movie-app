<template>
    <div>
        <b-row v-for="movie in movies.results" :key='movie.id'>
          <b-col v-for="index in 4" :key="index">
            {{movie.title}}
          </b-col>
        </b-row>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'MovieGrid',
  computed: {
    ...mapState({
      movies: 'movies',
    }),
  },
};
</script>
