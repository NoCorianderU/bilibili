<template>
  <div class="specialBox">
    <h3>特别推荐</h3>
    <SilderB></SilderB>
  </div>
</template>

<script>
import SilderB from './SliderB'
export default {
  components: {
    SilderB,
  }
}
</script>

<style lang="scss" scoped>
.specialBox{
  width: 260px;
  margin-top: 65px;
  h3{
    font-size: 18px;
    line-height:  24px;
    font-weight: normal;
  }
}
</style>

