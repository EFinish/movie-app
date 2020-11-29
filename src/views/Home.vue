<template>
  <b-container>
    <b-row>
      <b-col>
        <h4><u>FILMER</u></h4>
      </b-col>
    </b-row>
    <b-row>
      <b-col md='3'>
        <GenreMenu />
      </b-col>
      <b-col md='9'>
        <MovieGrid />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import GenreMenu from '@/components/GenreMenu.vue';
import MovieGrid from '@/components/MovieGrid.vue';

export default {
  name: 'Home',
  components: {
    GenreMenu,
    MovieGrid,
  },
};
</script>
