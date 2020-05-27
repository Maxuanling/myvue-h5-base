/*
 * @Description: 
 * @Version: 1.0
 * @Autor: 马璇玲
 * @Date: 2020-03-26 11:25:58
 * @LastEditors: 马璇玲
 * @LastEditTime: 2020-05-22 15:32:03
 */ 
import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store"
// 工具类
import myTool from "common/tool.js"

// css
import 'assets/css/base.css'
import 'assets/css/color.css'
import 'assets/css/fontSize.css'
// vant
import { Toast } from 'vant';

Vue.use(Toast);

Vue.config.productionTip = false
// 接口
import api from './api/mergeApi'

Vue.prototype.$api = api
Vue.prototype.$myTool = myTool

window.Vm = new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
