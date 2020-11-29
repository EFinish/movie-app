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
            <b-button :ref="`moviedetails-0`">Play</b-button>
          </b-col>
          <b-col>
            <b-button :ref="`moviedetails-1`">Trailer</b-button>
          </b-col>
          <b-col>
            <b-button :ref="`moviedetails-2`">Add to List</b-button>
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
    }),
  },
  watch: {
    '$store.state.focusPoint': function (nv) {
      if (nv.componentSection !== 'moviedetails') {
        return;
      }

      const refName = `moviedetails-${nv.refNumber}`;
      const ref = this.$refs[refName];
      ref.focus();
    },
  },
  methods: {
    handlePressBack() {
      this.$router.go(-1);
    },
  },
};
</script>
