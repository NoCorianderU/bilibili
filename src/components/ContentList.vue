<template>
  <div class="contentList">
      <LazyBox v-if="test"></LazyBox>
      <ul class="clearfix" v-else>
        <li v-for="(item, index) in 10" :key="index">
          <a href="">
            <img src="../images/ad1.webp" alt="">
            <p title="xxxxxxxxxxxxxxxxxxxxxxx" class="title">【10月】XXXXXXXX</p>
            <div class="maskInfo">
              <span>1:50</span>
            </div>
            <div class="videoInfo">
              <p>
                <span>169.6万</span>
                <span>9.7万</span>
              </p>
            </div>
          </a>
        </li>
      </ul>
    </div>
</template>

<script>
import LazyBox from './LazyBox'

export default {
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
.contentList{
    width: 100%;
    height: 336px;
    ul{
      width: 100%;
      margin-top: 15px;
      li{
        float: left;
        position: relative;
        width: 160px;
        height: 146px;
        margin-right: 20px;
        margin-bottom: 22px;
        overflow: hidden;
        &:nth-child(5n){
          margin-right: 0;
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
          .title{
            color: #222;
            line-height: 20px;
            transition: .2s;
          }
          &:hover .maskInfo{
            color: #00A1D6;
            opacity: 1;
          }
          .maskInfo{
            box-sizing: border-box;
            position: absolute;
            left: 0;
            top: 0;
            width: 160px;
            height: 100px;
            background: rgba(128,128,128, .4);
            border-radius: 4px;
            opacity: 0;
            transition: .2s;
            span{
              display: inline-block;
              color: #FFF0DE;
              transform: scale(0.9, 0.9);
              position: absolute;
              left: 5px;
              top: 85px;
            }
          }
        }
        &:hover .videoInfo{
          bottom: -20px;
        }
        .videoInfo{
          position: absolute;
          left: 0;
          bottom: -1px;
          background: #fff;
          padding-top: 5px;
          transition: .3s;
          p{
            span{
              display: inline-block;
              height: 12px;
              line-height: 12px;
              color: #99A2AA;
              padding-left: 17px;
              margin-right: 17px;
              background: url('../images/icons.png') no-repeat -282px -90px;
              &:nth-child(2){
                background-position: -282px -218px;
              }
            }
          }
        }
      }
    }
  }
</style>

