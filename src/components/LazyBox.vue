<template>
  <div class="lazyBox">
      <p :class="{ 'toLeft' : toLeft }"><span></span>正在加载...</p>
    </div>
</template>

<script>
export default {
  props: {
    toLeft: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.lazyBox {
  height: 100%;
  max-width: 800px;
  p {
    position: relative;
    top: 50%;
    left: 0;
    margin-top: -13px;
    line-height: 24px;
    color: #99A2AA;
    text-align: center;
    span {
      display: inline-block;
      margin-top: -2px;
      margin-right: 5px;
      width: 24px;
      height: 24px;
      background: url('../images/empty.gif') no-repeat;
      vertical-align: top;
    }
  }
  .toLeft {
    top: 30%;
    left: -20%;
  }
}
</style>

