<template>
  <div class="contentBar clearfix">
    <ul class="fl">
      <li v-for="(v, i) in bars" :key="i" @click="changeDate(i)" :class="{'active' : i === index}">
        <a href="javascript:;">{{v}}</a>
      </li>
    </ul>
    <a href="" class="moreBtn fr">更多<span class="aniBlank"></span><span class="more1"></span></a>
    <a href="" class="refreshBtn fr"><span class="refresh"></span><span class="num">1231</span>条新动态</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bars: ['有新动态', '最新投稿'],
      index: 0
    }
  },
  methods: {
    changeDate(index) {
      this.index = index
    }
  }
}
</script>

<style lang="scss" scoped>
.contentBar{
  overflow: hidden;
  ul{
    li{
      float: left;
      box-sizing: border-box;
      margin-top: -2px;
      height: 26px;
      line-height: 26px;
      text-align: center;
      margin-left: 12px;
      a{
        display: block;
        height: 100%;
        transition: .2s;
        &:hover{
          color: #00A1D6;
        }
      }
    }
    .active{
      border-bottom: 1px solid #00A1D6;
      position: relative;
      &::after{
        content: '';
        width: 0;
        height: 0;
        overflow:hidden;
        border-width:0 3px 3px;
        border-style:dashed dashed solid;
        border-color:transparent transparent #00A1D6;
        position: absolute;
        left: 50%;
        margin-left: -3px;
        bottom: 0;
      }
      a{
        color: #00A1D6;
      }
    }
  }
  .refreshBtn{
    display: inline-block;
    padding: 0 10px;
    height: 22px;
    line-height: 22px;
    text-align: center;
    border: 1px solid  #CCD0D7;
    border-radius: 4px;
    transition: .3s;
    .num{
      font-weight: bold;
    }
    &:hover{
      color: #555;
      background: #CCD0D7;
      .refresh{
        animation: rotate .5s forwards;
      }
    }
  }
  .moreBtn{
    box-sizing: border-box;
    display: inline-block;
    width: 54px;
    height: 24px;
    line-height: 22px;
    color: #555;
    text-align: center;
    padding-left: 1px;
    border: 1px solid  #CCD0D7;
    border-radius: 4px;
    margin-left: 10px;
    transition: .3s;
    .aniBlank{
      display: inline-block;
      width: 0;
      transition: .2s
    }
    &:hover{
      color: #555;
      background: #CCD0D7;
      .aniBlank{
        width: 6px;
      }
    }
  }
}
</style>

