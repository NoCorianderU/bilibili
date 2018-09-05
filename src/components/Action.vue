<template>
  <div class="wbg">
    <div class="tip">
      <p>成功退出登录！</p>
      <p><a href="/">如果你的浏览器没反应，请点击这里...</a></p>
    </div>
  </div>
</template>

<script>
import {delCookie} from '../utils.js'

export default {
  mounted () {
    delCookie('user')
    this.$store.commit('setUserInfo', {data: ''})
    setTimeout(() => {
      this.$router.push('/')
    }, 3000)
  }
}
</script>

<style lang="scss" scoped>
.wbg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 999;
  .tip{
    position: relative;
    top: 50%;
    left: 50%;
    width: 1208px;
    height: 120px;
    margin-top: -60px;
    margin-left: -604px;
    border: 1px solid #A9A9A9;
    text-align: center;
    a{
      color: #659B28;
      &:hover {
        text-decoration: underline;
      }
    }
    p:first-child {
      margin-top: 42px;
    }
    p:last-child {
      margin-top: 13px;
    }
  }
}
</style>

