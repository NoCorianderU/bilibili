<template>
    <div class="recommandList">
      <LazyBox v-if="test"></LazyBox>
      <ul v-else>
        <!-- <li v-for="list in 8" :key="list"> -->
        <li>
          <router-link to="/video/1" target="_blank">
            <img src="../images/b1.jpg" alt="">
            <p class="title">史上最BUG的世界杯</p>
            <div class="recommandInfo">
              <p>史上最BUG的世界</p>
              <span>up主：AAA<br>播放：100.0万</span>
              <a href="javascript:;">
                <p>稍后再看</p>
              </a>
            </div>
          </router-link>
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
.recommandList{
  width: 720px;
  height: 220px;
  ul{
    li{
      float: left;
      margin-left: 20px;
      margin-bottom: 20px;
      width: 160px;
      height: 100px;
      position: relative;
      left: 0;
      top: 0;
      a{
        display: block;
        height: 100%;
        img{
          width: 100%;
          height: 100%;
          border-radius: 4px;
        }
        .title{
          box-sizing: border-box;
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          line-height: 18px;
          padding: 10px 5px 3px;
          color: #fff;
          background-image:linear-gradient(transparent,rgba(0,0,0,.5));
          overflow: hidden;
          padding-top: 8px;
          border-radius: 4px;
        }
        &:hover {
          .title{
            opacity: 0;
          }
          div{
            opacity: 1;
            span{
              opacity: 1;
            }
          }
        }
        .recommandInfo{
          box-sizing: border-box;
          position: absolute;
          left: 0;
          top: 0;
          width: 160px;
          height: 100px;
          line-height: 20px;
          border-radius: 4px;
          padding: 10px 5px;
          background: rgba(0, 0, 0, .7);
          color: #fff;
          opacity: 0;
          span{
            display: block;
            position: absolute;
            left: 5px;
            bottom: 5px;
            color: #99A2AA;
            opacity: 0;
            transition: .5s;
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
              background: rgba(0, 0, 0, .7);
              display: none;
            }
          }
        }
      }
    }
  }
}
</style>

