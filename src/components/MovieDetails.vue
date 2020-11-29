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
          <b-col>
            <b-button>Play</b-button>
          </b-col>
          <b-col>
            <b-button>Trailer</b-button>
          </b-col>
          <b-col>
            <b-button>Add to List</b-button>
          </b-col>
        </b-row>
      </b-col>
      <b-col md="4">
        <div>
          {{ movieDetails.overview }}
        </div>
      </b-col>
    </b-row>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'MovieDetails',
  computed: {
    ...mapState({
      movieDetails: 'movieDetails',
    }),
  },
};
</script>
