<template>
  <div class="appWrap">
    <div class="tab" v-show="isShow">
      <div class="tab-item" @click.stop="refreshIndex()">
        <router-link to="/homepage">
          <!--<img src="./common/img/bottom/page1.png" />-->

          <span v-if="$route.path.indexOf('homepage') == -1">  <!--不包括-->
        <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-shouye"></use>
        </svg>
        </span>
          <span v-else>
        <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-shouye-copy"></use>
        </svg>
        </span>
        </router-link>

      </div>

      <div class="tab-item" @click.stop="gotoAddress('/classification')">
        <router-link to="/classification">
          <!--<img src="./common/img/bottom/page2.png" />-->

          <span v-if="$route.path.indexOf('classification') == -1">  <!--不包括-->
        <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-fenlei"></use>
        </svg>
        </span>
          <span v-else>
        <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-fenlei-copy"></use>
        </svg>
        </span>
        </router-link>
      </div>

      <div class="tab-item" @click.stop="gotoAddress('/shoppingcart')">
        <router-link to="/shoppingcart">
          <!--<img src="./common/img/bottom/page3.png" />-->
          <span v-if="$route.path.indexOf('shoppingcart') == -1"> <!--不包括-->
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-icozhuanhuan"></use>
            </svg>
          </span>
          <span v-else>
              <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-icozhuanhuan-copy"></use>
          </svg>

        </span>
        </router-link>
      </div>

      <div class="tab-item" @click.stop="gotoAddress('/mypet')">
        <router-link to="/mypet">
          <!--<img src="./common/img/bottom/page4.png" />-->

          <span v-if="$route.path.indexOf('mypet') == -1">
        <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-wode"></use>
        </svg>
        </span>
          <span v-else>
        <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-wode-copy"></use>
        </svg>
        </span>
        </router-link>
      </div>

    </div>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
  import axios from 'axios'
  import homepage from './page/homepage/homepage.vue'
  export default {

      data(){
          return{
              isShow : true
          }
      },
    components:{
      homepage
    },

    methods : {
      refreshIndex(){
        //获取路由地址并判断
        if(this.$route.path === '/homepage'){
          window.location = '/'
        } else {  //刷新页面
          this.$router.replace('/homepage')
        }
      },

      gotoAddress(path){
          //判断是否为购物车
          if(this.$route.path.indexOf('/shoppingcart') != -1){
            this.isShow = false
          }
        this.$router.replace(path)
      }
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
  /*.active*/
  /*color: #f00*/
</style>
