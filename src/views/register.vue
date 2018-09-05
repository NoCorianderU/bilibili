<template>
  <section  class="register">
    <header class="container">
      <HeadNavB></HeadNavB>
    </header>
    <div class="userInfo">
      <router-view></router-view>
    </div>
  </section>
</template>

<script>
import HeadNavB from "@/components/HeadNavB"

export default {
  components: {
    HeadNavB
  }
}
</script>

<style lang="scss" scoped>
.register {
  margin-top: 42px;
  border-top: 86px solid #00A0D8;
  .userInfo {
    margin: -128px auto 0;
    width: 980px;
    padding-top: 109px;
    background: url('../images/zhuce.png') no-repeat center top;
    display: flex;
    flex-direction: column;
  }
}
</style>

