<template>
  <div class="slider" ref="sliderBox">
    <LazyBox v-if="!test"></LazyBox>
    <ul class="sliderImg" :style="sliderStyles" v-if="test">
      <li v-for="(a, index) in sliders" :key="index"><a href=""><img :src="a.img" alt=""></a></li>
      <li><a href=""><img :src="sliders[0].img" alt=""></a></li>
    </ul>
    <ul class="indicator" v-if="test">
      <li v-for="(img,i) in sliders" :key="i" :class="{active: i === index}" @click="changeImg(i)"></li>
    </ul>
    <transition-group tag="div" class="info" name="infoFade" v-if="test">
      <a href="" v-for="(info, i) in sliders" :key="i" v-if="i === index">{{ info.meta }}</a>
    </transition-group>
  </div>
</template>

<script>
import LazyBox from './LazyBox'

export default {
  components: {
    LazyBox
  },

  data () {
    return {
      test: true,
      timer: '',
      translate: '',
      transition: '',
      index: 0,
      sliders: [
        {
          img: require('../images/1.jpg'),
          meta: '护肩少女诞生啦'
        },
        {
          img: require('../images/2.jpg'),
          meta: '生啦'
        },
        {
          img: require('../images/3.jpg'),
          meta: '诞生啦'
        },
        {
          img: require('../images/4.jpg'),
          meta: '护肩女诞生啦'
        },
        {
          img: require('../images/5.jpg'),
          meta: '护肩少女'
        },
      ]
    }
  },

  computed: {
    sliderStyles() {
      return {
        width: `${440 * (this.sliders.length + 1)}px`,
        height: '100%',
        transform: this.translate,
        transition: this.transition
      }
    }
  },

  methods: {
    move() {
      if(this.index == 0){
          this.transition = 'all .3s'
      }
      this.index ++
      this.translate = `translateX(${-440 * this.index}px)`
      if(this.index == 5) {
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
      this.translate = `translateX(${-440 * index}px)`
    }
  },

  mounted() {
    this.slideImg()
    this.$refs.sliderBox.addEventListener('mouseenter', () => {
      clearInterval(this.timer)
    })
    this.$refs.sliderBox.addEventListener('mouseleave', () => {
      this.timer = setInterval(this.move, 5000)
    })
  }
}
</script>

<style lang="scss" scoped>
.infoFade-enter-active, .infoFade-leave-active {
  transition: opacity .5s;
}
.infoFade-enter, .infoFade-leave-to {
  opacity: 0;
}

.slider{
  margin-bottom: 20px;
  width: 440px;
  height: 220px;
  overflow: hidden;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  .sliderImg{
    li{
      width: 440px;
      float: left;
    }
  }
  .indicator{
    position: absolute;
    right: 16px;
    bottom: 0px;
    padding: 7px 0;
    z-index: 9999;
    li{
      margin: 0 4px;
      float: left;
      width: 18px;
      height: 20px;
      line-height: 32px;
      text-align: center;
      background: url('../images/icons.png') no-repeat -855px -790px;
      &:hover{
        cursor: pointer;
        background-position: -919px -790px;
      }
      &.active{
        background-position: -855px  -727px;
      }
    }
  }
  .info{
    width: 100%;
    height: 36px;
    line-height: 36px;
    position: absolute;
    left: 0;
    bottom: 0;
    background-image:linear-gradient(transparent,rgba(0,0,0,.5));
    a{
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      font-size: 14px;
      padding-left: 10px;
      height: 100%;
      color: #fff;
    }
  }
}
</style>
