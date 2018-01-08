<template>
  <div class="brand-list" ref="brandList">
    <div>
      <div class="wrapper" v-for="(pp,index) in ppData" :key="index">
        <split/>
        <div class="title">
          <span>{{pp.title}}</span>
        </div>
        <div class="list">
          <ul class="clearfix">
            <li class="fl" v-for="(liData,index) in pp.list">
              <a href="https://wap.epet.com/brand/bd14.html?fw=0">
                <div class="img">
                  <img :src="liData.logo" class="image">
                </div>
                <p class="name">{{liData.name}}</p>
                <p class="address">{{liData.address}}</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import split from '../split/split.vue'
  import BScroll from 'better-scroll'

  export default{

    components : {
      split
    },
    computed : {
      ...mapState(['ppData'])
    },
    mounted(){
      this.$store.dispatch('requestPinpai')
//      this._initScroll()

      this.$nextTick(() => {
        if(!this.scroll){
          this.scroll = new BScroll(this.$refs.brandList,{
            click : true,
//            scrollY : true
          })
        } else {
          this.scroll.refresh()
        }
      })
    },

    methods : {
//      _initScroll(){
//        new BScroll(this.$refs.brandList,{
//          click : true//,
////          scrollY : true
//        })
//      }
    }


  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

  .brand-list
    height 577px
    .wrapper
      margin-top 40px
      background #ffffff
      margin-bottom -40px
      .title
        text-align center
        height 30px
        line-height 50px
        & span
          color: #999
          font-size 12px
      .list
        padding 0 5px
        ul
          overflow hidden
          .fl
            margin-top 20px
            width 33.3%
            padding 0 5px
            float left
            font-size 14px
            a
              .img
                border 1px solid #e2e2e2
                text-align center
                padding 50px 10px 10px
                height 50px
                position relative
                img
                  display block
                  position absolute
                  top 0px
                  left: 0px
                  right 0
                  max-width 90%
                  margin: 10px auto 0
                  height 40px
              .name
                height 20px
                line-height 20px
                text-overflow ellipsis
                overflow hidden
                white-space nowrap
                text-align center
                margin-top 5px
                font-size 13px
              .address
                color: #999
                font-size 12px
                text-align center
                height 20px
                line-height 20px
                overflow hidden
                white-space nowrap
                text-overflow ellipsis



</style>
