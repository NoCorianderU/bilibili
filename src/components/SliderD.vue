<template>
  <div class="slider2" ref="sliderBox2">
    <ul class="sliderImg" :style="sliderStyles">
      <li v-for="(a,index) in sliders" :key="index"><a href="">
        <img :src="a.img" alt=""></a>
      </li>
    </ul>
    <ul class="indicator">
      <li v-for="(img,i) in sliders" :key="i" :class="{active: i === index}" @click="changeImg(i)"></li>
    </ul>
    <div class="imgInfo">
    </div>
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
          img: 'http://i0.hdslb.com/bfs/bangumi/9da08dbaf7de75aeb8ae4b74dcaeac50c9cab332.jpg@260w_90h.webp'
        },
        {
          img: 'http://i0.hdslb.com/bfs/bangumi/9da08dbaf7de75aeb8ae4b74dcaeac50c9cab332.jpg@260w_90h.webp'
        }
      ]
    }
  },

  computed: {
    sliderStyles() {
      return {
        width: `${260 * (this.sliders.length)}px`,
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
      this.index ++
      this.translate = `translateX(${-260 * this.index}px)`
      if(this.index > 1) {
        this.index = 0
        this.translate = `translateX(0px)`
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
    this.$refs.sliderBox2.addEventListener('mouseenter', () => {
      clearInterval(this.timer)
    })
    this.$refs.sliderBox2.addEventListener('mouseleave', () => {
      this.timer = setInterval(this.move, 5000)
    })
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.slider2{
  width: 260px;
  height: 90px;
  overflow: hidden;
  position: relative;
  border-radius: 4px;
  margin-top: 15px;
  margin-bottom: -10px;
  overflow: hidden;
  .sliderImg{
    li{
      position: relative;
      width: 260px;
      float: left;
    }
  }
  .indicator{
    position: absolute;
    right: 20px;
    bottom: 0;
    z-index: 10;
    padding: 9px 0;
    li{
      float: left;
      width: 9px;
      height: 6px;
      margin-left: 8px;
      border-radius: 3px;
      background: #fff;
      transition: .3s;
      &:hover{
        cursor: pointer;
      }
      &.active{
        width: 30px;
        background: #F45E8F;
      }
    }
  }
  .imgInfo{
    width: 100%;
    height: 30px;
    line-height: 30px;
    position: absolute;
    left: 0;
    bottom: 0;
    background-image:linear-gradient(transparent,rgba(0,0,0,.5));
  }
}
</style>

