<template>
  <div class="content">
    <div class="headline clearfix">
      <i :class="iconClass"></i>
      <h4 class="fl">
        <slot/>
      </h4>
      <LiveBar v-if="className === 'live'"></LiveBar>
      <ContentBar v-else></ContentBar>
    </div>
      <ContentList></ContentList>
  </div>
</template>

<script>
import ContentList from './ContentList'
import ContentBar from './ContentBar'
import LiveBar from './LiveBar'

export default {
  props: ['className'],
  components: {
    ContentList,
    ContentBar,
    LiveBar
  },
  computed: {
    iconClass() {
      return ['fl', this.className]
    }
  }
}
</script>

<style lang="scss" scoped>
.content{
  width: 880px;
  margin-top: 20px;
   .headline{
    height: 30px;
    line-height: 44px;
    padding-top: 10px;
    .game{
      background: url('../images/icons.png') no-repeat -141px -203px;
    }
    .live{
      background: url('../images/icons.png') no-repeat -141px -652px;
    }
    .animate{
      background: url('../images/icons.png') no-repeat -141px -908px;
    }
    .dance{
      background: url('../images/icons.png') no-repeat -141px -461px;
    }
    .music{
      background: url('../images/icons.png') no-repeat -140px -266px;
    }
    .technology{
      background: url('../images/icons.png') no-repeat -141px -525px;
    }
    .life{
      background: url('../images/icons.png') no-repeat -137px -970px;
    }
    .guichu{
      background: url('../images/icons.png') no-repeat -141px -332px;
    }
    .fashion{
      background: url('../images/icons.png') no-repeat -141px -718px;
    }
    .advance{
      background: url('../images/icons.png') no-repeat -140px -1228px;
    }
    .yule{
      background: url('../images/icons.png') no-repeat -141px -1032px;
    }
    .movie{
      background: url('../images/icons.png') no-repeat -141px -396px;
    }
    .tv{
      background: url('../images/icons.png') no-repeat -141px -845px;
    }
    .cinephile{
      background: url('../images/icons.png') no-repeat -140px -1356px;
    }
    .documentary{
      background: url('../images/icons.png') no-repeat -140px -1292px;
    }
    i{
      display: inline-block;
      width: 40px;
      height: 40px;
      margin-top: -10px;
      background: url('../images/icons.png') no-repeat -141px -140px;
    }
    h4{
      display: inline-block;
      color: #000;
      margin-top: -10px;
      font-size: 24px;
      margin-left: 10px;
      margin-right: 8px;
      font-weight: normal;
    }
   }
}
</style>
