<template>
  <footer class="footContent">
    <div class="container">
      <div class="partnerLink clearfix">
        <dl>
          <dt>bilibili</dt>
          <dd><a href="">关于我们</a></dd>
          <dd><a href="">联系我们</a></dd>
          <dd><a href="">加入我们</a></dd>
          <dd><a href="">友情链接</a></dd>
          <dd><a href="">bilibili认证</a></dd>
          <dd><a href="">Investor Relations</a></dd>
        </dl>
        <dl>
          <dt>传送门</dt>
          <dd><a href="">帮助中心</a></dd>
          <dd><a href="">高级弹幕</a></dd>
          <dd><a href="">活动专题页</a></dd>
          <dd><a href="">侵权申诉</a></dd>
          <dd><a href="">活动中心</a></dd>
          <dd><a href="">用户反馈论坛</a></dd>
          <dd><a href="">壁纸站</a></dd>
          <dd><a href="">名人堂</a></dd>
        </dl>
        <ul>
          <li>
            <a href=""><span>客户端下载</span></a>
          </li>
          <li>
            <a href=""><span>新浪微博</span></a>
          </li>
          <li>
            <a href=""><span>官方微信</span></a>
          </li>
        </ul>
      </div>
      <div class="partnerIcon fl">
        <a href="" class="cover">
          <img src="../images/confirm.png" alt="">
        </a>
        <a href="">
          <img src="../images/websafe.png" alt="">
        </a>
      </div>
      <div class="footInfo fl">
        <p>广播电视节目制作经营许可证：（沪）字第1248号 | 网络文化经营许可证：沪网文[2016]2296-134号 | 信息网络传播视听节目许可证：0910417 | 互联网ICP备案：沪ICP备13002172</p>
        <p>号-3 沪ICP证：沪B2-20100043 | 违法不良信息举报邮箱：help@bilibili.com | 违法不良信息举报电话：4000233233转3 | <a href="">营业执照</a></p>
        <p><a href=""><span class="shreport"></span>上海互联网举报中心</a> |<a href="">12318 全国文化市场举报网站</a> | <a href=""><span class="beian"><img src="../images/beiantubiao.png" alt=""></span>沪公网安备 31011002002436号</a> |<a href="">儿童色情信息举报专区</a></p>
        <p><a href="">网上有害信息举报专区： <span class="report"><img src="../images/12377.png" alt=""></span>中国互联网违法和不良信息举报中心</a></p>
        <p>公司名称：上海宽娱数码科技有限公司 | 公司地址：上海市杨浦区政立路485号 | 客服电话：4000233233</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.footContent{
  height: 322px;
  font-size: 14px;
  background: #F6F9FA;
  a{
    transition: .3s;
    &:hover{
      color: #00A1D6;
    }
  }
  .partnerLink{
    dl{
      float: left;
      width: 400px;
      height: 112px;
      margin-top: 39px;
      border-right: 1px solid #E5E9EF;
      &:first-child{
        dd{
          &:last-child {
            margin-top: 2px;
          }
        }
      }
      &:nth-child(2){
        margin-top: 37px;
        padding-left: 39px;
        dt{
          margin-bottom: 17px;
        }
      }
      dt{
        color: #99A2AA;
        margin-bottom: 18px;
      }
      dd{
        float: left;
        color: #222;
        width: 120px;
        margin-bottom: 11px;
      }
    }
    ul{
      box-sizing: border-box;
      padding-top: 42px;
      padding-left: 45px;
      width: 319px;
      float: right;
      li{
        float: left;
        text-align: center;
        margin-right: 12px;
        a{
          width: 70px;
          display: block;
          text-align: center;
          padding-top: 61px;
          background: url('../images/icons2.png') no-repeat -1019px -196px;
          transition: none;
          span{
            transition: .3s;
          }
        }
        &:nth-child(1) a{
          &:hover{
            background-position: -1085px -196px;
          }
        }
        &:nth-child(2) a{
          background-position: -1019px -324px;
          &:hover{
            background-position: -1085px -324px;
          }
        }
        &:nth-child(3) a{
          background-position: -1019px -68px;
          &:hover{
            background-position: -1085px -68px;
          }
        }
      }
    }
  }
  .partnerIcon{
    position: relative;
    margin-top: 31px;
    width: 96px;
    height: 77px;
    background: url('../images/partner.png') no-repeat;
    a{
      position: absolute;
      left: 0;
      bottom: -41px;
      display: inline-block;
      width: 100px;
      height: 38px;
      border-radius: 4px;
      opacity: 0;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .cover{
      opacity: 1;
    }
  }
  .footInfo{
    padding-top: 31px;
    padding-left: 19px;
    p{
      color: #99A2AA;
      font-size: 10px;
      line-height: 24px;
      a{
        color: #99A2AA;
        &:hover{
          color: #222;
        }
        span{
          margin-top: 5px;
          margin-right: 6px;
          display: inline-block;
          vertical-align: top;
          width: 16px;
          height: 16px;
        }
      }
    }
    .shreport{
      background: url('../images/icons.png') no-repeat -1367px -89px;
    }
    .beian{
      margin-top: 0;
      margin-left: -3px;
      margin-right: 3px;
      width: 20px;
      height: 20px;
      img{
        width: 20px;
        height: 20px;
      }
    }
    .report{
      margin-top: 3px;
      margin-left: -3px;
      margin-right: 3px;
      img{
        width: 16px;
        height: 16px;
      }
    }
  }
}
</style>

