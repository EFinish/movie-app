import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Store from '../store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/:genreId',
    name: 'Home',
    component: Home,
    beforeEnter: (to, from, next) => {
      Store.dispatch('updateMoviesByGenreId', to.params.genreId);
      next();
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
