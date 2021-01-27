import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 导入组件
import hiWorld from '@/components/hiWorld.vue'
// 注册组件 注册全局组件
Vue.component("hiWorld",hiWorld)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
