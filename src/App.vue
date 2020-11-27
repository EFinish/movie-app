<template>
  <div id="app">
    <router-view />
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
    <Keypress
      key-event="keydown"
      :key-code="13"
      :preventDefault="true"
      @success="handlePressEnter" />
    <Keypress
      key-event="keydown"
      :key-code="66"
      :preventDefault="true"
      @success="handlePressBack" />
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
      'handleMovement',
    ]),
    handlePressLeft() {
      this.$store.dispatch('handleMovement', 'left');
    },
    handlePressUp() {
      this.$store.dispatch('handleMovement', 'up');
    },
    handlePressRight() {
      this.$store.dispatch('handleMovement', 'right');
    },
    handlePressDown() {
      this.$store.dispatch('handleMovement', 'down');
    },
    handlePressEnter() {
      console.log('enter');
    },
    handlePressBack() {
      console.log('back');
    },
  },
};
</script>
