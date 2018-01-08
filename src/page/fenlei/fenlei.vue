<template>
  <div class="kindbox" >
    <div class="leftbox" ref="leftBox">
      <div>
        <ul>
          <li class="flleft_li" v-for="(leftLi , index) in flLeftData" :key="index"  @click="changeStyle(leftLi.cateid,$event)">
            {{leftLi.name}}
          </li>
        </ul>
      </div>
    </div>
    <div class="rightBox" ref="rightBox">
      <div class="sort-detail-list">
        <div class="sort-recom" v-for="(data,index) in cateList" :key="index">
          <div class="hot-recom">
            <a href="javascript:;" class="right_a">
              {{data.title}}
            </a>
            <ul class="clearfix">
              <li class="right_li" v-for="(list,index) in data.list">
                <a href="javascript:;" class="db">
                  <div class="right_div">
                    <img :src="list.photo == undefined ? list.logo : list.photo" class="image">
                  </div>
                  <p class="right_p">{{list.name}}</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'

  export default{
    methods : {
      changeStyle(index,event){
        //获取所有的li
        var liArr = document.getElementsByClassName('flleft_li')
        for (var i = 0; i < liArr.length; i++) {
          var obj = liArr[i];
          obj.className = 'flleft_li none'
        }
        event.target.className = 'flleft_li active'

        //发送请求
        this.$store.dispatch('requestRightDataGgzs',index)
      }
    },
    computed : {
      ...mapState(['flLeftData','cateList'])
    },
    mounted(){
      this.$store.dispatch('requestFlLeft')
      this.$store.dispatch('requestRightDataGgzs',88888)

      this.$nextTick(() => {
          if(!this.leftcroll){
              this.leftcroll = new BScroll(this.$refs.leftBox,{
                  click : true
              })
          } else {
              this.leftcroll.refresh()
          }

        if(!this.rightcroll){
          this.rightcroll = new BScroll(this.$refs.rightBox,{
            click : true
          })
        } else {
          this.rightcroll.refresh()
        }
      })
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

  .kindbox
    margin-top 43px
    .leftbox
      position fixed
      top 40px
      left 0px
      bottom 0px
      padding-bottom 45px
      background #fff
      margin-bottom 40px
      & .flleft_li
        margin-top 1px
        font-size 13px
        width 70px
        height: 50px
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
        padding 15px 0
        text-align center
        border-bottom 1px solid #f3f4f5
      & .flleft_li:first-child
        color #f00
        background #f3f4f5
      & .flleft_li.active
        background #f3f4f5
        color #f00
      & .flleft_li.none
        background #fff
        color #000
    .rightBox
      height 557px
      margin-left 75px
      background #ffffff
      .sort-detail-list
        font-size 14px
        & .hot-recom
          padding 15px 5px 20px
          .right_a
            color: #999
            font-size 12px
            margin-top 10px
            padding-left 5px
          .clearfix
            overflow hidden
            .right_li
              float left
              width 33.333%
              padding 0px 5px
              margin-top 10px
              background #fff
              & .right_div
                position relative
                padding-top 100px
                .image
                  position absolute
                  top 0px
                  left 0px
                  width 100%
              .right_p
                font-size 12px
                height 20px
                text-align center
                margin-top 10px
                overflow hidden
                text-overflow ellipsis
                white-space nowrap
</style>
