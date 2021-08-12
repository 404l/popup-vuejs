import Vue from 'vue';
import App from './app/App.vue';
import router from './router';
import './app/shared/styles/index.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
