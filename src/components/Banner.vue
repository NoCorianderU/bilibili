<template>
  <div class="banner">
    <div class="banner_link">
      <a href="javascript:;"></a>
    </div>
    <div class="container">
      <span class="tip">
        <a href="">炎炎夏日一次看个够！</a>
      </span>
      <div class="logo">
        <h1>
          <a href="/">哔哩哔哩 (゜-゜)つロ 干杯~-bilibili</a>
        </h1>
      </div>
      <div class="search_box">
        <a href="" class="rank_btn"><span class="fl"></span>排行榜</a>
        <div class="searchInput">
          <input type="text" placeholder="女皇大人奋斗史">
          <button class="search_btn"></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.banner{
  &:hover span{
    opacity: 1;
  }
  .banner_link{
    width: 100%;
    position: absolute;
    left: 0;
    height: 128px;
    background-image: url('../images/banner2.png');
    background-repeat:  no-repeat;
    background-position: center -52px;
    z-index: 10;
    a {
      display: block;
      height: 128px;
    }
  }
  .tip{
    position: absolute;
    left: 255px;
    top: 72px;
    width: 160px;
    height: 32px;
    line-height: 32px;
    display: block;
    background: rgba(0, 0, 0, .7);
    border-radius: 5px;
    text-align: center;
    transition: 0.2s;
    opacity: 0;
    z-index: 999;
    a{
      display: block;
      height: 100%;
      color: #fff;
    }
  }
  .container{
    position: relative;
    height: 128px;
    left: 0;
    top: 0;
    .logo{
      position: absolute;
      left: 24px;
      top: 13px;
      width: 220px;
      height: 105px;
      z-index: 9999;
      h1{
        text-indent: -9999em;
        height: 100%;
        a{
          height: 100%;
          display: block;
          background: url('../images/logo2.png') no-repeat center / 220px 105px;
        }
      }
    }
    .search_box{
      position: absolute;
      top: 72px;
      right: 0;
      box-sizing: border-box;
      width: 342px;
      height: 36px;
      padding: 2px;
      background: rgba(0,0,0,.12);
      border-radius: 6px;
      z-index: 11;
      .rank_btn{
        float: left;
        display: block;
        width: 68px;
        height: 32px;
        line-height: 32px;
        margin-right: 2px;
        border-radius: 4px;
        color: #F25D8E;
        background: hsla(0,0%,100%,.88);
        transition: .2s;
        &:hover{
          background: hsla(0,0%,100%,1);
        }
        span{
          display: inline-block;
          width: 26px;
          height: 32px;
          background: url('../images/icons.png') no-repeat -659px -655px;
        }
      }
      .searchInput {
        &:hover{
          input {
            background: hsla(0,0%,100%,1);
          }
        }
        input {
          box-sizing: border-box;
          font-size: 11px;
          color: #818586;
          width: 268px;
          height: 32px;
          line-height: 32px;
          padding-left: 12px;
          border-radius: 4px;
          background: hsla(0,0%,100%,.88);
          transition: .2s;
        }
        .search_btn{
          float: right;
          display: block;
          position: relative;
          top: -32px;
          width: 36px;
          height: 32px;
          background: transparent url('../images/icons.png') no-repeat -663px -720px;
          border-radius: 0 4px 4px 0;
          &:hover{
            cursor: pointer;
            background-position: -728px -720px;
          }
          z-index: 12;
        }
      }
    }
  }
}
</style>
