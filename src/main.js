import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//公用css
import "./assets/css/reset.css";
import "./assets/css/animate.css"
import axios from "axios";
import VueAxios from "vue-axios"
// 引入layer插件
import layer from "vue-layer"
import 'vue-layer/lib/vue-layer.css';

Vue.use(VueAxios,axios)
Vue.prototype.$layer = layer(Vue)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

