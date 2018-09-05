<template>
  <div class="column">
    <div class="status">
      <a href="" class="fl">在线人数：2301428</a>
      <span class="fl"></span>
      <a href="" class="fl">最新投稿：31109</a>
    </div>
    <div class="adpos">
      <a href="">
        <img src="../images/column1.jpg" alt="">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isAd: false
    }
  }
}
</script>

<style lang="scss" scoped>
.column{
  padding-top: 20px;
  margin-bottom: 25px;
  .status{
    box-sizing: border-box;
    width: 260px;
    height: 34px;
    line-height: 35px;
    border-radius: 4px;
    padding: 0 12px;
    background: #E5E9EF;
    align-self: auto;
    a{
      color: #6D757A;
      display: inline-block;
      transition: .5s;
      &:hover{
        color: #00A1D6;
      }
    }
    span{
      display: inline-block;
      width: 1px;
      height: 10px;
      margin: 12px 15px 0;
      background: #B8C0CC;
    }
  }
  .adpos{
    margin-top: 10px;
    width: 260px;
    height: 150px;
    a{
      display: block;
      height: 100%;
      position: relative;
      img{
        width: 100%;
        height: 100%;
        border-radius: 4px;
      }
      span{
        display: inline-block;
        color: rgba(128, 128, 128, .7);
        width: 28px;
        height: 16px;
        line-height: 16px;
        text-align: center;
        border: 1px solid rgba(128, 128, 128, .7);
        border-radius: 1px;
        position: absolute;
        left: 4px;
        bottom: 5px;
      }
    }
  }
}
</style>

