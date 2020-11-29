<template>
    <div>
      <b-spinner v-if="genres.length === 0" />
      <b-list-group v-if="genres.length > 0">
        <b-list-group-item
          v-for="(genre, index) in genres"
          :key="genre.id"
          :href="`#/${genre.id}`"
          :ref="`genre-${index}`"
          class="genre-list-item">
          {{genre.name}}
        </b-list-group-item>
      </b-list-group>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'GenreMenu',
  computed: {
    ...mapState({
      genres: 'genres',
      focusSection: 'focusSection',
      movies: 'movies',
    }),
  },
  data: () => ({
    refNumber: 0,
  }),
  mounted() {
    this.$store.dispatch('initGenres');
  },
  watch: {
    '$store.state.focusSection': function (nv) {
      if (nv !== 'genre') {
        return;
      }

      this.focusRef();
    },
    '$store.state.latestMovement': function (nv) {
      if (this.focusSection !== 'genre') {
        return;
      }

      switch (nv) {
        case 'up':
        case 'up2':
          if (this.refNumber > 0) {
            this.refNumber -= 1;
            this.focusRef();
          }
          break;
        case 'down':
        case 'down2':
          if (this.refNumber < this.genres.length) {
            this.refNumber += 1;
            this.focusRef();
          }
          break;
        case 'right':
        case 'right2':
          if (this.movies.length > 0) {
            this.$store.dispatch('updateFocusSection', 'moviegrid');
          }
          break;
        default:
          break;
      }
    },
  },
  methods: {
    focusRef() {
      const refs = this.$refs[`genre-${this.refNumber}`];
      if (refs[0]) {
        refs[0].focus();
      }
    },
  },
};
</script>

<style scoped>
.genre-list-item {
  background-color: black;
  color: white;
  font-family: sans-serif
}
.genre-list-item:focus {
  background-color: black;
  color: white;
  font-family: sans-serif;
  border: 3px solid orange
}
</style>
