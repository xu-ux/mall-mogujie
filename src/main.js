import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/icons/detail/iconfont.css'
import {filterFloat} from '@/common/utils'

// VueScroller
import VueScroller from 'vue-scroller'
Vue.use(VueScroller)

// 信息提示
import toast from 'components/common/toast'
Vue.use(toast)

// 懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  preLoad: 2,
  error: import('./assets/img/common/error.png'),
  attempt: 1
})

// 全局过滤器
Vue.filter('filterPrice', filterFloat)

Vue.config.productionTip = false

// 配置事件总线
Vue.prototype.$bus = new Vue()

// 查看环境配置
// console.log(process.env.NODE_ENV);
// console.log(process.env.VUE_APP_BASE_API);

new Vue({
  router,
  store,
  toast,
  render: h => h(App)
}).$mount('#app')


