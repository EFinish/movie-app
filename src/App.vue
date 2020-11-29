<template>
  <div id="app">
    <router-view :key="$route.fullPath" />
    <Keypress
      key-event="keydown"
      :key-code="37"
      :preventDefault="true"
      @success="handlePressLeft" />
    <Keypress
      key-event="keydown"
      :key-code="38"
      :preventDefault="true"
      @success="handlePressUp" />
    <Keypress
      key-event="keydown"
      :key-code="39"
      :preventDefault="true"
      @success="handlePressRight" />
    <Keypress
      key-event="keydown"
      :key-code="40"
      :preventDefault="true"
      @success="handlePressDown" />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  components: {
    Keypress: () => import('vue-keypress'),
  },
  methods: {
    ...mapActions([
      'updateMovement',
    ]),
    handlePressLeft() {
      this.$store.dispatch('updateMovement', 'left');
    },
    handlePressUp() {
      this.$store.dispatch('updateMovement', 'up');
    },
    handlePressRight() {
      this.$store.dispatch('updateMovement', 'right');
    },
    handlePressDown() {
      this.$store.dispatch('updateMovement', 'down');
    },
  },
};
</script>

<style scoped>
#app {
  background-color: black;
  color: white;
  font-family: sans-serif;
}
</style>
