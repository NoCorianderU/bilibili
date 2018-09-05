<template>
  <div class="liveBar clearfix">
    <p class="liveUsers fl">当前共有<span class="liveNum">7419</span>个在线直播</p>
    <a href="" class="liveTips fl">233秒居然能做这些！</a>
    <a href="" class="moreBtn fr">更多<span class="aniBlank"></span><span class="more1"></span></a>
    <a href="" class="refreshBtn fr"><span class="refresh"></span><span class="num">1231</span>条新动态</a>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.liveBar{
  overflow: hidden;
  .liveUsers{
    display: inline-block;
    line-height: 1;
    color: #99A2AA;
    margin-top: 11px;
    margin-left: 12px;
    .liveNum{
      color: #47A9E1
    }
  }
  .liveTips{
    display: inline-block;
    height: 16px;
    line-height: 18px;
    color: #6D757A;
    transition: .2s;
    margin-top: 8px;
    margin-left: 39px;
    padding-left: 18px;
    background: url('../images/icons.png') no-repeat -664px -1112px;
    &:hover{
      color: #00A1D6;
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

