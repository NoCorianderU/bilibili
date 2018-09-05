<template>
  <div class="navList fl">
    <ul>
      <li><a href="/" title="主站"><span class="icon_main"></span>主站</a></li>
      <li><a href="" title="画友">画友</a></li>
      <li><a href="" title="来探索bilibili音乐的世界吧~">音频</a></li>
      <li><a href="" title="游戏中心">游戏中心</a></li>
      <li><a href="" title="直播">直播</a></li>
      <li><a href="" title="会员购">会员购</a></li>
      <li><a href="" title="萌战">萌战</a></li>
      <li class="app" @mouseenter="appShow = true" @mouseleave="appShow = false">
        <a href="" title="下载APP"><span class="icon_app"></span>下载APP</a>
        <transition name="fadeIn">
          <div class="appDownload" v-if="appShow">
            <div class="appewm"></div>
          </div>
        </transition>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      appShow: false
    }
  }
}
</script>

<style lang="scss" scoped>
.fadeIn-enter-active{
  transition: all .3s .2s;
}
.fadeIn-leave-active{
  transition: all .3s;
}
.fadeIn-enter, .fadeIn-leave-to{
  opacity: 0;
  transform: translateY(4px)
}

.navList{
    margin-left: -4px;
    a{
      height:42px;
      padding: 0 8px;
      display: block;
    }
    ul {
      height: 42px;
      margin-left: -6px;
      li{
        height:100%;
        float: left;
        transition: all 0.3s;
        &:hover{
          background: hsla(0,0%,100%,.4);
        }
      }
      .app{
        position: relative;
        .appDownload{
          position: absolute;
          left: -20px;
          top: 42px;
          width: 259px;
          height: 174px;
          background: url('../images/orcode-frame.png') no-repeat;
          z-index: 11;
          .appewm{
            position: absolute;
            top: 30px;
            left: 82px;
            width: 97px;
            height: 97px;
            background: url('../images/erweima.png') no-repeat;
          }
        }
      }
    }
  }
.icon_main{
  margin-left: 8px;
  display: inline-block;
  width: 16px;
  height: 14px;
  background: url('../images/icons.png') no-repeat -920px -88px;
  position: relative;
  top: 1px;
  left: -5px;
}
.icon_app{
  display: inline-block;
  margin-left: 2px;
  width: 16px;
  height: 14px;
  background: url('../images/icons.png') no-repeat -1368px -1177px;
  position: relative;
  top: 2px;
  left: -3px;
}
</style>

