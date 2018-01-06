import Vue from 'vue'
import App from './App'
import router from './router'
import svgImage from './components/svg/svg_image.vue'
import { Swipe, SwipeItem } from 'mint-ui'
import store from './store/index'
import VueScroller from 'vue-scroller'
import VueLazyLoad from 'vue-lazyload'
import loading from './common/img/loading/default-epet.png'

import './mock/mockServer'  //加载这个模块即可

//引入组件
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component('svgImage',svgImage)
Vue.use(VueScroller)

//引入图片懒加载
Vue.use(VueLazyLoad,{  //内部会有个全局的指令：lazy
  loading
})

new Vue({
  el: '#app',
  render : h => h(App),
  router,
  store
  // template: '<App/>',
  // components: { App }
})
