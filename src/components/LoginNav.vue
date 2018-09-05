<template>
  <div class="login fr">
    <ul class="clearfix fr">
      <li><a href="">历史</a></li>
      <li><a href="" class="hightlight">投 稿 </a></li>
    </ul>
    <ul v-if="getUser" class="clearfix fr">
      <li><a href="">大会员</a></li>
      <li><a href="">消息</a></li>
      <li><a href="">动态</a></li>
      <li><a href="">稍后再看</a></li>
      <li><a href="">收藏夹</a></li>
    </ul>
    <div class="loginBox fr" @mouseenter="loginShow = true" @mouseleave="loginShow = false">
      <router-link v-if="getUser" to="/account/home" :class="['userImg', {'headerImg': getUser}]"><img src="../images/akari.jpg">
      </router-link>
      <a href="javascript:;" class="userImg"><img src="../images/akari.jpg" v-if="!getUser"></a>
      <transition name="fadeIn">
        <div class="loginMenu" v-if="loginShow">
          <div class="visitor" v-if="!getUser">
            <p>登录后你可以：</p>
              <div class="danmu">
                <img src="../images/danmu1.png" alt="" :class="{one: loginShow}">
                <img src="../images/danmu1.png" alt="" :class="{two: loginShow}">
              </div>
              <a href="/login" class="loginbtn">登录</a>
              <p class="loginTips">首次使用？
                <a href="/register/phone" class="register">点我去注册</a>
              </p>
          </div>
          <div class="user" v-else>
            <p>{{ username }}</p>
            <a href="javascript:;">年度大会员</a>
            <div class="accountInfo">
              <a href="javascripte:;" class="coin" title="硬币">690</a>
              <a href="javascripte:;" class="bcoin" title="B币">5</a>
              <a href="javascripte:;" class="email"></a>
              <a href="javascripte:;" class="tel"></a>
            </div>
            <div class="level">
              <span>等级</span>
              <a href="javascript:;" class="progress">
                <div class="exp"></div>
              </a>
              <span class="nextLevel">14071<span>/28800</span></span>
            </div>
            <div class="userCenter">
              <ul class="clearfix">
                <li><a href="/account"><span></span>个人中心</a></li>
                <li><a href="javascript:;"><span></span>投稿管理</a></li>
                <li><a href="javascript:;"><span></span>B币钱包</a></li>
                <li><a href="javascript:;"><span></span>直播中心</a></li>
                <li><a href="javascript:;"><span></span>订单中心</a></li>
              </ul>
            </div>
            <div class="exit">
              <router-link href="javascript:;" :to="{path: '/action', query: {action: 'exit'}}">退出</router-link>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { checkCookie } from '../utils.js'

import {
  mapGetters,
} from 'vuex'

export default {
  data() {
    return {
      loginShow: false
    }
  },

  computed: {
    ...mapGetters(['getName']),
    getUser () {
      return this.$store.state.user
    },
    username () {
      return this.$store.state.user.username
    }
  },

  methods: {
    isLogin() {
      return checkCookie('user')
    }
  },

  async mounted() {
    let res = this.isLogin()
    if (res) {
      this.$store.dispatch('requestUserInfo', { user: res })
    }
  }
}
</script>

<style lang="scss" scoped>
.fadeIn-enter-active{
  transition: all .3s .2s;
}
.fadeIn-leave-active{
  transition: all .3s;
}
.fadeIn-enter, .fadeIn-leave-to{
  opacity: 0;
  transform: translateY(14px)
}

.login{
  .loginBox{
    position: relative;
    height: 42px;
    z-index: 999;
    &:hover {
      .headerImg {
        img {
          transition: .3s linear .2s;
          margin-top: 15px;
          margin-left: -16px;
          width: 68px;
          height: 68px;
        }
      }
    }
    .userImg{
      padding: 0 11px;
      width: 36px;
      height: 36px;
      display: block;
      height: 100%;
      z-index: 99;
      img {
        position: relative;
        margin-top: 4px;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        z-index: 999;
        transition: .2s linear;
      }
    }
    .loginMenu {
      position: relative;
      .visitor{
        box-sizing: border-box;
        position: absolute;
        top: 0;
        left: -171px;
        width: 346px;
        height: 333px;
        padding: 12px;
        background: #fff;
        border: 1px solid #E5E9EF;
        box-shadow: 0 1px 2px #ccc;
        z-index: 1000;
        p{
          font-size: 12px;
          color: #6d757a;
          line-height: 18px;
        }
        .danmu{
          position: relative;
          margin-top: 10px;
          width: 320px;
          height: 200px;
          background: url('../images/danmu.png') no-repeat;
          overflow: hidden;
          img{
            position: absolute;
            top: 0;
            left: 0;
          }
        }
        .loginbtn{
          font-size: 14px;
          margin-top: 12px;
          color: #fff;
          display: block;
          height: 43px;
          line-height: 43px;
          text-align: center;
          background: #00A1D6;
          border-radius: 4px;
          &:hover{
            background: #00B5E5;
          }
        }
        .loginTips{
          margin-top: 8px;
          color: #222;
          text-align: center;
          .register{
            color: #00A1D6;
            &:hover{
              color: #00B5E5;
            }
          }
        }
      }
      .user {
        box-sizing: border-box;
        position: absolute;
        top: -42px;
        left: -101px;
        width: 260px;
        height: 322px;
        background: #fff;
        box-shadow: 0 1px 2px #ccc;
        border-radius: 0 0 4px 4px;
        overflow: hidden;
        p {
          margin-top: 53px;
          line-height: 1;
          font-weight: bold;
          color: #FB7A9F;
          text-align: center;
        }
        & > a {
          display: block;
          margin: 10px auto 0;
          width: 66px;
          line-height: 18px;
          text-align: center;
          color: #fff;
          border-radius: 3px;
          background: #FB7A9F;
        }
        .accountInfo {
          margin-top: 13px;
          padding-left: 20px;
          height: 18px;
          a {
            float: left;
            height: 18px;
            line-height: 18px;
            color: #222222;
          }
          .coin {
            padding-left: 20px;
            width: 40px;
            background: url('../images/icons.png') no-repeat -407px -471px;
          }
          .bcoin {
            padding-left: 20px;
            margin-left: 6px;
            width: 40px;
            background: url('../images/icons.png') no-repeat -343px -471px;
          }
          .email {
            margin-left: 48px;
            width: 18px;
            background: url('../images/icons.png') no-repeat -343px -534px;
          }
          .tel {
            margin-left: 10px;
            width: 18px;
            background: url('../images/icons.png') no-repeat -343px -599px;
          }
        }
        .level {
          box-sizing: border-box;
          margin-top: 24px;
          padding: 0 20px;
          height: 18px;
          line-height: 18px;
          color: #222;
          .progress {
            position: relative;
            float: right;
            margin-top: 5px;
            width: 170px;
            height: 8px;
            background: #EEE;
            cursor: pointer;
            &::before {
              position: absolute;
              top: -6px;
              left: -17px;
              content: '';
              width: 18px;
              height: 18px;
              background: #F3CB85;
              border-radius: 50%;
            }
            .exp {
              position: absolute;
              top: 0;
              left: 0;
              width: 40%;
              height: 100%;
              background: #F3CB85;
            }
          }
          .nextLevel {
            float: right;
            font-size: 10px;
            line-height: 14px;
            color: #222;
            span {
              color: #ccc;
            }
          }
        }
        .userCenter {
          margin-top: 28px;
          border-top: 1px solid #E5E9EF;
          ul {
            padding-top: 3px;
            height: 95px;
            li {
              width: 50%;
              float: left;
              height: 16px;
              line-height: 16px;
              margin-top: 12px;
              a{
                margin-left: 21px;
                padding: 0;
                height: 16px;
                line-height: 16px;
                transition: .1s;
                &:hover {
                  color: #00A1D6;
                  span {
                    background-position: -536px -407px;
                  }
                }
                span {
                  display: inline-block;
                  margin-right: 11px;
                  width: 16px;
                  height: 16px;
                  vertical-align: top;
                  background: url('../images/icons.png') no-repeat -472px -407px;
                }
              }
              &:nth-child(2) a{
                &:hover span {
                  background-position: -601px -1046px;
                }
                span {
                  background-position: -536px -1046px;
                }
              }
              &:nth-child(3) a{
                &:hover span {
                  background-position: -536px -472px;
                }
                span {
                  background-position: -472px -472px;
                }
              }
              &:nth-child(4) a{
                &:hover span {
                  background-position: -537px -855px;
                }
                span {
                  background-position: -473px -855px;
                }
              }
              &:nth-child(5) a{
                &:hover span {
                  background-position: -2px -15px;
                }
                span {
                  width: 18px;
                  margin-left: -1px;
                  background: url('../images/order.png') no-repeat -2px 0;
                }
              }
            }
          }
        }
        .exit {
          height: 30px;
          line-height: 30px;
          background: #F4F5F7;
          a {
            float: right;
            margin-right: 21px;
            font-size: 12px;
            color: #222;
            transition: .3s;
            &:hover {
              color: #00A1D6;
            }
          }
        }
      }
    }
  }
  ul{
    li{
      a{
        height:42px;
        padding: 0 8px;
        display: block;
      }
      transition: all .5s;
      float: left;
      &:hover{
        background: hsla(0,0%,100%,.4);
      }
      .hightlight{
        font-size: 14px;
        color: #fff;
        padding:0 13px;
        background: rgb(251, 114, 153);
        position: relative;
        line-height:42px;
        margin-left: 8px;
        &::after{
          content: '';
          width: 58px;
          height: 8px;
          background: rgb(251, 114, 153);
          position: absolute;
          top: 40px;
          right: 0;
          border-radius: 0 0 8px 8px;
          z-index: 9999;
        }
      }
    }
  }
}
.one {
  animation: move1 4.5s linear infinite;
}
.two {
  animation: move2 4.5s linear infinite;
}

@keyframes move1{
  to {
    transform: translateX(-320px)
  }
}
@keyframes move2{
  from {
    transform: translateX(320px)
  }
  to{
    transform: translateX(0)
  }
}
</style>

