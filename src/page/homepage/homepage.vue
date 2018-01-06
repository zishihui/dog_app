<template>
  <div>
    <homeHeader />

    <!--scroll竖向滑屏-->
    <scroller>
      <div ref="homePage">
        <!--轮播-->
        <div>
            <mt-swipe :auto="4000" class="luobo" ref="luobo" :style="{marginTop : marginTop}">
              <mt-swipe-item v-for="(lunbo,index) in carousel" :key="index">
                <img :src="lunbo.image">
              </mt-swipe-item>
            </mt-swipe>
        </div>

        <!--轮播下面的图片列表-->
        <div class="columnnavdiv">
          <div>
            <ul class="clearfix hottype pt10 pb10">
              <li class="fl" v-for="(arrObj, index) in items" :key="index">
                <a :href="arrObj.target.param">
                  <!--<img :src="arrObj.image">-->
                  <img v-lazy="arrObj.image" alt="">
                </a>
              </li>
            </ul>
          </div>
        </div>
        <!--新人专享-->
        <div class="banner_item">
          <a href="https://sale.epet.com/m/1706/newWelfare.html?pet_type=cat&fw=0">
            <img src="../../common/img/banner_item/banner_item.gif">
          </a>
        </div>
        <!--每日疯抢-->
        <div class="surprise_day">
          <!--疯抢头部-->
          <div class="suprice">
            <div class="surprise-tit clearfix pad10 overflow">
              <div class="fl titimg">
                <img src="../../common/img/surprise/suprice.png" >
              </div>
              <div class="fl ft13 ml10">距本场结束</div>
              <div class="time ft12 dtime">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div class="more">
                <a href="https://wap.epet.com/surprise/Main.html?pet_type=cat&fw=0" class="db ftr">
                  <img src="../../common/img/surprise/more.png" >
                </a>
              </div>
            </div>
          </div>

          <!--ul列表-->
          <div class="suprice-pro pl5 mb10" >
            <div class="swiper-container surprise-scroll swiper-container-horizontal" ref="supericDiv">
              <div class="swiper-wrapper" >

                <div class="swiper-slide swiper-slide-active" v-for="(msinfo, index) in seckill.goods" :key="index">
                  <div class="pro-block">
                    <a href="https://wap.epet.com/surprise/Main.html?pet_type=cat&fw=0">
                      <div class="thispro-img loadimg-nofixed">
                        <img :src="msinfo.image.image" >
                      </div>
                      <div class="cred ftc mt5">
                        <span class="ft12">￥</span><span class="ft17">{{msinfo.sale_price}}</span>
                      </div>
                      <p class="c999 ftc ft12">{{msinfo.little_price}}</p>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <!--生活品质背景图-->
        <div class="divimg" style="width: 100%">
          <a href="javascript:;" class= "default_bg" style="height: 30.5px;">
            <img src="../../common/img/default-bg/default-gb.jpg" >
          </a>
        </div>
        <div style="height: 140px"></div>
      </div>
    </scroller>

  </div>
</template>

<script>
  //import Swiper from 'swiper'
  // import 'swiper/dist/css/swiper.css'
  import header from '../../components/header/header.vue'

  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  import PubSub from 'pubsub-js'

  export default{
    /*引入header组件*/
    components : {
      'homeHeader' : header
    },
    computed : {
      ...mapState(['items','carousel','seckill'])
    },
    data(){
      return {
        marginTop : ''
      }
    },
    mounted(){
      let sss = this
      //横向滑屏
      this._initScroll()

      //发送请求获取轮播数据
      this.$store.dispatch('requestItems')
      this.$store.dispatch('requestCarousel')
      this.$store.dispatch('requestMiaoSha')

      //订阅消息
      PubSub.subscribe('hideTop', (msg, startEl) => {
        sss.marginTop = '90px';
      })
    },
    methods : {
      _initScroll(){
        this.picsScroll = new BScroll(this.$refs.supericDiv, {click : true, scrollX: true})


//        this.$nextTick(() => {
//          if (!this.scroll) {
//            console.log('2')
//            this.scroll = new BScroll(this.$refs.homePage, {scrollY : true ,click: true})
//
//          } else {
//            console.log('3')
//            this.scroll.refresh()
//          }
//        })
      }
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  img
    vertical-align middle

  .homepage
    /*&.topScroll-enter-active,&.topScroll-leave-active*/
      /*transition margin-top .5s*/
    /*&.topScroll-enter,&.topScroll-leave-to*/
      /*margin-top 95px*/
    .luobo
      width 100%
      height 160px
      margin-top 140px
      transition margin-top .5s
      img
        width 100%
        height:100%


    .columnnavdiv
      overflow hidden
      .hottype
        li
          width:20%
          float left
          & a img
            width:100%
            display block

    .banner_item
      margin-top 10px
      & img
        width:100%
        display block

    .surprise_day
      background #ffffff
      .suprice
        overflow hidden
        /*margin-top 5px*/
        .surprise-tit
          position relative
          overflow hidden
        .pad10
          padding 10px
          .fl
            float left
            img
              height 24px
              display block

          .ft13
            font-size:13px
          .ml10
            margin-left 10px
            margin-top 2px
          .dtime
            overflow hidden
          .more
            position absolute
            top: -1px
            right -8px
            .db
              display block
            .ftr
              text-align right
            & img
              width 50%
              text-align center
      /*vertical-align middle*/
      .pl5
        padding-left 5px
      .mb10
        margin-bottom 10px
        margin-top 5px
        .swiper-container
          width:100%
          height:100%
          margin 0 auto
          position relative
          overflow hidden
          /*z-index 1*/
          .swiper-wrapper
            width 235%
            /*overflow hidden*/
            position relative
            white-space nowrap
            .swiper-slide
              width: 98px
              margin-right 10px
              display inline-block

              & img
                width:100%
                display block
              & span
                color #f00
                display inline-block
                font-size 11px
              & span:first-child
                font-size 11px
              & .ftc
                text-align center
                font-size:0
              & .mt5
                margin-top 5px
              & .c999
                font-size 12px
                margin-top 4px


    .divimg
      margin-bottom 50px

      & img
        width:100%
</style>
