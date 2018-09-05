<template>
  <div class="popList">
    <div class="headline clearfix" v-if="useTitle">
      <i class="fl"></i>
      <span class="fl">推广</span>
    </div>
    <LazyBox v-if="test"></LazyBox>
    <ul v-else>
      <li v-for="a in 5" :key="a" :style="between">
        <a href="">
          <img src="../images/ad1.webp" alt="">
          <p title="XXXXXXXXXXXXXXXXXXXX">XXXXXXXXXXXXXXXXXXXX</p>
          <div class="info">
            <span>1:50</span>
            <a href="javascript:;">
              <p>稍后再看</p>
            </a>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import LazyBox from './LazyBox'

export default {
  props: {
    useTitle: {
      type: Boolean,
      default: true
    },
    between: {
      type: String,
      default: 'margin-right: 20px;'
    }
  },

  components: {
    LazyBox
  },

  data () {
    return {
      test: false
    }
  }
}
</script>

<style lang="scss" scoped>
.popList{
  box-sizing: border-box;
  width: 880px;
  height: 203px;
  margin-top: 10px;
  margin-bottom: 26px;
  .headline{
    height: 40px;
    line-height: 44px;
    i{
      display: inline-block;
      width: 40px;
      height: 40px;
      background: url('../images/icons.png') no-repeat -141px -75px;
    }
    span{
      display: inline-block;
      color: #000;
      font-size: 24px;
      margin-left: 10px;
    }
  }
  ul{
    width: 100%;
    margin-top: 15px;
    overflow: hidden;
    li{
      width: 160px;
      float: left;
      position: relative;
      &:last-child {
        margin: 0 !important;
      }
      a{
        display: block;
        height: 100%;
        img{
          width: 100%;
          height: 100px;
          border-radius: 4px;
          margin-bottom: 5px;
        }
        &:hover p{
          color: #00A1D6;
        }
        p{
          color: #222;
          line-height: 20px;
          transition: .2s;
        }
        &:hover .info{
          color: #00A1D6;
          opacity: 1;
        }
        .info{
          box-sizing: border-box;
          position: absolute;
          left: 0;
          top: 0;
          width: 160px;
          height: 100px;
          background: rgba(128,128,128, .4);
          border-radius: 4px;
          opacity: 0;
          span{
            display: inline-block;
            color: #FFF0DE;
            transform: scale(0.9, 0.9);
            position: absolute;
            left: 5px;
            top: 85px;
          }
          a{
            width: 22px;
            height: 22px;
            display: inline-block;
            background: url('../images/after.png') no-repeat center;
            position: absolute;
            top: 74px;
            right: 6px;
            &:hover p{
              display: block;
            }
            p{
              position: absolute;
              top: -30px;
              left: -21px;
              width: 64px;
              height: 26px;
              line-height: 26px;
              color: #FFF;
              text-align: center;
              border-radius: 4px;
              background: rgba(0, 0, 0, .8);
              display: none;
            }
          }
        }
      }
    }
  }
}
</style>

