<template>
  <div class="rankListC">
    <div class="header clearfix">
      <ul class="fl">
        <li v-for="(v, i) in bars" :key="i" @click="changeDate(i)" :class="{'active' : i === index}">
          <a href="javascript:;">{{v}}</a>
        </li>
      </ul>
    </div>
    <div class="listBox clearfix" :style="transX">
      <ul class="list">
        <li class="clearfix">
          <i class="fl">1</i>
          <a href="" class="liveImg fl">
            <img src="https://i2.hdslb.com/bfs/face/4a91427ef035836b1937244bc559ed03f244bfa9.jpg@40w_40h.webp" alt="">
          </a>
          <div class="liveInfo">
            <a href="" title="【滚】388戒赌中心">
              <p class="liverName">两仪滚</p>
              <p class="liverTip">【滚】388戒赌中心</p>
              <p class="visitors">55.5万</p>
            </a>
          </div>
        </li>
        <li class="clearfix">
          <i class="fl">2</i>
          <a href="" class="liveImg fl">
            <img src="https://i2.hdslb.com/bfs/face/4a91427ef035836b1937244bc559ed03f244bfa9.jpg@40w_40h.webp" alt="">
          </a>
          <div class="liveInfo">
            <a href="" title="【滚】388戒赌中心">
              <p class="liverName">两仪滚</p>
              <p class="liverTip">【滚】388戒赌中心</p>
              <p class="visitors">55.5万</p>
            </a>
          </div>
        </li>
        <li class="clearfix">
          <i class="fl">3</i>
          <a href="" class="liveImg fl">
            <img src="https://i2.hdslb.com/bfs/face/4a91427ef035836b1937244bc559ed03f244bfa9.jpg@40w_40h.webp" alt="">
          </a>
          <div class="liveInfo">
            <a href="" title="【滚】388戒赌中心">
              <p class="liverName">两仪滚</p>
              <p class="liverTip">【滚】388戒赌中心【滚】388戒赌中心【滚】388戒赌中心</p>
              <p class="visitors">55.5万</p>
            </a>
          </div>
        </li>
        <li class="clearfix">
          <i class="fl">4</i>
          <a href="" class="liveImg fl">
            <img src="https://i2.hdslb.com/bfs/face/4a91427ef035836b1937244bc559ed03f244bfa9.jpg@40w_40h.webp" alt="">
          </a>
          <div class="liveInfo">
            <a href="" title="【滚】388戒赌中心">
              <p class="liverName">两仪滚</p>
              <p class="liverTip">【滚】388戒赌中心</p>
              <p class="visitors">55.5万</p>
            </a>
          </div>
        </li>
        <li class="clearfix">
          <i class="fl">5</i>
          <a href="" class="liveImg fl">
            <img src="https://i2.hdslb.com/bfs/face/4a91427ef035836b1937244bc559ed03f244bfa9.jpg@40w_40h.webp" alt="">
          </a>
          <div class="liveInfo">
            <a href="" title="【滚】388戒赌中心">
              <p class="liverName">两仪滚</p>
              <p class="liverTip">【滚】388戒赌中心</p>
              <p class="visitors">55.5万</p>
            </a>
          </div>
        </li>
        <li class="clearfix">
          <i class="fl">6</i>
          <a href="" class="liveImg fl">
            <img src="https://i2.hdslb.com/bfs/face/4a91427ef035836b1937244bc559ed03f244bfa9.jpg@40w_40h.webp" alt="">
          </a>
          <div class="liveInfo">
            <a href="" title="【滚】388戒赌中心">
              <p class="liverName">两仪滚</p>
              <p class="liverTip">【滚】388戒赌中心</p>
              <p class="visitors">55.5万</p>
            </a>
          </div>
        </li>
      </ul>
      <ul class="list">
        <div v-if="show" class="empty">没有数据(-_-#)</div>
        <li class="clearfix" v-else>
          <i class="fl">1</i>
          <a href="" class="liveImg fl">
            <img src="https://i2.hdslb.com/bfs/face/4a91427ef035836b1937244bc559ed03f244bfa9.jpg@40w_40h.webp" alt="">
          </a>
          <div class="liveInfo">
            <a href="" title="【滚】388戒赌中心">
              <p class="liverName">两仪滚</p>
              <p class="liverTip">【滚】388戒赌中心</p>
              <p class="visitors">55.5万</p>
            </a>
          </div>
        </li>
      </ul>
      <SliderC></SliderC>
    </div>
  </div>
</template>

<script>
import SliderC from './SliderC'
export default {
 data() {
    return {
      bars: ['直播排行', '关注的主播', '为你推荐'],
      index: 0,
      show: true
    }
  },
  components: {
    SliderC,
  },
  methods: {
    changeDate(index) {
      this.index = index
    }
  },
  computed: {
    transX() {
      return {
        transform: `translateX(${this.index * -260}px)`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.rankListC{
  width: 260px;
  padding-top: 30px;
  position: relative;
  overflow: hidden;
  .header{
    ul{
      li{
        float: left;
        box-sizing: border-box;
        margin-top: -2px;
        height: 26px;
        line-height: 26px;
        text-align: center;
        margin-right: 12px;
        a{
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
  }
  .listBox{
    width: 300%;
    transition: .3s;
    .list{
      width: 260px;
      float: left;
      li{
        height: 54px;
        position: relative;
        &:nth-child(1) i, &:nth-child(2) i, &:nth-child(3) i, {
          background: #F25D8E;
        }
        i{
          font-style: normal;
          color: #fff;
          width: 18px;
          height: 18px;
          line-height: 18px;
          text-align: center;
          font-weight: bold;
          border-radius: 4px;
          background: #B8C0CC;
          margin-right: 4px;
        }
        a{
          transition: .2s;
          &:hover{
            color: #00A1D6;
          }
        }
        .liveImg{
          width: 40px;
          height: 40px;
          margin-left: 3px;
          img{
            width: 40px;
            height: 40px;
            border-radius: 50%;
          }
        }
        .liveInfo{
          position: relative;
          overflow: hidden;
          padding-left: 12px;
          line-height: 16px;
          .liverTip{
            color: #99A2AA;
            margin-top: 5px;
            text-overflow:ellipsis;
            overflow:hidden;
            white-space:nowrap;
          }
          .visitors{
            color: #99A2AA;
            position: absolute;
            padding-left: 15px;
            background: url('../images/nums.png') no-repeat left center;
            top: 0;
            right: 3px;
          }
        }
      }
    }
  }
  .showNext{
    transform: translateX(-260px);
  }
}
</style>
