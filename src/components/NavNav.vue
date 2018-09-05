<template>
    <div class="subNavList" id="sideNav">
      <ul>
        <li><a href="">番剧</a></li>
        <li><a href="">游戏</a></li>
        <li><a href="">直播</a></li>
        <li><a href="">动画</a></li>
        <li><a href="">舞蹈</a></li>
        <li><a href="">音乐</a></li>
        <li><a href="">音频</a></li>
        <li><a href="">科技</a></li>
        <li><a href="">生活</a></li>
        <li><a href="">鬼畜</a></li>
        <li><a href="">时尚</a></li>
        <li><a href="">广告</a></li>
        <li><a href="">国创</a></li>
        <li><a href="">娱乐</a></li>
        <li><a href="">电影</a></li>
        <li><a href="">TV剧</a></li>
        <li><a href="">影视</a></li>
        <li><a href="">纪录片</a></li>
      </ul>
      <div class="sortBtn">
        <a href=""><span></span>排序</a>
      </div>
      <div class="toTop">
        <a href="javascript:;" @click="toTop"></a>
      </div>
      <div class="appGIF" @mouseenter="showTip = true" @mouseleave="showTip = false">
        <transition name="fade">
          <div class="downloadTip" v-if="showTip"></div>
        </transition>
        <div class="downloadBG" @mouseover="gifMove(download)" @mouseleave="gifBack(download)" :style="download.bgPosition">
          <a href="" class="downloadGif"></a>
        </div>
      </div>
    </div>
</template>

<script>
export default {

  data() {
    return {
      showTip: false,
      download: {
        timer: '',
        index: 0,
        num: 15,
        bgPosition: '',
        backForth: true,
        duration: 80
      }
    }
  },
  methods: {
    gifMove(obj) {
      this.$imgAnim.gifMove(obj)
    },
    backToForth(obj) {
      this.$imgAnim.backToForth(obj)
    },
    gifBack(obj) {
      this.$imgAnim.gifBack(obj)
    },
    toTop () {
      this.$sideNav.toTop()
    }
  },

  mounted() {
    this.$sideNav.sideNavMove()
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active{
  transition: all .5s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}

.subNavList{
  position: fixed;
  left: 50%;
  top: 232px;
  // top: 91px;
  margin-left: 590px;
  width: 48px;
  z-index: 999;
  transition: .5s;
  ul{
    position: relative;
    width: 48px;
    border: 1px solid #E5E9EF;
    border-bottom: none;
    border-radius: 4px 4px 0 0;
    li{
      height: 32px;
      line-height: 32px;
      background: #F6F9FA;
      transition: .3s;
      &:hover{
        background: #00A1D6;
        a{
          color: #fff;
        }
      }
      a{
        display: block;
        height: 100%;
        text-align: center;
      }
    }
  }
  .sortBtn{
    position: relative;
    width: 48px;
    height: 54px;
    border: 1px solid #E5E9EF;
    border-radius: 0 0 4px 4px ;
    a{
      display: block;
      box-sizing: border-box;
      height: 100%;
      text-align: center;
      background: #F6F9FA;
      transition: .3s;
      span{
        display: block;
        height: 31px;
        background: url('../images/icons.png') -648px -143px;
      }
      &:hover{
        background: #00A1D6;
        color: #fff;
        span{
          background: url('../images/icons.png') -713px -143px;
        }
      }
    }
    &::after{
      position: absolute;
      bottom: -10px;
      left: 50%;
      margin-left: -16px;
      content: '';
      width: 30px;
      height: 9px;
      border-left: 1px solid #DDD;
      border-right: 1px solid #DDD;
    }
  }
  .toTop{
    box-sizing: border-box;
    margin-top: 9px;
    width: 50px;
    height: 50px;
    border: 1px solid #E5E9EF;
    border-radius: 4px;
    background: #F6F9FA;
    transition: .3s;
    a{
      display: block;
      height: 100%;
      background: url('../images/icons.png') -648px -72px;
    }
    &:hover{
      background: #00A1D6;
      a{
        background-position: -713px -72px;
      }
    }
  }
  .appGIF{
    position: relative;
    width: 80px;
    height: 80px;
    .downloadTip{
      position: absolute;
      top: -20px;
      left: -110px;
      width: 106px;
      height: 44px;
      background: url('../images/download-tip.png');
      z-index: 1000;
    }
    .downloadBG{
      margin-left: -15px;
      width: 80px;
      height: 80px;
      background: url('../images/app-download.png');
      a{
        display: block;
        width: 80px;
        height: 80px;
      }
    }
  }
}
</style>

