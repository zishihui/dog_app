<template>
  <div class="headerClass">
    <div class="overflow xiazaiApp">
      <div class="overflow rela">
        <span class="clsoebtn">
          <img id="close_down_bar" src="../../common/img/header/closebtn_03.png">
        </span>
        <div class="appdowimg">
          <a href="http://wap.epet.com/download.html?appname=epetmall">
            <img src="../../common/img/header/xiazaiApp.jpg">
          </a>
        </div>
      </div>
    </div>
    <!--头部信息-->
    <div class="indexheader">
      <div class="indexnavcon">
        <div class="headerbox float-div" style="top: 94px;">
          <div class="main">
            <!--头部上半部-->
            <div class="clearfix pt5 pl10 pr10 pb5">
              <div class="epet-search bgf">
                <div class="fl rela ft14 location">
                  <a href="http://wap.epet.com/place.html?pet_type=cat&fw=0">
                    <span class="catordog c89">猫猫站</span>
                    <span class="c89">|</span>
                    <span data-name="my-place" class="myposition c89 ft13">重庆</span>
                    <i></i>
                  </a>
                </div>
                <p class="search-text">
                  <a href="http://wap.epet.com/search.html?pet_type=cat&fw=0">
                    <input type="search" placeholder="搜索商品和品牌">
                    <span class="eico search-ico"></span>
                  </a>
                </p>
                <a href="http://wap.epet.com/wappms/pms.html?fw=0" class="epet-category">
                  <img src="../../common/img/header/mydope.png">
                </a>
              </div>
            </div>
            <!--导航条-->
            <div class = find_nav>
              <div class="find_nav_left dscroll">
                <div calss="find_nav_list dscroll-div" style="width: 140%">
                  <ul class="dscroll-ul">
                    <li class="dscroll-li" style="width: 74.5px; text-align: center" v-for="(menu,index) in menus" :key="index">
                    <!--<li class="dscroll-li" style="width: 74.5px; text-align: center" v-for="(menu,index) in navName" :key="index">-->

                    <!--<li :class="{dscrollLi,myClass}" style="width: 74.5px;" v-for="(name,index) in navName" :key="index" v-if="index === 0 ? myClass : ''" >-->
                      <a href="http://wap.epet.com/main.html?menu_param=0&pet_type=dog&fw=0">
                        <span class="rela">
                          <span>
                            {{menu.menu_name}}
                            <!--{{menu}}-->
                          </span>
                          <i></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
//  import axios from 'axios'
  import {mapState} from 'vuex'

  export default{
    data () {
      return {
        navName : ['首页','服饰城','狗狗主粮','医疗保健','零食玩具','日用外出','美容香波']
      }
    },


    computed : {
        //获取vuex中管理的menu数据
      ...mapState(['menus'])
    },

    mounted(){
        this.$store.dispatch('requestMeuns')
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  /*.overflow*/
  /*overflow hidden !important*/
  a
    text-decoration none
    -webkit-tap-highlight-color rgba(0,0,0,0)
  img
    vertical-align middle
  ul
    list-style none

.headerClass
  position fixed
  top:0
  left 0px
  right 0px
  z-index 200
  .xiazaiApp
    max-width 640px
    margin 0 auto
    background rgba(61,61,61,1)
    color: #fff
    position: relative
    z-index 102
    .rela
      position relative
      .clsoebtn
        position: absolute
        left:2%
        top:20%
        width:5%
        display inline-block
        vertical-align middle
        margin-right 2%
        & > img
          height 100%
          width:100%
      & > appdowimg a
        color #333
      .appdowimg
        a
          img
            width 100%
  .indexheader
    max-width 640px
    margin auto
    .indexnavcon
      height: 86px
      background : #ffffff
      .headerbox
        .main
          max-width: 640px
          margin auto
          .pl10
            padding-left 10px
          .pb5
            padding-bottom 5px
          .pr10
            padding-right 10px
          .pt5
            padding-top 5px
            .epet-search
              padding 8px 0
              text-align center
              display -webkit-box
              -webkit-box-align center
              width:100%
              .rela
                position relative
              .location
                margin-right 20px
              .ft14
                font-size 14px
                & > a
                  color #333
                  .c89
                    color: #898989
                  .ft13
                    font-size 13px
                & > a i
                  border-width 4px
                  position absolute
                  top: 10px
                  right: -11px
                  font-size 0px
                  line-height 0px
                  border-style solid solid dotted
                  border-color #898989 transparent transparent
              .search-text
                position relative
                -webkit-box-flex 1
                & > a
                  color #333
                  & > input
                    width:100%
                    border:0
                    height: 25px
                    background #e9e9e9
                    border-radius 4px
                    color: #bcbcbc
                    text-indent 10px
                    font-size 13px
                    outline 0px
                  & > .eico
                    background url("../../common/img/header/search.png")
                    background-size 11px auto
                  & span
                    width: 11px
                    height: 11px
                    position absolute
                    right 5px
                    top: 0px
                    bottom: 0px
                    margin auto 0
                    background-position 0 0

              .epet-category
                display block
                color #333333
                & > img
                  width: 25px
                  margin-left 10px
        .find_nav
          width:100%
          height: 35px
          min-width: 320px
          .dscroll
            overflow-x:auto
            overflow-y: hidden
            .dscroll-div
            .dscroll-ul
              white-space nowrap
              display flex
              .dscroll-li
                float left
                position relative
              .dscroll-li:first-child a span
                color: #459d36
              .dscroll-li:first-child a i
                background: #459d36
                & > a i
                  position absolute
                  bottom 1px
                  left 25%
                  width:50%
                  height: 2px
                /*&.on a span*/
                  /*color: #459d36*/
                /*&.on a i*/
                  /*background #459d36*/
                & > a
                  display block
                  width:100%
                  height:100%
                  line-height 36px
                  font-size 14px
                  text-align center
                  color: #666


</style>
