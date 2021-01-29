import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

// 导入全局css
import './assets/css/main.css'

// 导入组件
import hiWorld from '@/components/hiWorld.vue'
// 注册组件 注册全局组件
Vue.component("hiWorld",hiWorld)



// 导入js-cookie插件 并且注册到vue的原型中 以后可以通过vue实例 this直接访问$jsCookie
import Cookies from 'js-cookie'
Vue.prototype.$jsCookie=Cookies

// 新建Vue实例 bus作为事件总线 将bus注册到vue的原型中 以后在vue的实例中就可以直接使用this.$bus
let bus=new Vue()
Vue.prototype.$bus=bus


// 根据VUE实例
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
