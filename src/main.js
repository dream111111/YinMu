// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


require('swiper/dist/css/swiper.css')
import './styles/layout.scss';
import 'mint-ui/lib/style.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import ElementUI from 'element-ui'
import { Tabs,TabPane} from 'element-ui'
import MintUI from 'mint-ui'
import { Navbar, TabItem } from 'mint-ui';
import Axios from "axios"
Vue.prototype.$axios = Axios
Vue.prototype.HOST = '/api'
Vue.prototype.$host = '/bpi'
Vue.prototype.COST = '/cpi'
Vue.use(VueAwesomeSwiper)
Vue.use(ElementUI)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(MintUI)
Vue.config.productionTip = false
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
