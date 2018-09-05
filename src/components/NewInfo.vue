<template>
  <div class="newInfo" :style="mt">
    <div class="headerline clearfix">
      <h4 class="fl">
        <slot/>
      </h4>
      <ContentBar></ContentBar>
    </div>
    <ContentList></ContentList>
  </div>
</template>

<script>
import ContentList from './ContentList'
import ContentBar from './ContentBar'

export default {
  components: {
    ContentList,
    ContentBar
  },
  props: {
    mt: {
      type: String,
      dafault: 'margin-top: 64px'
    }
  }
}
</script>

<style lang="scss" scoped>
.newInfo{
  width: 880px;
  height: 375px;
  margin-top: 64px;
  .headerline{
    h4{
      font-size: 18px;
      line-height: 24px;
      font-weight: normal;
      margin-right: 8px;
    }
  }
}
</style>
