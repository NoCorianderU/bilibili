<template>
  <div class="specilaRecom">
    <div class="headline clearfix">
      <i class="fl"></i>
      <span class="fl">特别推荐</span>
    </div>
    <ul>
      <li>
        <a href="">
          <img src="../images/cc1.webp" alt="">
          <p title="『真鱼』2018第43期Animelo mix动画单曲周榜">『真鱼』2018第43期Animelo mix动画单曲周榜</p>
          <div class="info">
            <a href="javascript:;">
              <p>稍后再看</p>
            </a>
          </div>
        </a>
        <div class="authorInfo">
          <a href="">
            <img src="../images/author1.webp" alt="">
            <p>残星什么的残星什么的残星什么的</p>
          </a>
          <span>推荐</span>
        </div>
      </li>
    </ul>
    <a href="" class="ban">
      <img src="../images/ban.webp" alt="">
    </a>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.specilaRecom{
  margin: 20px 0 46px;
  position: relative;
  .headline{
    height: 40px;
    line-height: 44px;
    i{
      display: inline-block;
      width: 40px;
      height: 40px;
      background: url('../images/icons.png') no-repeat -141px -780px;
    }
    span{
      display: inline-block;
      color: #000;
      font-size: 24px;
      margin-left: 10px;
    }
  }
  ul{
    width: 900px;
    overflow: hidden;
    margin: 15px 0 26px;
    li{
      width: 160px;
      float: left;
      margin-right: 20px;
      position: relative;
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
          margin-top: 16px;
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
          border-radius: 4px;
          opacity: 0;
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
              top: -46px;
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
      .authorInfo{
        position: absolute;
        top: 99px;
        left: 0;
        height: 24px;
        padding-left: 5px;
        a{
          display: inline-block;
          img{
            margin-top: -25px;
            width: 45px;
            height: 45px;
            border: 2px solid #FFF;
            border-radius: 50%;
          }
          p{
            margin-top: 0;
            vertical-align: top;
            width: 69px;
            line-height: 24px;
            display: inline-block;
            text-overflow:ellipsis;
            overflow:hidden;
            white-space:nowrap;
          }
        }
        span{
          vertical-align: top;
          line-height: 24px;
          display: inline-block;
          color: #AAA;
        }
      }
    }
  }
  .ban{
    position: absolute;
    top: 55px;
    right: 0;
    display: inline-block;
    width: 260px;
    height: 150px;
    img{
      width: 100%;
      height: 100%;
      border-radius: 4px;
    }
  }
}
</style>

