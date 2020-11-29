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
    }),
  },
  mounted() {
    this.$store.dispatch('initGenres');
  },
  watch: {
    '$store.state.focusPoint': function (nv) {
      if (nv.componentSection !== 'genre') {
        return;
      }

      const refName = `genre-${nv.refNumber}`;
      const ref = this.$refs[refName][0];
      ref.focus();
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
