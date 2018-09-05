<template>
  <div class="slider2" ref="sliderBox2">
    <ul class="sliderImg clearfix" :style="sliderStyles">
      <li v-for="(a,index) in sliders" :key="index"><a href="">
        <img :src="a.img" alt=""></a>
      </li>
      <li>
        <a href=""><img :src="sliders[0].img" alt=""></a>
      </li>
    </ul>
    <ul class="indicator">
      <li v-for="(img,i) in sliders" :key="i" :class="{active: i === index}" @click="changeImg(i)"></li>
    </ul>
    <div class="imgInfo">
      <a href="">{{ info }}</a>
    </div>
    <a href="javascript:;" class="photoAlbum"></a>
    <a href="javascript:;" class="shortVideos"></a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timer: '',
      translate: '',
      transition: 'all .3s',
      index: 0,
      sliders: [
        {
          img: 'https://i0.hdslb.com/bfs/live/3051add0b42cfee616acbad6d1de928795bdf310.jpg@260w_248h.webp',
          msg: "火箭少女101诞生啦！"
        },
        {
          img: 'https://i0.hdslb.com/bfs/live/dd764de8e6f7caaba1f5a5ca31de89c70c8c331d.jpg@260w_248h.webp',
          msg: "萨达大萨达撒打算打算"
        },
        {
          img: 'https://i0.hdslb.com/bfs/live/72864794181f60bc7143a47b4469465fb4efd85f.jpg@260w_248h.webp',
          msg: "萨达大萨达撒打算打算"
        }
      ]
    }
  },

  computed: {
    sliderStyles() {
      return {
        width: `${260 * (this.sliders.length + 1)}px`,
        height: '100%',
        transform: this.translate,
        transition: this.transition
      }
    },
    info() {
      return this.sliders[this.index].msg
    }
  },

  methods: {
    move() {
      if(this.index == 0){
          this.transition = 'all .3s'
      }
      this.index ++
      this.translate = `translateX(${-260 * this.index}px)`
      if(this.index == this.sliders.length) {
        this.index = 0
        window.setTimeout(() => {
          this.transition = ''
          this.translate = `translateX(0px)`
        }, 300)
      }
    },
    slideImg() {
      this.timer = setInterval(this.move, 5000)
    },
    changeImg(index) {
      this.index = index
      this.transition = 'all .3s'
      this.translate = `translateX(${-260 * index}px)`
    }
  },

  mounted() {
    this.slideImg()
    // this.$refs.sliderBox.addEventListener('mouseenter', () => {
    //   clearInterval(this.timer)
    // })
    // this.$refs.sliderBox.addEventListener('mouseleave', () => {
    //   this.timer = setInterval(this.move, 5000)
    // })
  }
}
</script>

<style lang="scss" scoped>
.slider2{
  width: 260px;
  height: 311px;
  position: relative;
  border-radius: 4px;
  margin-top: 20px;
  overflow: hidden;
  .sliderImg{
    li{
      position: relative;
      width: 260px;
      height: 248px;
      float: left;
    }
  }
  .indicator{
    box-sizing: border-box;
    position: absolute;
    right: 0;
    bottom: 63px;
    width: 260px;
    height: 24px;
    border-radius: 0 0 4px 4px;
    padding-left: 93px;
    padding-top: 10px;
    z-index: 10;
    background: rgba(0,0,0,.7);
    li{
      float: left;
      width: 10px;
      height: 6px;
      margin-left: 8px;
      border-radius: 3px;
      background: #fff;
      transition: .3s;
      &:hover{
        cursor: pointer;
      }
      &.active{
        width: 20px;
        background: #F45E8F;
      }
    }
  }
  .imgInfo{
    width: 100%;
    height: 27px;
    line-height: 30px;
    position: absolute;
    left: 0;
    bottom: 87px;
    border-radius: 0 3px;
    a{
      display: block;
      padding-left: 10px;
      height: 100%;
      color: #fff;
      background: rgba(0,0,0,.5);
    }
  }
  .photoAlbum{
    display: inline-block;
    width: 127px;
    height: 43px;
    background: url('../images/xb.png') no-repeat;
    position: absolute;
    left: 0;
    top: 268px;
  }
  .shortVideos{
    display: inline-block;
    width: 127px;
    height: 43px;
    background: url('../images/sp.png') no-repeat;
    position: absolute;
    left: 133px;
    top: 268px;
  }
}
</style>

