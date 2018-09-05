
export const sideNav = {
  sideNavMove () {
    let sideNav = document.getElementById('sideNav')
    window.onscroll = function () {
      if (document.body.scrollTop >= 300) {
        sideNav.style.transform = "translateY(-157px)"
      } else {
        sideNav.style.transform = "translateY(0)"
      }
    }
  },

  toTop () {
    let scrollTop = document.body.scrollTop || document.documentElement.scrollTop
    let step = parseInt(scrollTop / 15)
    let toTopInterval = window.setInterval( () => {
      let scrollTop = document.body.scrollTop || document.documentElement.scrollTop
      if (scrollTop > 0) {
        scrollTop -= step
        if (scrollTop <= 0) {
          scrollTop = 0
        }
        document.body.scrollTop = scrollTop
        document.documentElement.scrollTop = scrollTop
      } else {
        clearInterval(toTopInterval)
      }
    }, 20)
  }
}

export const imgAnim = {

  gifMove (obj) {
    clearInterval(obj.timer)
    obj.timer = setInterval(() => {
      if (obj.index < obj.num) {
        obj.index ++
        obj.bgPosition = `background-position: ${-80 * obj.index}px`
      }
       else {
         if (obj.backForth) {
           this.backAndForth(obj)
         } else {
          obj.index = 0
          obj.bgPosition = `background-position: ${-80 * obj.index}px`
         }
      }
    }, obj.duration)
  },

  backAndForth (obj) {
    clearInterval(obj.timer)
    obj.timer = setInterval(() => {
      if(obj.index > 9) {
        obj.index --
        obj.bgPosition = `background-position: ${-80*obj.index}px`
      } else {
        this.gifMove(obj)
      }
    }, obj.duration)
  },

  gifBack (obj) {
    clearInterval(obj.timer)
    obj.timer = setInterval(() => {
      if(obj.index > 0) {
        obj.index --
        obj.bgPosition = `background-position: ${- 80 * obj.index}px`
      }
    }, obj.duration)
  },
}
