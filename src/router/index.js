import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Details from '../views/Details.vue';
import Store from '../store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: (to, from, next) => {
      Store.dispatch('updateFocusSection', 'genre');
      next();
    },
  },
  {
    path: '/:genreId',
    name: 'Home',
    component: Home,
    beforeEnter: (to, from, next) => {
      Store.dispatch('updateFocusSection', 'moviegrid');
      next();
    },
  },
  {
    path: '/movie/:movieId',
    name: 'Movie Details',
    component: Details,
    beforeEnter: (to, from, next) => {
      Store.dispatch('updateMovieDetailsByMovieId', to.params.movieId);
      Store.dispatch('updateFocusSection', 'moviedetails');
      next();
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
