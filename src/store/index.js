import Vue from 'vue';
import Vuex from 'vuex';
import restaurants from './restaurants';
import api from '@/api';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {restaurants: restaurants(api)},
});
