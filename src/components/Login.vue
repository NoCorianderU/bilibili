<template>
  <div class="loginBox">
    <header class="container">
      <HeadNavB></HeadNavB>
    </header>
    <div class="login clearfix">
      <h3>登录</h3>
      <div class="loginForm fr">
        <input type="text" name="username" placeholder="你的手机号/邮箱" v-model="username" :class="['longType', {'errorTip': requireUsername || errorUsername}]" @keyup="sortUsername">
        <span class="tipIcon" v-if="errorUsername"></span>
        <span class="inputTip" v-if="requireUsername">请输入注册时用的邮箱或者手机号呀</span>
        <input type="password" name="password"  placeholder="密码" v-model="password" :class="['longType', {'errorTip': requirePassword || errorPassword}]" @keyup="sortPassword">
        <span class="tipIcon pwTip" v-if="errorPassword"></span>
        <span class="inputTip" v-if="requirePassword">喵，你没输入密码么？</span>
        <section class="remember">
          <label><input type="checkbox" v-model="setCookies">记住我<span>不是自己的电脑上不要勾选此项</span></label>
        </section>
        <section class="account">
          <a href="javascript:;">无法验证?</a><a href="javascript:;">忘记密码?</a>
        </section>
        <span class="loginError" v-if="loginTest">用户名或密码错误</span>
        <a href="javascript:;" class="loginBtn" @click="login">登录</a>
        <a href="/register/phone" class="registerBtn">注册</a>
        <a href="javascript:;" class="weibo">微博账号登录</a>
        <a href="javascript:;" class="tencent"><span></span>QQ账号登录</a>
      </div>
      <div class="loginLeft">
        <div class="app"></div>
        <i class="tv"></i>
        <img src="../images/er.png" alt="">
      </div>
      <div class="appLink fl">
        <p>扫描二维码登录</p>
        <div class="appTips">
          <span>请使用 <a href="javascript:;">哔哩哔哩客户端</a></span>
          <span>扫码登录</span>
          <span>或扫码下载APP</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeadNavB from "@/components/HeadNavB"
import axios from 'axios'
import { setCookie } from '../utils.js'

export default {
  components: {
    HeadNavB
  },
  data() {
    return {
      username: '',
      requireUsername: false,
      errorUsername: false,
      password: '',
      requirePassword: false,
      errorPassword: false,
      loginTest: false,
      setCookies: false
    }
  },
  watch: {
    username () {
      console.log(1)
    }
  },

  methods: {
    sortUsername () {
      if(this.loginTest) {
        this.requirePassword = false
        this.errorPassword = false
        this.password = ''
      }
      this.loginTest = false
      this.requireUsername = false
      this.errorUsername = false
    },

    sortPassword () {
      this.loginTest = false
      this.requirePassword = false
      this.errorPassword = false
    },

    async login () {
     let { username, password } = this
      if(username.length === 0) {
        this.requireUsername = true
        this.errorUsername = true
        if(password.length === 0) {
          this.requirePassword = true
          this.errorPassword = true
        }
        return
      }
      if(password.length === 0) {
        this.requirePassword = true
        this.errorPassword = true
        if(username.length === 0) {
          this.requireUsername = true
          this.errorUsername = true
        }
        return
      }
      let res = await axios({
        url: 'http://localhost:3000/login',
        method:'post',
        params: {
          username,
          password
        }
      })
      if(res.data.code === 1) {
        if (this.setCookies) {
          setCookie('user', username, 14)
        } else {
          this.$store.dispatch('requestUserInfo', { user: username })
        }
        this.$router.push('/')
      }
      if(res.data.code === 2) {
        this.loginTest = true
        this.errorUsername = true
        this.errorPassword = true
      }
      if(res.data.code === 3) {
        this.loginTest = true
        this.errorUsername = true
        this.errorPassword = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
h3{
  position: relative;
  font-size: 38px;
  color: #45484D;
  font-weight: normal;
  text-align: center;
  margin-top: -2px;
  margin-bottom: 16px;
  &::before{
    position: absolute;
    top: 27px;
    left: 0;
    content: '';
    width: 432px;
    height: 1px;
    background: #DDD;
  }
  &::after{
    position: absolute;
    top: 27px;
    left: 548px;
    content: '';
    width: 432px;
    height: 1px;
    background: #DDD;
  }
}
a{
  color: #00A0D8;
  &:hover{
    color: #F45D90;
  }
}
.loginBox {
  margin-top: 42px;
  border-top: 86px solid #00A0D8;
  margin-bottom: 46px;
  .login {
    margin: -128px auto 0;
    width: 980px;
    padding-top: 109px;
    background: url('../images/zhuce.png') no-repeat center top;
    .loginLeft{
      position: relative;
      width: 480px;
      height: 192px;
      &:hover{
        .app {
          opacity: 1;
        }
        .tv, img{
          opacity: 0
        }
      }
      .app {
        height: 100%;
        background: url('../images/phone.png') no-repeat center top / 480px;
        opacity: 0;
        transition: .5s;
      }
      .tv{
        position: absolute;
        top: 0;
        left: 0;
        display: inline-block;
        width: 80px;
        height: 80px;
        background: url('../images/app-download.png') no-repeat;
        margin-left: 160px;
        transition: .5s;
      }
      img {
        position: absolute;
        left: 170px;
        top: 62px;
        transition: .5s;
      }
    }
    .appLink{
      position: relative;
      margin-top: 3px;
      width: 480px;
      height: 150px;
      background: url('../images/2233login.png') no-repeat;
      p{
        margin-top: 31px;
        line-height: 18px;
        font-size: 18px;
        color: #222;
        text-align: center;
        letter-spacing: 3px;
      }
      .appTips{
        margin-top: 7px;
        color: #717171;
        text-align: center;
        font-size: 14px;
        span{
          display: block;
        }
      }
    }
    .loginForm{
      position: relative;
      width: 400px;
      height: 300px;
      border-left: 1px solid #DDD;
      padding-left: 44px;
      display: flex;
      flex-direction: column;
      margin-right: 45px;
      margin-top: 18px;
      .remember{
        margin-top: 49px;
        margin-left: 4px;
        label{
          color: #717171;
          input{
            margin-right: 6px;
          }
          span{
            color: #BBB;
            font-size: 10px;
            margin-left: 13px;
          }
        }
      }
      .account{
        position: absolute;
        bottom: 102px;
        right: -10px;
        a{
          &:first-child{
            margin-right: 10px;
          }
        }
      }
    }
  }
}
.longType{
  box-sizing: border-box;
  padding: 0 10px;
  margin-bottom: 32px;
  width: 410px;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  border: 1px solid #DDD;
  border-radius: 4px;
  &:first-child {
    margin-top: -8px;
  }
}
.tipIcon{
  position: absolute;
  left: 461px;
  top: 1px;
  display: inline-block;
  width: 17px;
  height: 17px;
  background: url('../images/inputtip.png') no-repeat -39px -39px;
}
.errorTip{
  border: 1px solid #F66495;
}
.inputTip{
  margin-top: -32px;
  line-height: 32px;
  color: #F66495;
}
.loginError{
  position: absolute;
  bottom: 83px;
  left: 44px;
  line-height: 1;
  color: #F66495;
}
.pwTip{
  top: 73px;
}
.loginBtn{
  position: absolute;
  bottom: 31px;
  box-sizing: border-box;
  width: 186px;
  height: 38px;
  line-height: 38px;
  font-size:14px;
  color: #fff;
  text-align: center;
  border: 1px solid #0381AA;
  border-radius: 2px;
  background: #00A7DE;
  transition: all .3s;
  &:hover {
    color: #fff;
    background: #00BEE7;
  }
}
.registerBtn{
  position: absolute;
  left: 267px;
  bottom: 31px;
  box-sizing: border-box;
  width: 186px;
  height: 38px;
  line-height: 38px;
  font-size:14px;
  color: #555;
  text-align: center;
  border: 1px solid #CCC;
  border-radius: 2px;
  transition: all .3s;
  &:hover {
    color: #555;
    background: #F7F7F7;
  }
}
.weibo{
  position: absolute;
  left: 44px;
  bottom: -2px;
  height: 21px;
  line-height: 21px;
  color: #717171;
  padding-left: 26px;
  background: url('../images/webIcon.png') no-repeat;
  &:hover{
    color: #717171
  }
}
.tencent{
  position: absolute;
  left: 165px;
  bottom: -2px;
  height: 21px;
  line-height: 21px;
  color: #717171;
  padding-left: 26px;
  background: url('../images/webIcon.png') no-repeat 0 -41px;
  &:hover{
    color: #717171
  }
}
</style>
