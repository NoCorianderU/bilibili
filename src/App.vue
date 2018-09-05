<template>
  <div id="app">
    <router-view></router-view>
    <FootBox></FootBox>
  </div>
</template>

<script>
import FootBox from "@/components/FootBox"

export default {
  components: {
    FootBox
  },

  created () {
    // this.$store.dispatch("requestUserInfo")
  }
}
</script>

<style>

</style>
