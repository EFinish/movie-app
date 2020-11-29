<template>
    <div>
      <b-spinner v-if="genres.length === 0" />
      <b-list-group v-if="genres.length > 0">
        <b-list-group-item
          v-for="(genre, index) in genres"
          :key="genre.id"
          :href="`#/${genre.id}`"
          :ref="`genre-${index}`">
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
  watch: {
    '$store.state.focusPoint': function (nv) {
      const refName = `${nv.componentSection}-${nv.refNumber}`;
      const ref = this.$refs[refName][0];
      ref.focus();
    },
  },
};
</script>
