<template>
  <section  class="accountBox">
    <header class="container">
      <HeadNavB></HeadNavB>
    </header>
    <div class="accountBg">
      <div class="account clearfix">
        <keep-alive>
          <ul class="fl">
            <li class="title">个人中心</li>
            <li>
              <ul>
                <li><a href="/account/home" :class="{'active' : $route.meta.active === '/home'}"><span></span>首页</a></li>
                <li><a href="/account/big" :class="{'active' : $route.meta.active === '/big'}"><span></span>大会员</a></li>
                <li><a href="/account/points" :class="{'active' : $route.meta.active === '/points'}"><span></span>会员积分</a></li>
                <li><a href="/account/setting" :class="{'active' : $route.meta.active === '/setting'}"><span></span>我的信息</a></li>
                <li><a href="/account/face" :class="{'active' : $route.meta.active === '/face'}"><span></span>我的头像</a></li>
                <li><a href="/account/nameplate" :class="{'active' : $route.meta.active === '/nameplate'}"><span></span>我的勋章</a></li>
                <li><a href="/account/security" :class="{'active' : $route.meta.active === '/security'}"><span></span>账号安全</a></li>
                <li><a href="/account/blacklist" :class="{'active' : $route.meta.active === '/blacklist'}"><span></span>黑名单管理</a></li>
                <li><a href="/account/coin" :class="{'active' : $route.meta.active === '/coin'}"><span></span>我的硬币</a></li>
                <li><a href="/account/record"  :class="{'active' : $route.meta.active === '/record'}"><span></span>我的记录</a></li>
                <li><a href="/account/identification"  :class="{'active' : $route.meta.active === '/identification'}"><span></span>实名认证</a></li>
                <li><a href="/account/invitation"  :class="{'active' : $route.meta.active === '/invitation'}"><span></span>邀请注册</a></li>
              </ul>
            </li>
            <li class="list1"><a href="javascript:;">个人空间</a></li>
            <li class="list1"><a href="javascript:;">我的钱包</a></li>
            <li class="list1"><a href="javascript:;">创作中心</a></li>
            <li class="list1"><a href="javascript:;">直播中心</a></li>
          </ul>
        </keep-alive>
        <div class="fr leftView">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import HeadNavB from "@/components/HeadNavB"

export default {
  components: {
    HeadNavB
  },
   data () {
     return {
       index: 1
     }
   }
}
</script>

<style lang="scss" scoped>
.accountBox {
  margin-top: 42px;
  border-top: 86px solid #00A0D8;
  margin-bottom: 120px;
  .accountBg {
    margin: -128px auto 0;
    padding-top: 109px;
    background: url('../images/zhuce.png') no-repeat center top;
    .account {
      margin: 7px auto 0;
      width: 980px;
      height: 1031px;
      border: 1px solid #E1E2E5;
      border-radius: 4px;
      box-shadow: 0 2px 4px rgba(0,0,0,.14);
      display: flex;
      ul {
        background: #FAFAFA;
        width: 150px;
        height: 100%;
        border-right: 1px solid #DDD;
        li {
          &:hover {
            background: #E1E4EA;
          }
        }
        .list1 {
          a {
            display: inline-block;
            width: 100%;
            height: 43px;
            line-height: 45px;
            font-size: 16px;
            text-align: center;
            border-bottom: 1px solid #E1E2E5;
          }
        }
        .title {
          height: 50px;
          line-height: 52px;
          color: #99AAC5;
          font-size: 16px;
          text-align: center;
          border-bottom: 1px solid #E1E2E5;
          cursor: default;
          &:hover {
            background: none;
          }
        }
        ul {
          font-size: 14px;
          border-bottom: 1px solid #E1E2E5;
          li {
            &:first-child {
              a{
                letter-spacing: 28px;
              }
              .active {
                span {
                  background-position: -87px -24px;
                }
              }
            }
            &:nth-child(2) {
               a{
                letter-spacing: 7px;
                span {
                  background-position: -23px -984px;
                }
              }
              .active {
                span {
                  background-position: -87px -984px;
                }
              }
            }
            &:nth-child(3){
              a{
                span {
                  background-position: -23px -1240px;
                }
              }
              .active {
                span {
                  background-position: -87px -1240px;
                }
              }
            }
            &:nth-child(4){
              a{
                span {
                  background-position: -23px -89px;
                }
              }
              .active {
                span {
                  background-position: -87px -89px;
                }
              }
            }
            &:nth-child(5){
              a{
                span {
                  margin-top: 0;
                  background-position: -23px -152px;
                }
              }
              .active {
                span {
                  margin-top: -2px;
                  background-position: -87px -152px;
                }
              }
            }
            &:nth-child(6){
              a{
                span {
                  background-position: -23px -216px;
                }
              }
              .active {
                span {
                  background-position: -87px -217px;
                }
              }
            }
            &:nth-child(7){
              a{
                span {
                  background-position: -23px -281px;
                }
              }
              .active {
                span {
                  background-position: -87px -281px;
                }
              }
            }
            &:nth-child(8){
              a{
                span {
                  margin-top: 0;
                  background-position: -727px -245px;
                }
              }
              .active {
                span {
                  background-position: -792px -245px;
                }
              }
            }
            &:nth-child(9){
              a{
                span {
                  margin-top: 0;
                  background-position: -23px -343px;
                }
              }
              .active {
                span {
                  background-position: -87px -343px;;
                }
              }
            }
            &:nth-child(10){
              a{
                span {
                  margin-top: 3px;
                  background-position: -23px -408px;
                }
              }
              .active {
                span {
                  background-position: -87px -408px;
                }
              }
            }
            &:nth-child(11){
              a{
                span {
                  background-position: -23px -472px;
                }
              }
              .active {
                span {
                  background-position: -87px -473px;
                }
              }
            }
            &:nth-child(12){
              a{
                span {
                  background-position: -23px -601px;
                }
              }
              .active {
                span {
                  background-position: -87px -601px;
                }
              }
            }
            a {
              display:inline-block;
              box-sizing: border-box;
              padding-left: 32px;
              width: 100%;
              height: 48px;
              line-height: 48px;
              span {
                display: inline-block;
                margin-top: 1px;
                margin-right: 16px;
                width: 18px;
                height: 18px;
                background: url('../images/account.png') no-repeat -23px -24px;
                vertical-align: middle;
              }
            }
            .active {
              color: #fff;
              background: #00A1D7;
            }
          }
        }
      }
      .leftView {
        flex: 1;
        height: 100%;
      }
    }
  }
}
</style>

