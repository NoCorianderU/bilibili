<template>
  <div class="rankList" :style="pt">
    <div class="header clearfix">
      <h3>排行</h3>
      <ul class="fl" v-if="!simple">
        <li v-for="(v, i) in bars" :key="i" @click="changeDate(i)" :class="{'active' : i === index}">
          <a href="javascript:;">{{v}}</a>
        </li>
      </ul>
    </div>
    <ul class="time" v-if="!simple">
      <li>三日<span class="down"></span></li>
      <li class="hide"><a href="javascript:;">一周</a></li>
    </ul>
    <LazyBox v-if="test" :toLeft="true"></LazyBox>
    <div class="listBox clearfix" :style="transX" v-if="!test">
      <ul class="list">
        <li>
          <i>1</i>
          <a href="" title="Megalo Box 播放：215487">
            <img src="../images/l1.webp" alt="">
            <p>【老E】和女朋友一起玩游戏</p>
            <span>综合评分：78.1万</span>
          </a>
        </li>
        <li>
          <i>2</i>
          <a href="" title="【老E】和女朋友一起玩游戏 播放：215487">
            <p>【老E】和女朋友一起玩游戏</p>
          </a>
        </li>
        <li>
          <i>3</i>
          <a href="" title="【老E】和女朋友一起玩游戏：215487">【老E】和女朋友一起玩游戏</a>
        </li>
        <li>
          <i>4</i>
          <a href="" title="【老E】和女朋友一起玩游戏：215487">【老E】和女朋友一起玩游戏</a>
        </li>
        <li>
          <i>5</i>
          <a href="" title="【老E】和女朋友一起玩游戏：215487">【老E】和女朋友一起玩游戏</a>
        </li>
        <li>
          <i>6</i>
          <a href="" title="【老E】和女朋友一起玩游戏：215487">【老E】和女朋友一起玩游戏</a>
        </li>
        <li>
          <i>7</i>
          <a href="" title="【老E】和女朋友一起玩游戏：215487">【老E】和女朋友一起玩游戏</a>
        </li>
      </ul>
      <ul class="list">
        <li>
          <i>1</i>
          <a href="" title="Megalo Box 播放：215487">
            <img src="../images/l1.webp" alt="">
            <p>【老E】和女朋友一起玩游戏</p>
            <span>综合评分：78.1万</span>
          </a>
        </li>
        <li>
          <i>2</i>
          <a href="" title="【老E】和女朋友一起玩游戏 播放：215487">
            <p>【老E】和女朋友一起玩游戏</p>
          </a>
        </li>
        <li>
          <i>3</i>
          <a href="" title="【老E】和女朋友一起玩游戏：215487">【老E】和女朋友一起玩游戏</a>
        </li>
        <li>
          <i>4</i>
          <a href="" title="【老E】和女朋友一起玩游戏：215487">【老E】和女朋友一起玩游戏</a>
        </li>
        <li>
          <i>5</i>
          <a href="" title="【老E】和女朋友一起玩游戏：215487">【老E】和女朋友一起玩游戏</a>
        </li>
        <li>
          <i>6</i>
          <a href="" title="【老E】和女朋友一起玩游戏：215487">【老E】和女朋友一起玩游戏</a>
        </li>
        <li>
          <i>7</i>
          <a href="" title="【老E】和女朋友一起玩游戏：215487">【老E】和女朋友一起玩游戏</a>
        </li>
      </ul>
    </div>
    <a href="" class="moreVideos" v-if="!test">查看更多<span class="more"></span></a>
  </div>
</template>

<script>
import LazyBox from './LazyBox'

export default {
  components: {
    LazyBox
  },

  props: {
    simple: {
      type: Boolean,
      default: false
    },
    pt: {
      type: String,
      default: 'padding-top: 30px'
    }
  },
 data() {
    return {
      test: false,
      bars: ['全部', '原创'],
      index: 0,
    }
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
.rankList{
  width: 260px;
  height: 380px;
  position: relative;
  overflow: hidden;
  .header{
    h3{
      float: left;
      font-size: 18px;
      line-height:  24px;
      font-weight: normal;
      margin-right: 8px;
    }
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
  .time{
    position: absolute;
    right: 0;
    top: 30px;
    width: 55px;
    border: 1px solid #CCD0D7;
    border-radius: 4px;
    z-index: 99;
    li{
      height: 22px;
      line-height: 22px;
      text-indent: 7px;
      cursor: default;
      .down{
        display: inline-block;
        width: 12px;
        height: 12px;
        background: url('../images/icons.png') no-repeat -475px -151px;
        margin-left: 3px;
      }
      a{
        display: block;
        height: 100%;
        transition: .3s;
        &:hover{
          background: #CCD0D7;
        }
      }
    }
    &:hover .hide{
      display: block;
    }
    .hide{
      display: none;
    }
  }
  .listBox{
    width: 200%;
    transition: .3s;
    .list{
      width: 50%;
      margin-top: 20px;
      float: left;
      li{
        height: 18px;
        line-height: 18px;
        margin-bottom: 20px;
        position: relative;
        &:nth-child(1) i, &:nth-child(2) i, &:nth-child(3) i, {
          background: #F25D8E;
        }
        &:first-child{
          height: 50px;
          i{
            vertical-align: top;
          }
          a{
            img{
              width: 80px;
              height: 50px;
              border-radius: 4px;
            }
            p{
              position: absolute;
              top: -3px;
              left: 110px;
              width: 143px;
            }
            span{
              position: absolute;
              bottom: -3px;
              left: 110px;
              color: #99A2AA;
            }
          }
        }
        &:last-child{
          margin-bottom: 15px;
        }
        i{
          font-style: normal;
          display: inline-block;
          color: #fff;
          width: 18px;
          height: 18px;
          text-align: center;
          font-weight: bold;
          border-radius: 4px;
          background: #B8C0CC;
          margin-right: 4px;
        }
        a{
          display: inline-block;
          width: 225px;
          transition: .2s;
          &:hover{
            color: #00A1D6;
          }
        }
        &:hover .listInfo{
          display: block
        }
      }
    }
  }
  .showNext{
    transform: translateX(-260px);
  }
  .moreVideos{
    display: block;
    width: 258px;
    line-height: 24px;
    text-align: center;
    background: #E5E9EF;
    border: 1px solid #E0E6ED;
    border-radius: 4px;
    transition: .2s;
    text-indent: 1px;
    &:hover {
      background: #CCD0D7;
    }
  }
}
</style>

