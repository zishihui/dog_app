<template>
  <div>
    <!--头部-->
    <header>
      <div class="login_bg">
        <div class="head-top">
          <a href="javascript:void(0)" @click="history.go(-1)" class="page-top"></a>
          <div class="zfont">
            <a href="https://wap.epet.com/register.html" class="afff">注册</a>
          </div>
        </div>
        <div class="mlogo">
          <img src="../../common/img/login/logo.png">
        </div>
        <div class="es_por4">
          <ul class="login_style">
            <li class="selectTag4"  @click="ptdlFun">
              <a href="javascript:void(0)">
                普通登录
              </a>
              <i v-show="isPtdl"></i>
            </li>
            <li class="selectTag4" @click="dxdlFun">
              <a href="javascript:void(0)">
                手机动态密码登录
              </a>
              <i v-show="isDxdl"></i>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <!--文本输入层-->
    <div class="bgfff">
      <div class="mformBox">
        <div class="content">
          <form id="login_form" method="post" v-show="isPtdl" class="login_form">
            <ul class="mform">
              <li>
                <span class="mNameIco"></span>
                <input type="text" placeholder="手机号/邮箱/用户名" id="username" name="username" class="text">
              </li>
              <li>
                <span class="mpasswordIco"></span>
                <input type="password" placeholder="输入密码" id="password" name="password" class="text">
              </li>
            </ul>

          </form>
          <form id = 'newLogin_form' method="post" v-show="isDxdl" class="newLogin_form">
            <ul class="mform">
              <li>
                <span class="mNumIco"></span>
                <input type="text" id="phone" name="phone" class="dttext" placeholder="已注册的手机号">
              </li>
              <li>
                <span class="mpasswordIco"></span>
                <input type="text" placeholder="请输入图片内容" class="dttext" id="varify" name="varify">
                <span style="position: absolute; top: 9px; right: 0px">
                  <img src="../../common/img/login/seccode.jpg" >
                </span>
              </li>
              <li>
                <span class="mpasswordIco"></span>
                <input type="text" placeholder="动态密码" class="dttext" id="code" name="code">
                <a href="javascript:;" class="get_phonepass">获取动态密码</a>
              </li>
            </ul>
          </form>
        </div>
      </div>
      <div class="wjmmDiv">
        <a href="javascript:void(0)" class="a_wjmm">忘记密码？</a>
      </div>
      <div class="loginbtn">
        <a href="javascript:void(0)" class="btn-login">
          登&nbsp;&nbsp;&nbsp;&nbsp;录
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        isPtdl : true,
        isDxdl : false
      }
    },

    methods : {
      ptdlFun(){
        this.isPtdl = true
        this.isDxdl = false
      },

      dxdlFun(){
        this.isPtdl = false
        this.isDxdl = true
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .login_bg
    background url("../../common/img/login/bg-login.png") no-repeat
    background-size 100% 100%
    .head-top
      position relative
      height 50px
      line-height 50px
      padding 0 6px
      text-align center
      .page-top
        background url("../../common/img/login/personal-bico3.png") no-repeat
        background-size 12px 17px
        position absolute
        left 10px
        width: 22px
        height: 20px
        margin-top 16px
      .zfont
        position absolute
        right 10px
        top 0px
        .afff
          color #ffffff
    .mlogo
      padding 10px 0 20px 0
      text-align center
      img
        width 20%


    .es_por4
      background rgba(255,255,255,0.3)
      .login_style
        overflow hidden
        .selectTag4
          float left
          width 50%
          height 44px
          text-align center
          line-height 44px
          position relative
          & a
            color #ffffff
          & i
            position absolute
            bottom 0px
            left 0px
            right: 0px
            font-style normal
            /*background red*/
            width 0px
            height 0px
            margin auto
            border-left: 10px solid transparent
            border-right: 10px solid transparent
            border-bottom: 10px solid #fff
  .bgfff
    background #fff
    .content
      padding 10px 20px
      .login_form
        .mform li
          border-bottom #e2e2e2 solid 1px
          padding 12px 0px 12px 30px
          .mNameIco
            display inline-block
            vertical-align middle
            background url("../../common/img/login/ico3.png") no-repeat
            background-size contain
            width 17px
            height 21px
            margin: 1px 0 0 -25px;
          .mpasswordIco
            background url("../../common/img/login/ico4.png") no-repeat
            background-size contain
            width 17px
            height: 21px
            display inline-block
            vertical-align middle
            margin 1px 0 0 -25px
          .text
            opacity .3
      .newLogin_form
        .mform li
          border-bottom #e2e2e2 solid 1px
          padding 12px 0px 12px 30px
          overflow hidden
          position relative
          .mNumIco
            background url("../../common/img/login/ico1.png") no-repeat
            background-size contain
            vertical-align middle
            width: 17px
            height 21px
            display inline-block
            margin 1px 0 0 -25px
          .mpasswordIco
            background url("../../common/img/login/ico4.png")
            background-size contain
            vertical-align middle
            width: 17px
            height 21px
            display inline-block
            margin 1px 0 0 -25px
          .dttext
            opacity .3
          .get_phonepass
            display inline-block
            border 1px solid #f00
            border-radius 3px
            width:100px
            color: #f00
            padding 8px 0px
            font-size 12px
            text-align: center;
            position: absolute;
            right: 0;
            top: 8px;
    .wjmmDiv
      text-align center
      overflow hidden
      padding 1px 20px
      .a_wjmm
        color #898989
        font-size 14px
        float right
        margin-bottom 2px
    .loginbtn
      text-align center
      padding 10px 20px
      .btn-login
        display block
        border-radius 5px
        font-size 15px
        padding 10px 0
        text-align center
        background-color #2ec975
        margin 2px
        color #ffffff


</style>
