<template>
  <div class="navBox">
    <div class="blur"></div>
    <div class="mask"></div>
    <div class="container nav clearfix">
      <LeftNav/>
      <LoginNav/>
    </div>
  </div>
</template>

<script>
import LeftNav from './LeftNav'
import LoginNav from './LoginNav'

export default {
  data() {
    return {
      appShow: false,
      loginShow: false
    }
  },

  components: {
    LeftNav,
    LoginNav
  }
}

</script>

<style lang="scss" scoped>
.navBox{
  height: 42px;
  .mask{
    position: absolute;
    left: 0;
    top: 0;
    background:  hsla(0,0%,100%,.4);
    width: 100%;
    height: 42px;
    box-shadow: 0 0 4px rgba(0,0,0,.1);
    z-index: 2;
  }
  .blur{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 42px;
    background: url('../images/banner2.png') no-repeat center -10px;
    filter: blur(4px);
    z-index: 1;
    overflow: hidden;
  }
  .nav{
    width: 1160px;
    height: 42px;
    line-height: 42px;
    position: absolute;
    top: 0;
    z-index: 999;
  }
}
</style>
