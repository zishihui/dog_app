<template>
  <div>
    <!--头部-->
    <div class="war-top-bar">
      <!--顶层的头部-->
      <header class="head-top">
        <a href="javascript:void(0)" class="aback" @click="backFun"></a>
        <span class="topbar-title ft18" >购物车</span>
        <span class="pull-right" @click="toggleShow"></span>
      </header>
      <!--头部下隐藏的div-->
        <div class="header-quick" ref="quick" >
        <a href="https://wap.epet.com/main.html?pet_type=dog">
          <span class="icon1"></span>
          <p>首页</p>
        </a>
        <a href="https://wap.epet.com/category.html">
          <span class="icon2"></span>
          <p>商品分类</p>
        </a>
        <a href="https://wap.epet.com/cart/">
          <span class="icon3">
            <em>0</em>
          </span>
          <p>购物车</p>
        </a>
        <a href="https://wap.epet.com/user/UserCenter.html">
          <span class="icon4"></span>
          <p>我的e宠</p>
        </a>
      </div>

    </div>

    <!--头部以下购物车部分-->
    <!--<transition name="headerQuick">-->
    <div class="CartBox">
      <div class="mycart">
        <div>
          <span class="u-emtcoupon"></span>
        </div>
        <div class="emttip">购物车是空的</div>
        <div class="mt15">
          <router-link to="/homepage" class="goShoping">去逛逛</router-link>
          <router-link to="" class="myCollection">我的收藏</router-link>
          <!--<a :href="" class="goShoping">去逛逛</a>-->
          <!--<a href="" class="myCollection">我的收藏</a>-->
        </div>
      </div>
    </div>
    <!--</transition>-->
  </div>
</template>

<script>
  export default{

    data(){
      return{
        isShow : false
      }
    },
    methods : {
      //重新定位到首页
      backFun(){
        window.location = '/'
      },

      //显示隐藏切换
      toggleShow() {
          if(!this.isShow){
            this.$refs.quick.style.marginTop = '0px'
            this.isShow = true;
          } else {
            this.$refs.quick.style.marginTop = '-64px'
            this.isShow = false;
          }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .war-top-bar
    box-sizing border-box
    display block
    .head-top
      height 50px
      line-height 50px
      text-align center
      background-color #ffffff
      border-bottom 1px solid #f3f3f3
      position relative
      z-index 100
      .aback
        display inline-block
        background url("../../common/img/shopping/personal-bico1.png") no-repeat
        background-size 9px 17px
        width: 22px
        height 20px
        position absolute
        left 10px
        top: 15px
      .pull-right
        position absolute
        top: 14px
        right: 10px
        background url("../../common/img/shopping/imgtk-new.png") no-repeat
        background-size 20px 20px
        width: 20px
        height: 20px


    .header-quick
      display block
      box-sizing border-box
      background-color #ffffff
      width:100%
      border-bottom 1px solid #d7d7d7
      overflow hidden
      margin-top -64px
      transition margin-top .5s

      /*&.headerQuick-enter-active,&.headerQuick-leave-active
        transition all .5s
      &.headerQuick-enter,&.headerQuick-to
        transform:translateY(10px)*/
      & a
        display inline-block
        width:25%
        text-align center
        float left
        margin-top 10px
        margin-bottom 10px
        & span
          height 25px
          display block
          margin-bottom 3px
        .icon1
          background url("../../common/img/shopping/head_icon1.png") 50% 0 no-repeat
          background-size auto 100%
        .icon2
          background url("../../common/img/shopping/head_icon2.png") 50% no-repeat
          background-size auto 100%
        .icon3
          background url("../../common/img/shopping/head_icon4.png") 50% no-repeat
          background-size auto 100%
          &>em
            background #ff0000
            border-radius 50%
            height 18px
            width 18px
            display inline-block
            color #ffffff
            text-align center
            line-height 18px
            border #fff solid 2px
            position relative
            top: -8px
            left: 10px
            vertical-align: middle
            font-style: normal
        .icon4
          background url("../../common/img/shopping/head_icon5.png") 50% no-repeat
          background-size auto 100%
        & p
          font-size: 14px
          color: #666
          text-align center
  .CartBox
    box-sizing border-box
    .mycart
      padding 50px
      background-color #fff
      text-align center
      & .u-emtcoupon
        background url("../../common/img/shopping/cart-ico.png") no-repeat 0 -160px
        background-size 105px auto
        display inline-block
        width 100px
        height 100px


      .emttip
        font-size 16px
        margin-top 20px
        color: #dbdbdb
        text-align center

      .mt15
        margin-top 15px
        .goShoping
          display inline-block
          text-align center
          color #999
          font-size:16px
          border 1px solid #999
          width 100px
          height 40px
          line-height 40px
          border-radius 5px
          margin-right 5px
        .myCollection
          display inline-block
          width: 100px
          height 40px
          line-height 40px
          text-align center
          font-size 16px
          border:1px solid #999
          color: #999
          border-radius 5px
</style>
