<template>
    <div class="ad">
      <a href="">
        <img src="../images/ad2.jpg" alt="">
        <span class="adTip"></span>
      </a>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.ad{
  height: 96px;
  margin-top: 30px;
  margin-bottom: -10px;
  a{
      display: block;
      height: 100%;
      position: relative;
      img{
        width: 100%;
        height: 100%;
        border-radius: 5px;
      }
    }
}
.adTip{
  display: inline-block;
  width: 32px;
  height: 20px;
  background: url('../images/ad.png') no-repeat center;
  position: absolute;
  left: 0;
  bottom: 0;
}
</style>

