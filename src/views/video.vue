<template>
  <div class="videoPage">
    <div class="container">
      <HeadNav/>
    </div>
    <div class="container">
      <Banner/>
      <NavList/>
    </div>
    <Video/>
  </div>
</template>

<script>
import HeadNav from "@/components/HeadNav"
import Banner from "@/components/Banner"
import NavList from "@/components/NavList"
import Video from "@/components/Video"

export default {
   components: {
    HeadNav,
    Banner,
    NavList,
    Video
   },

  props:  ['av'],

   mounted () {
    //  console.log(this.$route.params.av)
    // document.title = '笑笑西卡德云色 18.7.30 今夜惊喜集体活动_' + document.title
   }
}
</script>

<style lang="scss" scoped>

</style>
