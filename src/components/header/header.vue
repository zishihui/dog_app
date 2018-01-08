<template>
  <div class="headerClass">
    <!--下载信息头部-->
    <div class="overflow xiazaiApp" v-show="isShow">
      <div class="overflow rela">
        <span class="clsoebtn" @click="toggleShow($event)">
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

      <!--切站点小狗-->
      <div class="switchtype">
        <!--小狗-->
        <div class="go-dog" @click="show_pop"></div>
        <!--遮罩层-->
        <div class="changepop" ref="pop" > <!--v-show="isHide"-->
          <div class="cartc-box">
            <div class="main">
              <p class="dog_p">
                {{msg[1].en_name}}
                <b class="b-line">▁</b>
              </p>
              <p class="honey_p">亲爱的小主</p>
              <p class="in_p">
                您即将进入<span :style="{color:msg[1].color}">{{msg[1].ch_name}}</span>
              </p>
              <ul class="change-ul">
                <li type="dog" class="dot_li" @click="changeL">
                  <img :src="msg[0].logo">
                  <div class="pet1name">
                    {{msg[0].ch_name}}
                  </div>
                </li>
                <li type="cat" class="cat_li" >
                  <img :src="msg[1].logo">
                  <div class="pet2name">
                    {{msg[1].ch_name}}
                  </div>
                  <b class="current-line">▁</b>
                  <a href="javascript:;" :style="{background:msg[1].color}" class="once-into" @click="ljjrFun">
                    立即进入
                  </a>
                </li>
                <li type="fish" class="fish_li" @click="changeR">
                  <img :src="msg[2].logo" >
                  <div class="pet3name">
                    {{msg[2].ch_name}}
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <a href="javascript:;" class="cartc-close" @click="show_pop">
            <img src="../../common/img/header/close2.png">
          </a>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
  //  import axios from 'axios'
  import {mapState} from 'vuex'
  import PubSub from 'pubsub-js'

  export default{
    data () {
      return {
        isShow : true,
        isHide : false,
        msg : [
          {
            en_name : 'DOG',
            ch_name : '狗狗站',
            color : '#4e9a36',
            logo : require('../../common/img/header/change-dog.png')
          },
          {
            en_name : 'CAT',
            ch_name : '猫猫站',
            color : '#e74186',
            logo : require('../../common/img/header/change-cat1.png')
          },
          {
            en_name : 'FISH',
            ch_name : '水族站',
            color : '#039ddf',
            logo : require('../../common/img/header/change-fish.png')
          },
        ]

      }
    },

    computed : {
      //获取vuex中管理的menu数据
      ...mapState(['menus'])
    },

    mounted(){
      this.$store.dispatch('requestMeuns')
    },

    methods : {
      //头部下载显示和隐藏
      toggleShow(event){
        this.isShow = !this.isShow

        //发布消息
        PubSub.publish('hideTop', event.target)
      },

      //dog切换
      show_pop(){
          this.isHide = !this.isHide

          if(this.isHide){
            this.$refs.pop.style.transform = 'scale(1,1)'
            this.$refs.pop.style.opacity = '1'
          } else {
            this.$refs.pop.style.transform = 'scale(0,0)'
            this.$refs.pop.style.opacity = '0'
          }

      },

      //左侧切换
      changeL(){
        let msg1 = this.msg[0]
        let msg2 = this.msg[1]

        this.msg.splice(0,1,msg2)
        this.msg.splice(1,1,msg1)
      },

      //右侧切换
      changeR(){
        let msg3 = this.msg[2]
        let msg2 = this.msg[1]

        this.msg.splice(1,1,msg3)
        this.msg.splice(2,1,msg2)
      },

      //立即进入
      ljjrFun(){
        window.location = '/'
      }
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


      .switchtype
        .go-dog
          position fixed
          right: -1px
          bottom 15%
          background url("../../common/img/header/gocat.png") no-repeat
          background-size 80px auto
          width: 41px
          height: 46px
          animation dog 1s steps(2) infinite
        .changepop
          height:100%
          width 100%
          position fixed
          top:0
          left:0
          z-index 104
          background-color #fff
          opacity 0
          transition all .5s linear
          transform scale(0,0)
          .cartc-box
            width:100%
            top: 107px
            left 0px
            position fixed
            z-index 102
            border-radius 5px
            .main
              max-width 640px
              margin auto
              .dog_p
                text-align center
                color: #999
                font-size: 16px
                position relative
                height 25px
                .b-line
                  position: absolute;
                  left 0px
                  bottom -4px
                  width:100%
                  color #000
                  font-size: 12px
                  font-weight 400
              .honey_p
                font-size 20px
                text-align center
                color #666
                margin-top 20px
              .in_p
                font-size 20px
                color #333
                text-align center
                margin-top 10px
              .change-ul
                text-align center
                margin-top 35px
                min-width 305px
                padding-left 10%
                height 260px
                overflow hidden
                .dot_li
                  width:25%
                  float left
                  margin-top 25%
                  text-align center
                  & img
                    max-width:70%
                  .pet1name
                    margin-top 5px
                    font-size: 12px
                    color: #999
                .cat_li
                  width:40%
                  float left
                  margin-top 14%
                  text-align center
                  position relative
                  & img
                    max-width 80%
                  .pet2name
                    margin-top 5px
                    text-align center
                  .current-line
                    font-weight 400
                    position absolute
                    top: -50px
                    left: 0px
                    text-align center
                    width 100%
                    font-size 12px
                    color #000
                  .once-into
                    display inline-block
                    margin-top 30px
                    color #eee
                    border-radius 30px
                    width:100px
                    font-size 12px
                    padding 3px 15px
                    text-align center
                    cursor pointer
                .fish_li
                  width 25%
                  float left
                  text-align center
                  margin-top 25%
                  & img
                    max-width 70%
                  .pet3name
                    margin-top 5px
                    color: #999
                    font-size 12px
          .cartc-close
            display block
            width 100%
            height 40px
            line-height 50px
            border-top 1px solid #e7e7e7
            position fixed
            bottom 20px
            left 0px
            z-index 103
            text-align center
            & img
              width: 23px


  /*display list-item*/

  /*transition all .4s linear 0s*/



  @keyframes dog
    from {
      background-position 0% 0%
    }
    to {
      background-position 210% 0%
    }
</style>
