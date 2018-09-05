<template>
  <section>
    <h3>注册</h3>
    <div>
        <input type="text" name="username" placeholder="填写常用邮箱" class="longType">
        <a href="/register/phone" class="useEmail">用手机注册></a>
        <section class="code">
          <input type="text" class="longType" placeholder="验证码">
        </section>
        <section class="agree">
          <label for="agreement"><input type="checkbox" id="agreement" v-model="agreement">我已同意<a href="">《哔哩哔哩弹幕网用户使用协议》</a>和<a href="">《哔哩哔哩弹幕网账号中心规范》</a></label>
        </section>
        <input :disabled="!agreement" type="submit" value="发送验证邮件" :class="['register', {'agreed': agreement}]"/>
        <a href="/login" class="login">已有账号，直接登录></a>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      agreement: false
    }
  }
}
</script>

<style lang="scss" scoped>
h3{
  position: relative;
  font-size: 38px;
  color: #45484D;
  font-weight: normal;
  text-align: center;
  margin-bottom: 16px;
  &::before{
    position: absolute;
    top: 25px;
    left: 0;
    display:inline-block;
    content: '';
    width: 432px;
    height: 1px;
    background: #DDD;
  }
  &::after{
    position: absolute;
    top: 25px;
    left: 548px;
    display:inline-block;
    content: '';
    width: 432px;
    height: 1px;
    background: #DDD;
  }
}
input {
  display: block;
  box-sizing: border-box;
  color: #757575;
}
a{
  color: #00A1D6;
  &:hover{
    color: #F45D90;
  }
}
.longType {
  width: 400px;
  height: 42px;
  line-height: 50px;
  border: 1px solid #DFDFDF;
  border-radius: 3px;
  padding: 0 10px;
  margin-top: 8px;
  margin-left: 290px;
}
.useEmail {
  display: inline-block;
  padding: 13px 0 5px;
  margin-left: 621px;
}
.code{
  position: relative;
  input{
    width: 240px;
  }
}
.agree{
  width: 405px;
  margin-left: 289px;
  margin-top: 13px;
  color: #757575;
  line-height: 19px;
  input{
    display: inline-block;
    margin-right: 9px;
  }
}
.register{
  margin-top: 9px;
  margin-left: 290px;
  width: 400px;
  height: 42px;
  line-height: 42px;
  font-size: 14px;
  color: #AAA;
  text-align: center;
  border-radius: 3px;
  background: #F9F9F9;
}
.agreed{
  cursor: pointer;
  background: #00A0DA;
}
.login{
  display: inline-block;
  padding: 13px 0;
  margin-left: 573px;
  margin-bottom: 200px;
}
</style>

