<template>
  <div class="classDiv">
    <header class="header">
      <div class="div_fenlei">
        <router-link to="/classification/fenlei" class="a_fenlei">
          <span class="active">分类</span>  <!--:style="{color:flColor}"-->
        </router-link>
        <!--<a href="javascript:;" class="a_fenlei" @click="changeColor">-->
        <!--</a>-->
      </div>
      <div class="div_pinpai">
        <router-link to="/classification/pinpai" class="a_pinpai">
          <span class="active">品牌</span> <!--:style="{color:ppColor}"-->
        </router-link>
        <!--<a href="javascript:;" class="a_pinpai" @click="changePP">-->
          <!--<span :style="{color:ppColor}">品牌</span>-->
        <!--</a>-->
      </div>
      <a href="https://wap.epet.com/search.html?pet_type=dog&fw=0">
        <img src="../../common/img/classification/search.png" class="search" >
      </a>

    </header>
    <router-view/>
    <!--<div class="fenlei" id = "fenlei" v-show="isHide">-->
      <!--<fenlei />-->
    <!--</div>-->

    <!--<div class="pinpai" id="pinpai" v-show="isShow">-->
      <!--<pinpai />-->
    <!--</div>-->
  </div>

</template>

<script>
  import fenlei from '../fenlei/fenlei.vue'
  import pinpai from '../pinpai/pinpai.vue'

  export default{

    components : {
      fenlei,
      pinpai
    },

    data(){
        return{
//          flColor : 'red',
//          ppColor : '',
//          isHide : true,
//          isShow : false
        }
    },

    methods : {
//      changeColor(){
//          this.flColor = 'red'
//          this.ppColor = ''
//
//
//        this.isShow = false
//        this.isHide = true
//      },
//      changePP(){
//        this.flColor = ''
//        this.ppColor = 'red'
//
//        this.isShow = true
//        this.isHide = false
//      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.classDiv
  height 40px
  .header
    background-color #fff
    height: 40px
    text-align center
    line-height 40px
    font-size 14px
    position fixed
    left 0px
    right 0px
    top: 0px
    border-bottom 1px solid #cbcbcb
    z-index 500
    .div_fenlei
      width:50%
      height: 40px
      line-height 40px
      font-size: 13px
      float left
      text-align right
      padding-right 5%
      .a_fenlei span
        font-weight bold
      .router-link-active span
        color: #f00
      /*.a_fenlei span.active*/
        /*color : red*/
    .div_pinpai
      width 50%
      height 40px
      line-height 40px
      font-size 13px
      float left
      text-align left
      padding-left 5%
      .a_pinpai span
        font-weight bold
      .router-link-active span
        color: #f00
    & a
      position relative
      overflow hidden
      .search
        width: 14px
        height: 14px
        position absolute
        top 13px
        right: 15px
    .fenlei
      margin-top 40px
    .pinpai
      margin-top 40px
</style>
