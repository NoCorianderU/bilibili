<template>
  <div class="navBox">
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
  background: #FFF;
  .nav{
    width: 1160px;
    height: 42px;
    line-height: 42px;
    position: absolute;
    top: 0;
  }
}
</style>
