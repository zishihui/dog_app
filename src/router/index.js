import Vue from 'vue'
import VueRouter from 'vue-router'

//引入路由组件
import classification from '../page/classification/classification.vue'
import homepage from '../page/homepage/homepage.vue'
import mypet from '../page/mypet/mypet.vue'
import shoppingcart from '../page/shoppingcart/shoppingcart.vue'
import fenlei from '../page/fenlei/fenlei.vue'
import pinpai from '../page/pinpai/pinpai.vue'

//引入路由组件，会按需加载
// const classification = () => import('../page/classification/classification.vue')
// const homepage = () => import('../page/homepage/homepage.vue')
// const mypet = () => import('../page/mypet/mypet.vue')
// const shoppingcart = () => import('../page/shoppingcart/shoppingcart.vue')

// import HelloWorld from '@/components/HelloWorld'
Vue.use(VueRouter)


export default new VueRouter({
  // mode : 'history', //路径不带#号
  // linkActiveClass : 'active',  //指定选中的路由链接的class
  routes : [
    {
      path : '/',
      redirect : '/homepage'
    },
    {
      path : '/homepage',
      component : homepage//,
      // meta: {keepAlive: true, isShow: true}
    },
    {
      path : '/classification',
      component : classification,
      children : [
        {
          path : '',
          redirect: 'fenlei'
        },
        {
          path : 'fenlei',
          component : fenlei
        },
        {
          path : 'pinpai',
          component : pinpai
        }
      ]
    },
    {
      path : '/mypet',
      component : mypet//,
      // meta: {keepAlive: true, isShow: true}
    },
    {
      path : '/shoppingcart',
      component : shoppingcart//,
      // meta: { isShow: false}
    }
  ]
})
