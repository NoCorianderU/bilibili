<template>
  <div class="bangumiTable">
    <div class="headline clearfix">
      <i :class="['fl',className]"></i>
      <span class="fl">
        <slot></slot>
      </span>
      <ul class="timeTable">
        <li v-for="(v, i) in date" :key="i" @click="changeDate(i)" :class="{'active' : i === index}">
          <a href="javascript:;">{{v}}</a>
        </li>
      </ul>
      <a href="" class="timeBtn">新番时间表 ></a>
    </div>
    <div v-if="test" class="lazyBox">
      <span>今天没有番剧更新</span>
    </div>
    <div class="bangumilist" v-else>
      <ul class="clearfix">
        <li>
          <a href="" class="cover fl"><img src="../images/ban1.webp" alt=""></a>
          <span class="items fl">
            <p class="name"><a href="" title="戒律的复活">戒律的复活</a></p>
            <span class="update on">更新至<a href="">24话</a></span>
          </span>
        </li>
        <li class="clearfix">
          <a href="" class="cover fl"><img src="../images/ban1.webp" alt=""></a>
          <span class="items fl">
            <p class="name"><a href="" title="暖暖日记">暖暖日记 3rd</a></p>
            <span class="update on">更新至<a href="">24话</a></span>
          </span>
        </li>
        <li class="clearfix">
          <a href="" class="cover fl"><img src="../images/ban1.webp" alt=""></a>
          <span class="items fl">
            <p class="name"><a href="" title="暖暖日记">Megalo Box</a></p>
            <span class="update on">更新至<a href="">24话</a></span>
          </span>
        </li>
        <li class="clearfix">
          <a href="" class="cover fl"><img src="../images/ban1.webp" alt=""></a>
          <span class="items fl">
            <p class="name"><a href="" title="暖暖日记">全金属狂潮 Invisi</a></p>
            <span class="update">更新至<a href="">24话</a></span>
          </span>
        </li>
        <li class="clearfix">
          <a href="" class="cover fl"><img src="../images/ban1.webp" alt=""></a>
          <span class="items fl">
            <p class="name"><a href="" title="暖暖日记">全金属狂潮 Invisi</a></p>
            <span class="update">更新至<a href="">24话</a></span>
          </span>
        </li>
        <li class="clearfix">
          <a href="" class="cover fl"><img src="../images/ban1.webp" alt=""></a>
          <span class="items fl">
            <p class="name"><a href="" title="暖暖日记">女神异闻录 动画版</a></p>
            <span class="update">更新至<a href="">24话</a></span>
          </span>
        </li>
        <li class="clearfix">
          <a href="" class="cover fl"><img src="../images/ban1.webp" alt=""></a>
          <span class="items fl">
            <p class="name"><a href="" title="暖暖日记">女神异闻录 动画版</a></p>
            <span class="update">更新至<a href="">24话</a></span>
          </span>
        </li>
        <li class="clearfix">
          <a href="" class="cover fl"><img src="../images/ban1.webp" alt=""></a>
          <span class="items fl">
            <p class="name"><a href="" title="暖暖日记">女神异闻录 动画版</a></p>
            <span class="update">更新至<a href="">24话</a></span>
          </span>
        </li>
        <li class="clearfix">
          <a href="" class="cover fl"><img src="../images/ban1.webp" alt=""></a>
          <span class="items fl">
            <p class="name"><a href="" title="暖暖日记">女神异闻录 动画版</a></p>
            <span class="update">更新至<a href="">24话</a></span>
          </span>
        </li>
        <li class="clearfix">
          <a href="" class="cover fl"><img src="../images/ban1.webp" alt=""></a>
          <span class="items fl">
            <p class="name"><a href="" title="暖暖日记">女神异闻录 动画版</a></p>
            <span class="update">更新至<a href="">24话</a></span>
          </span>
        </li>
        <li class="clearfix">
          <a href="" class="cover fl"><img src="../images/ban1.webp" alt=""></a>
          <span class="items fl">
            <p class="name"><a href="" title="暖暖日记">女神异闻录 动画版</a></p>
            <span class="update">更新至<a href="">24话</a></span>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    className: {
      type: String,
      default: 'bangumi'
    }
    // sectionTitle: {
    //   type: String,
    //   default: '番剧'
    // }
  },

  data () {
    return {
      test: false,
      date: [
        '最新',
        '一',
        '二',
        '三',
        '四',
        '五',
        '六',
        '日'
      ],
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
.bangumiTable{
  width: 900px;
  height: 455px;
  margin-top: 20px;
  .headline{
    height: 40px;
    line-height: 44px;
    i{
      width: 40px;
      height: 40px;
    }
    .bangumi{
      background: url('../images/icons.png') no-repeat -141px -140px;
    }
    .guochuang{
      background: url('../images/gc.png') no-repeat;
    }
    span{
      display: inline-block;
      color: #000;
      font-size: 24px;
      margin-left: 10px;
    }
    .timeTable{
      margin-left: 20px;
      float: left;
      .active {
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
      li{
        padding: 5px 0 2px;
        float: left;
        width: 78px;
        height: 32px;
        line-height: 34px;
        border-bottom: 1px solid #E5E9EF;
        font-size: 18px;
        text-align: center;
        a{
          display: block;
          height: 100%;
          transition: .3s;
          &:hover{
            color: #00A1D6;
          }
        }
      }
    }
    .timeBtn{
      float: left;
      box-sizing: border-box;
      display: block;
      width: 106px;
      height: 36px;
      line-height: 34px;
      color: #F25D8E;
      font-size: 14px;
      text-align: center;
      border: 1px solid #F25D8E;
      border-radius:  4px;
      margin-left: 32px;
      margin-top: 3px;
      transition: .2s;
      &:hover{
        background: #F25D8E;
        color: #fff;
      }
    }
  }
  .lazyBox {
    position: relative;
    margin-top: 16px;
    margin-left: 247px;
    width: 387px;
    height: 200px;
    background: url('../images/bangumiBg.png') no-repeat;
    span {
      position: absolute;
      top: 50px;
      left: 145px;
      color: #99A2AA;
    }
  }
  .bangumilist{
    margin-top: 26px;
    li{
      float: left;
      width: 214px;
      height: 72px;
      margin-bottom: 36px;
      .cover{
        img{
          border-radius: 5px;
        }
      }
      .items{
        display: block;
        height: 100%;
        margin-left: 12px;
        width: 93px;
        position: relative;
        .name{
          color: #222;
          line-height: 1;
          &:hover a{
            color: #00A1D6;
          }
          a{
            transition: .2s;
          }
        }
        .update{
          display: inline-block;
          margin-top: 43px;
          line-height: 18px;
          color: #BCB1AA;
          position: absolute;
          left: 0;
          bottom: 0;
          a{
            display: inline-block;
            width: 36px;
            height: 18px;
            color: #fff;
            background: #B8C0CC;
            border-radius: 8px;
            text-align: center;
            margin-left: 5px;
          }
        }
        .on {
          a{
            background: #FF8EB3;
          }
        }
      }
    }
  }
}
</style>

