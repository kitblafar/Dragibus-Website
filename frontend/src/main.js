import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueRouter from "vue-router";
import Home from "@/components/Home";
import Results from "@/components/Results";
import Test from "@/components/Test";

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter);

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', name: "Home", component: Home },
    { path: '/results', name: "Results",component: Results },
    { path: '/test', name: "Test",component: Test }
  ]
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
