<template>
  <div class="userComment">
    <div class="commentInput clearfix">
      <img src="../images/user.webp" alt="" class="fl">
      <textarea name="text" id="" cols="80" rows="5" placeholder="请自觉遵守互联网相关的政策法规，严禁发布色情、暴力、反动的言论。" class="fl"></textarea>
      <button type="submit" class="fl">发表评论</button>
    </div>
    <a href="javascript:;" class="emoji"><i class="iconfont icon-xiaolian"></i><span>表情</span></a>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.userComment {
  position: relative;
  padding-left: 5px;
  width: 100%;
  .commentInput {
    height: 65px;
    img {
      margin-top: 7px;
      width: 48px;
      height: 48px;
      border-radius: 50%;
    }
    textarea {
      margin-left: 32px;
      resize: none;
      box-sizing: border-box;
      padding: 5px 0 0 10px;
      width: 705px;
      height: 65px;
      font-family: "微软雅黑";
      font-size: 10px;
      border: 1px solid #E5E9EF;
      border-radius: 4px;
      background: #F4F5F7;
      &:hover {
        border-color: #00A1D6;
        background: #fff;
      }
    }
    .focus {
      border-color: #00A1D6;
      background: #fff;
    }
    button {
      box-sizing: border-box;
      margin-left: 10px;
      padding: 14px 21px 12px;
      width: 70px;
      font-size: 14px;
      line-height: 19px;
      color: #fff;
      background: #00A1D6;
      border-radius: 4px;
      cursor: pointer;
      transition: .3s;
      &:hover {
        background: #00B5E5;
      }
    }
  }
  .emoji {
    position: absolute;
    top: 69px;
    left: 86px;
    box-sizing: border-box;
    width: 68px;
    height: 26px;
    color: #99A2AA;
    line-height: 26px;
    text-align: center;
    background: #fff;
    border: 1px solid #E5E9EF;
    border-radius: 4px;
    &:hover {
      color: #6D757A;
    }
    i {
      margin-right: 5px;
      font-size:16px;
    }
    span {
      display: inline-block;
      margin-top: 2px;
      line-height: 24px;
      vertical-align: top;
    }
  }
}
</style>

