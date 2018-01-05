<template>
  <div>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/homepage">
          <img src="./common/img/bottom/page1.png" />
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/classification">
          <img src="./common/img/bottom/page2.png" />
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/shoppingcart">
          <img src="./common/img/bottom/page3.png" />
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/mypet">
          <img src="./common/img/bottom/page4.png" />
        </router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import axios from 'axios'
  import homepage from './page/homepage/homepage.vue'
  export default {
    components:{
      homepage
    },



    mounted(){
//      axios发送ajax请求(使用mock测试数据)
//      axios.get("/api/menus")
//        .then(response => {
//          const result = response.data
//          console.log(result)
//        })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .tab
    position fixed
    bottom 0px
    left 0px
    width 100%
    height 50px
    line-height 50px
    z-index 12
    background #fff
    .tab-item
      float left
      width 25%
      height 50px
      text-align center
      font-size 14px
      & img
        width 45%
        height 40px
    .active
      color: #f00
</style>
