import { Modal, Button } from 'bootstrap-vue/es/components';
import Vue from 'vue';
import VueRouter from 'vue-router';
import VidispineVersion from '../components/VidispineVersion.vue';
import Front from '../components/Front.vue';

Vue.use(Modal);
Vue.use(Button);
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'front',
    component: Front,
  },
  {
    path: '/version',
    name: 'version',
    component: VidispineVersion,
  },
];

export default new VueRouter({
  routes,
  mode: 'history',
});
