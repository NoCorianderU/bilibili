
<template>
<div class="content">
  <header class="container">
    <HeadNav></HeadNav>
  </header>
  <div class="container">
    <Banner/>
    <NavList/>
    <div class="recommend clearfix">
      <Slider class="fl"></Slider>
      <RecommandBox class="fr"></RecommandBox>
    </div>
    <div class="popularize clearfix">
      <Popularize class="fl"></Popularize>
      <Column class="fr"></Column>
    </div>
    <div class="bangumi clearfix">
      <Ad v-if="ad1"></Ad>
      <BangumiTable class="fl" className="bangumi">番剧</BangumiTable>
      <RankList class="fr"></RankList>
    </div>
      <div class="bangumiInfo clearfix">
      <NewInfo class="fl">番剧动态</NewInfo>
      <RecomSlider class="fr"></RecomSlider>
    </div>
    <div class="sec clearfix">
      <Block className="game" class="fl">游戏</Block>
      <RankListB class="fr"></RankListB>
    </div>
    <div class="sec clearfix">
      <AdB v-if="ad1"></AdB>
      <Block className="live" class="fl">正在直播</Block>
      <RankListC class="fr"></RankListC>
    </div>
    <div class="sec clearfix">
      <Block className="animate" class="fl">动画</Block>
      <RankListB class="fr"></RankListB>
    </div>
    <div class="sec clearfix">
      <AdB v-if="ad1"></AdB>
      <Block className="dance" class="fl">舞蹈</Block>
      <RankListB class="fr"></RankListB>
    </div>
    <div class="sec clearfix">
      <Block className="music" class="fl">音乐</Block>
      <RankListB class="fr"></RankListB>
    </div>
    <div class="sec clearfix">
      <Block className="technology" class="fl">科技</Block>
      <RankListB class="fr"></RankListB>
    </div>
    <div class="sec clearfix">
      <Block className="life" class="fl">生活</Block>
      <RankListB class="fr"></RankListB>
    </div>
    <div class="sec clearfix">
      <Block className="guichu" class="fl">鬼畜</Block>
      <RankListB class="fr"></RankListB>
    </div>
    <div class="sec clearfix">
      <Block className="fashion" class="fl">时尚</Block>
      <RankListB class="fr"></RankListB>
    </div>
    <div class="sec clearfix">
      <Block className="advance" class="fl">广告</Block>
      <RankListB class="fr"></RankListB>
    </div>
    <div class="sec clearfix">
      <BangumiTable class="fl" className="guochuang">国创</BangumiTable>
      <RankList class="fr" :listLength="5" ></RankList>
      <SliderD class="fr"></SliderD>
    </div>
    <div class="bangumiInfo clearfix">
      <NewInfo class="fl" mt="margin-top: 24px">国产原创相关</NewInfo>
      <RankListB class="fr" :listLength="7" pt="padding-top: 24px"></RankListB>
    </div>
    <div class="sec clearfix">
      <Block className="yule" class="fl">娱乐</Block>
      <RankListB class="fr"></RankListB>
    </div>
    <div class="sec clearfix">
      <Block className="movie" class="fl">电影</Block>
      <RankListB class="fr" :simple="true"></RankListB>
    </div>
    <div class="sec clearfix">
      <Block className="tv" class="fl">电视剧</Block>
      <RankListB class="fr" :simple="true"></RankListB>
    </div>
    <div class="sec clearfix">
      <Block className="cinephile" class="fl">影视</Block>
      <RankListB class="fr"></RankListB>
    </div>
    <div class="sec clearfix">
      <Block className="documentary" class="fl">纪录片</Block>
      <RankListB class="fr"></RankListB>
    </div>
    <SpecilaRecom></SpecilaRecom>
    <NavNav></NavNav>
  </div>
</div>
</template>

<script>
import HeadNav from "@/components/HeadNav"
import Banner from "@/components/Banner"
import NavList from "@/components/NavList"
import Slider from "@/components/Slider"
import RecommandBox from "@/components/RecommandBox"
import Popularize from "@/components/Popularize"
import Column from "@/components/Column"
import Ad from "@/components/Ad"
import AdB from "@/components/AdB"
import BangumiTable from "@/components/BangumiTable"
import RankList from "@/components/RankList"
import RankListB from "@/components/RankListB"
import RankListC from "@/components/RankListC"
import NewInfo from "@/components/NewInfo"
import RecomSlider from "@/components/RecomSlider"
import Block from "@/components/Block"
import SliderD from "@/components/SliderD"
import SpecilaRecom from "@/components/SpecilaRecom"
import NavNav from "@/components/NavNav"

export default {
  // beforeRouteEnter (to, from, next) {
  //   // ...
  //   next(vm => {
  //     console.log(vm.id)
  //   })
  // },
  // beforeRouteUpdate (to, from, next) {
  //   // ...
  //   next()
  // },
  // beforeRouteLeave (to, from, next) {
  //    if(global.confirm('are you srue?)) {
  //        next()
  //     }
  // },
  data() {
    return {
      ad1: true
    }
  },

  components: {
    HeadNav,
    Banner,
    NavList,
    Slider,
    RecommandBox,
    Popularize,
    Column,
    Ad,
    BangumiTable,
    RankList,
    NewInfo,
    RecomSlider,
    Block,
    RankListB,
    RankListC,
    SliderD,
    SpecilaRecom,
    AdB,
    NavNav,
  }
}
</script>
