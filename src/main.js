import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import toast from 'components/common/toast/index'
Vue.config.productionTip = false
// 添加事件总线
Vue.prototype.$bus = new Vue()
// 安装toast插件
Vue.use(toast)

new Vue({
  render: function (h) { return h(App) },
  router,
  store
}).$mount('#app')
