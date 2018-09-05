<template>
  <div>
    <h3>注册</h3>
    <section class="clearfix">
      <input type="text" name="username" placeholder="昵称（例：哔哩哔哩）" v-model="username" class="longType fl" @keyup="sortUserName">
      <span class="fl tips" v-if="shortUserName">你的用户名过短，不允许注册！</span>
      <span class="fl tips" v-if="usedUserName">这个昵称已经有人用过了</span>
      <span class="fl tips" v-if="usernameRequired">请告诉我你的昵称吧</span>
      <span class="fl tips" v-if="errorUsername">昵称含有非法字符</span>
    </section>
    <section class="clearfix">
      <input type="password" name="password" placeholder="密码（6-16个字符组成，区分大小写）" v-model="password" class="longType fl" @keyup="sortPassword">
      <span class="fl tips" v-if="shortPassword">密码不能小于6个字符</span>
      <span class="fl tips" v-if="longPassword">密码不能大于16个字符</span>
      <span class="fl tips" v-if="passwordRequired">请输入密码</span>
    </section>
    <section class="clearfix tel">
      <div class="area fl">
        <select name="area">
          <option value="zn">中国大陆</option>
          <option value="hongong">香港特别行政区</option>
          <option value="aomen">澳门特别行政区</option>
          <option value="taian">台湾地区</option>
        </select>
      </div>
      <input type="text" name="telphone" placeholder="填写常用手机号" class="telephone fl" v-model="tel"  @keyup="sortTel">
      <span class="fl tips" v-if="rightTel && !telRequired">亲，看起来不像手机号呢</span>
      <span class="fl tips" v-if="telRequired">亲，看起来不像手机号呢</span>
    </section>
    <a href="/register/email" class="useEmail">用邮箱注册></a>
    <section class="code clearfix">
      <input type="text" class="longType fl" v-model="code">
      <a href="" class="sendCode">点击获取</a>
      <span class="fl tips" v-if="rightCode">验证码错误</span>
    </section>
    <section class="agree">
      <label for="agreement"><input type="checkbox" id="agreement" v-model="agreement">我已同意<a href="javascript:;">《哔哩哔哩弹幕网用户使用协议》</a>和<a href="javascript:;">《哔哩哔哩弹幕网账号中心规范》</a></label>
    </section>
    <input :disabled="!agreement" type="submit" value="注册" :class="['register', {'agreed': agreement}]"  @click="userRegister"/>
    <a href="/login" class="login">已有账号，直接登录></a>
  </div>
</template>

<script>
import axios from 'axios'
import { setCookie } from '../../utils.js'

export default {
  data() {
    return {
      username: '',
      shortUserName: false,
      usedUserName: false,
      errorUsername: false,
      usernameIsOk: false,
      usernameRequired: false,
      password: '',
      shortPassword: false,
      longPassword: false,
      passwordIsOk: false,
      passwordRequired: false,
      agreement: false,
      tel: '',
      rightTel: false,
      telIsOk: false,
      telRequired: false,
      code: '',
      rightCode: false
    }
  },

  methods: {
    async sortUserName () {
      this.usernameRequired = false
      if (this.username.length < 3) {
        this.errorUsername = false
        this.shortUserName = true
        this.usedUserName = false
      } else {
        this.shortUserName = false
        this.errorUsername = false
        if(!/^\S+$/.test(this.username)) {
          return this.errorUsername = true
        }
        let result = await axios({
          url: 'http://localhost:3000/checkUsername',
          params: {
            username: this.username
          }
        })
        if (result.data.code == 0) {
          this.usedUserName = true
        } else {
          this.usedUserName = false
          this.usernameIsOk = true
        }
      }
    },

    sortPassword () {
      this.passwordRequired = false
      if (this.password.length < 6) {
        this.shortPassword = true
        this.longPassword = false
      } else if(this.password.length > 16) {
        this.longPassword = true
        this.shortPassword = false
      } else {
        this.shortPassword = false
        this.longPassword = false
        this.passwordIsOk = true
      }
    },

    sortTel () {
      this.telRequired = false
      if (!/^1\d{10}$/.test(this.tel)) {
        this.rightTel = true
        this.telIsOk = false
      } else {
        this.rightTel = false
        this.telIsOk = true
      }
    },

    async userRegister () {
      let { username, password, tel} = this
      if(this.usernameIsOk && this.passwordIsOk && this.telIsOk) {
          let res = await axios({
            url: 'http://localhost:3000/register',
            method: 'post',
            params: {
              username,
              password,
              tel
            }
          })
          setCookie('user', username, 14)
          this.$router.push('/')
        } else {
           if (this.username.length === 0) {
             this.usernameRequired = true
           }
            if (this.password.length === 0) {
             this.passwordRequired = true
           }
            if (this.tel.length === 0) {
             this.telRequired = true
           }
        }
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
  font-size: 10px;
}
a{
  color: #00A1D6;
  &:hover{
    color: #F45D90;
  }
}
span{
  color: #F45D90;
}
.longType {
  width: 417px;
  line-height: 40px;
  border: 1px solid #DFDFDF;
  border-radius: 3px;
  padding: 0 10px;
  margin-bottom: 40px;
  margin-left: 282px;
}
.tips{
  padding-top: 12px;
  margin-left: 18px;
}
.tel{
  margin-left: 282px;
  .area{
    width: 89px;
    height: 38px;
    line-height: 38px;
    border: 1px solid #DFDFDF;
    border-radius: 3px;
    margin-right: 6px;
    select{
      color: #757575;
      font-size: 10px;
      border: none;
      outline: none;
      width: 100%;
      height: 100%;
    }
  }
  .telephone {
    width: 317px;
    height: 42px;
    line-height: 42px;
    border: 1px solid #DFDFDF;
    border-radius: 3px;
    padding-left: 10px;
  }
}
.useEmail {
  display: inline-block;
  padding: 12px 0;
  margin-left: 628px;
}
.code{
  position: relative;
  input{
    width: 416px;
  }
  .sendCode{
    position: absolute;
    top: 2px;
    left: 566px;
    display: inline-block;
    color: #fff;
    width: 130px;
    height: 38px;
    line-height: 40px;
    text-align: center;
    background: #00A0DA;
    border-radius: 3px;
  }
}
.login{
  display: inline-block;
  padding: 12px 0;
  margin-left: 580px;
  margin-bottom: 20px;
}
.agree{
  width: 417px;
  margin-left: 282px;
  margin-top: -19px;
  color: #757575;
  line-height: 19px;
  input{
    display: inline-block;
    margin-right: 9px;
  }
}
.register{
  margin-top: 1px;
  margin-left: 282px;
  width: 415px;
  height: 42px;
  line-height: 42px;
  font-size: 14px;
  color: #fff;
  text-align: center;
  border-radius: 3px;
}
.agreed{
  cursor: pointer;
  background: #00A0DA;
}
</style>
