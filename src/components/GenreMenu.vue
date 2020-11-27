<template>
    <div>
      <b-spinner v-if="genres.length === 0" />
      <b-list-group v-if="genres.length > 0">
        <b-list-group-item
          v-for="genre in genres"
          :key="genre.id"
          :href="`#/${genre.id}`">
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
};
</script>
