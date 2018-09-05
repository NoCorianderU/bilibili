<template>
  <div class="rankList">
    <h3>排行</h3>
    <LazyBox v-if="!test"></LazyBox>
    <ul class="time" v-if="test">
      <li>三日<span class="down"></span></li>
      <li class="hide"><a href="javascript:;">一周</a></li>
    </ul>
    <ul class="list" v-if="test">
      <li v-for="(item, i) in data" :key="i" v-if="i < listLength">
        <i>{{ i+1 }}</i>
        <a href="" :title="item.name+' 播放量'+item.times">{{ item.name }}<span>全13话</span></a>
        <div class="listInfo">
          <div class="infoTop">
            <img :src="item.cover">
            <p class="infoTitle">戒律的复活</p>
            <p class="infoState">已完结，全24话</p>
          </div>
          <div class="infoBot">
            <span>{{ item.a }}万</span>
            <span>{{ item.b }}万</span>
            <span>{{ item.c }}万</span>
          </div>
        </div>
      </li>
    </ul>
    <a href="" class="moreVideos" v-if="test">查看更多<span class="more"></span></a>
  </div>
</template>

<script>
import LazyBox from './LazyBox'

export default {
  components: {
    LazyBox
  },

  props: {
    listLength: {
      type: Number,
      default: 10
    }
  },

  data () {
    return {
      test: false,
      data: [
        {
          name: 'Megalo Box',
          times: 215487,
          cover: 'data:image/webp;base64,UklGRv4EAABXRUJQVlA4IPIEAAAQFwCdASpIAEgAPpE4l0iloyIhK5xrgLASCWMAx9xxS5fbe+s+1O5fGeEOlfnju+jqE9Kf9u1/WAXUYnBtoKG5Z6kd84RhJcGSdkl6seEVsCfPBOVKmDMbXIWxsYfV88NQ/tbX8bIf1UHnm+9aZI12DLNaa2fZsHNCRieq2CiKAtEHh/dyTGYwj/hzdb75ou0yYrbC3PnUNWjN/CetG8ysOCj1dRfpqNK3YoIt4Ny9lLcB4zYK0Ce4p/VouTQ3mFgAAP74Tgu9vkgWuNvpTq3ysDXaejaMzZ2gWoudVApyzRY+jiV7a7YMmEzDyUf94nR81iG6+lcFiJfTI/3RKH+hW8QQGRiMF8EkAmIf4f+7zZFt8pJTX83FcxvokkpEs6UWAQ4Jg+e8yn2XDOjMpll6eqQE8MJjbixEIr3xto5/d7zRapfjaWLVIaL5MO8CnlrMe52H68NnnLtS64jxx8mtXCzQJUEBSbmzXYJuf8Vep/vQ2kcpoEn4n5h9pVYQDCVgjmrWKe/er1+E0O4TPZF5cv9HKz/QxT0Ytm8CwhUkacDkcTgra8rx11vog0XjKpUZ3VpgBJkMhxe+pVeRB8XB04L75v1R0YTuD1rRNNiljszRsuu1cikv+1/cLnnLIrtIUIAiM/Svdr4apyTOhxyIisgvdSTyqqWGyRhtYrdv6/5GYELuiCc/BGubZSGm3xknSmKUnEQQybf22EHcSC4fq0abR9zUmbSxuhxfjLTfpjjB8AiiGV5JBbE6qyvlTkEgx0/1/pofSzgob/By7DGRZKwcppeceYFIcf5bqeb7vWlkNGXA3B/ffe4fMpICQBpMgzjsSoLeTeu+vfrMex0uLzhWZkGjjkxgrw2fd7SaBdhmGcI7i4kGIYHiBd50LTZ84C+gFRFXttf/+3/AYVrMjVh3c1E+Zg2imRM45RJH4s+8B3GYclSKy3NDtqb6whIxMSAmZO3Xyhitg5IGU4vZ9UD64fXrVNG0XPl0ggpmwbMKXY/rt5bhGRKfIDzLlk41RAGMXua6lK9cI9NcRPsxMkt0kIf1XdFOv5Z7IVuRDgduWSst0ACgly8cJ7ts/pKpkkNQN+DEg7EYScq3+k/Dyx0/Gl4rn4Agdn/mP7ojO89rA2mhxnRWXoruuOzOMcph8R2gje2VRKW/39Z7xlTJ8nx3qD83Eko0byaZmb+erLnAsAJ5HS5D8kyqArmWAzXyzyDkrITAI5woyra3lOm8sz7yhknCJMRzZeEyZOp5R6NPwMJDSeuvhFHWlUWm2x+E33+pUBkwLUarMrARtCOtOH2uJ21nyzS5+288zRUoL1N2Qs12wlmJHuhcXtJGmxVMlKoQbTYMxG17HbL/vqCVEDAJHXJDwzdqVOspwl/dANFUUCnrFyZj7EqfByTRGN8rtzPj7rV78snm7ai07lZZBhjXYikWpsVIbga+aJT4w6C5peN3CI/T2SmoimI1ty/HuHyy9pCaZnHSTD/P9Vywr4ilp6TxAUtMbAAZ9TxxXWDb5jMwvBINaguzlNHz9gWh/1/43FfxRt/YsqkmNCZ4SweR7m6ZExjVEQTD3UElGAhwbeh9A3iY7r6J6Lv+drWx4Um41i65AHcb+ZB9KccS8/rtO2I8gYxP2JuS57eqXFR1Zr+uznw/hXfhBWRTA7b0aWwwaSIu2IAoaEHFdIBdPgA=',
          a: 4562.2,
          b: 36.2,
          c: 155.5
        },
        {
          name: 'Megalo Box',
          times: 215487,
          cover: 'data:image/webp;base64,UklGRv4EAABXRUJQVlA4IPIEAAAQFwCdASpIAEgAPpE4l0iloyIhK5xrgLASCWMAx9xxS5fbe+s+1O5fGeEOlfnju+jqE9Kf9u1/WAXUYnBtoKG5Z6kd84RhJcGSdkl6seEVsCfPBOVKmDMbXIWxsYfV88NQ/tbX8bIf1UHnm+9aZI12DLNaa2fZsHNCRieq2CiKAtEHh/dyTGYwj/hzdb75ou0yYrbC3PnUNWjN/CetG8ysOCj1dRfpqNK3YoIt4Ny9lLcB4zYK0Ce4p/VouTQ3mFgAAP74Tgu9vkgWuNvpTq3ysDXaejaMzZ2gWoudVApyzRY+jiV7a7YMmEzDyUf94nR81iG6+lcFiJfTI/3RKH+hW8QQGRiMF8EkAmIf4f+7zZFt8pJTX83FcxvokkpEs6UWAQ4Jg+e8yn2XDOjMpll6eqQE8MJjbixEIr3xto5/d7zRapfjaWLVIaL5MO8CnlrMe52H68NnnLtS64jxx8mtXCzQJUEBSbmzXYJuf8Vep/vQ2kcpoEn4n5h9pVYQDCVgjmrWKe/er1+E0O4TPZF5cv9HKz/QxT0Ytm8CwhUkacDkcTgra8rx11vog0XjKpUZ3VpgBJkMhxe+pVeRB8XB04L75v1R0YTuD1rRNNiljszRsuu1cikv+1/cLnnLIrtIUIAiM/Svdr4apyTOhxyIisgvdSTyqqWGyRhtYrdv6/5GYELuiCc/BGubZSGm3xknSmKUnEQQybf22EHcSC4fq0abR9zUmbSxuhxfjLTfpjjB8AiiGV5JBbE6qyvlTkEgx0/1/pofSzgob/By7DGRZKwcppeceYFIcf5bqeb7vWlkNGXA3B/ffe4fMpICQBpMgzjsSoLeTeu+vfrMex0uLzhWZkGjjkxgrw2fd7SaBdhmGcI7i4kGIYHiBd50LTZ84C+gFRFXttf/+3/AYVrMjVh3c1E+Zg2imRM45RJH4s+8B3GYclSKy3NDtqb6whIxMSAmZO3Xyhitg5IGU4vZ9UD64fXrVNG0XPl0ggpmwbMKXY/rt5bhGRKfIDzLlk41RAGMXua6lK9cI9NcRPsxMkt0kIf1XdFOv5Z7IVuRDgduWSst0ACgly8cJ7ts/pKpkkNQN+DEg7EYScq3+k/Dyx0/Gl4rn4Agdn/mP7ojO89rA2mhxnRWXoruuOzOMcph8R2gje2VRKW/39Z7xlTJ8nx3qD83Eko0byaZmb+erLnAsAJ5HS5D8kyqArmWAzXyzyDkrITAI5woyra3lOm8sz7yhknCJMRzZeEyZOp5R6NPwMJDSeuvhFHWlUWm2x+E33+pUBkwLUarMrARtCOtOH2uJ21nyzS5+288zRUoL1N2Qs12wlmJHuhcXtJGmxVMlKoQbTYMxG17HbL/vqCVEDAJHXJDwzdqVOspwl/dANFUUCnrFyZj7EqfByTRGN8rtzPj7rV78snm7ai07lZZBhjXYikWpsVIbga+aJT4w6C5peN3CI/T2SmoimI1ty/HuHyy9pCaZnHSTD/P9Vywr4ilp6TxAUtMbAAZ9TxxXWDb5jMwvBINaguzlNHz9gWh/1/43FfxRt/YsqkmNCZ4SweR7m6ZExjVEQTD3UElGAhwbeh9A3iY7r6J6Lv+drWx4Um41i65AHcb+ZB9KccS8/rtO2I8gYxP2JuS57eqXFR1Zr+uznw/hXfhBWRTA7b0aWwwaSIu2IAoaEHFdIBdPgA=',
          a: 4562.2,
          b: 36.2,
          c: 155.5
        },
        {
          name: 'Megalo Box',
          times: 215487,
          cover: 'data:image/webp;base64,UklGRv4EAABXRUJQVlA4IPIEAAAQFwCdASpIAEgAPpE4l0iloyIhK5xrgLASCWMAx9xxS5fbe+s+1O5fGeEOlfnju+jqE9Kf9u1/WAXUYnBtoKG5Z6kd84RhJcGSdkl6seEVsCfPBOVKmDMbXIWxsYfV88NQ/tbX8bIf1UHnm+9aZI12DLNaa2fZsHNCRieq2CiKAtEHh/dyTGYwj/hzdb75ou0yYrbC3PnUNWjN/CetG8ysOCj1dRfpqNK3YoIt4Ny9lLcB4zYK0Ce4p/VouTQ3mFgAAP74Tgu9vkgWuNvpTq3ysDXaejaMzZ2gWoudVApyzRY+jiV7a7YMmEzDyUf94nR81iG6+lcFiJfTI/3RKH+hW8QQGRiMF8EkAmIf4f+7zZFt8pJTX83FcxvokkpEs6UWAQ4Jg+e8yn2XDOjMpll6eqQE8MJjbixEIr3xto5/d7zRapfjaWLVIaL5MO8CnlrMe52H68NnnLtS64jxx8mtXCzQJUEBSbmzXYJuf8Vep/vQ2kcpoEn4n5h9pVYQDCVgjmrWKe/er1+E0O4TPZF5cv9HKz/QxT0Ytm8CwhUkacDkcTgra8rx11vog0XjKpUZ3VpgBJkMhxe+pVeRB8XB04L75v1R0YTuD1rRNNiljszRsuu1cikv+1/cLnnLIrtIUIAiM/Svdr4apyTOhxyIisgvdSTyqqWGyRhtYrdv6/5GYELuiCc/BGubZSGm3xknSmKUnEQQybf22EHcSC4fq0abR9zUmbSxuhxfjLTfpjjB8AiiGV5JBbE6qyvlTkEgx0/1/pofSzgob/By7DGRZKwcppeceYFIcf5bqeb7vWlkNGXA3B/ffe4fMpICQBpMgzjsSoLeTeu+vfrMex0uLzhWZkGjjkxgrw2fd7SaBdhmGcI7i4kGIYHiBd50LTZ84C+gFRFXttf/+3/AYVrMjVh3c1E+Zg2imRM45RJH4s+8B3GYclSKy3NDtqb6whIxMSAmZO3Xyhitg5IGU4vZ9UD64fXrVNG0XPl0ggpmwbMKXY/rt5bhGRKfIDzLlk41RAGMXua6lK9cI9NcRPsxMkt0kIf1XdFOv5Z7IVuRDgduWSst0ACgly8cJ7ts/pKpkkNQN+DEg7EYScq3+k/Dyx0/Gl4rn4Agdn/mP7ojO89rA2mhxnRWXoruuOzOMcph8R2gje2VRKW/39Z7xlTJ8nx3qD83Eko0byaZmb+erLnAsAJ5HS5D8kyqArmWAzXyzyDkrITAI5woyra3lOm8sz7yhknCJMRzZeEyZOp5R6NPwMJDSeuvhFHWlUWm2x+E33+pUBkwLUarMrARtCOtOH2uJ21nyzS5+288zRUoL1N2Qs12wlmJHuhcXtJGmxVMlKoQbTYMxG17HbL/vqCVEDAJHXJDwzdqVOspwl/dANFUUCnrFyZj7EqfByTRGN8rtzPj7rV78snm7ai07lZZBhjXYikWpsVIbga+aJT4w6C5peN3CI/T2SmoimI1ty/HuHyy9pCaZnHSTD/P9Vywr4ilp6TxAUtMbAAZ9TxxXWDb5jMwvBINaguzlNHz9gWh/1/43FfxRt/YsqkmNCZ4SweR7m6ZExjVEQTD3UElGAhwbeh9A3iY7r6J6Lv+drWx4Um41i65AHcb+ZB9KccS8/rtO2I8gYxP2JuS57eqXFR1Zr+uznw/hXfhBWRTA7b0aWwwaSIu2IAoaEHFdIBdPgA=',
          a: 4562.2,
          b: 36.2,
          c: 155.5
        },
        {
          name: 'Megalo Box',
          times: 215487,
          cover: 'data:image/webp;base64,UklGRv4EAABXRUJQVlA4IPIEAAAQFwCdASpIAEgAPpE4l0iloyIhK5xrgLASCWMAx9xxS5fbe+s+1O5fGeEOlfnju+jqE9Kf9u1/WAXUYnBtoKG5Z6kd84RhJcGSdkl6seEVsCfPBOVKmDMbXIWxsYfV88NQ/tbX8bIf1UHnm+9aZI12DLNaa2fZsHNCRieq2CiKAtEHh/dyTGYwj/hzdb75ou0yYrbC3PnUNWjN/CetG8ysOCj1dRfpqNK3YoIt4Ny9lLcB4zYK0Ce4p/VouTQ3mFgAAP74Tgu9vkgWuNvpTq3ysDXaejaMzZ2gWoudVApyzRY+jiV7a7YMmEzDyUf94nR81iG6+lcFiJfTI/3RKH+hW8QQGRiMF8EkAmIf4f+7zZFt8pJTX83FcxvokkpEs6UWAQ4Jg+e8yn2XDOjMpll6eqQE8MJjbixEIr3xto5/d7zRapfjaWLVIaL5MO8CnlrMe52H68NnnLtS64jxx8mtXCzQJUEBSbmzXYJuf8Vep/vQ2kcpoEn4n5h9pVYQDCVgjmrWKe/er1+E0O4TPZF5cv9HKz/QxT0Ytm8CwhUkacDkcTgra8rx11vog0XjKpUZ3VpgBJkMhxe+pVeRB8XB04L75v1R0YTuD1rRNNiljszRsuu1cikv+1/cLnnLIrtIUIAiM/Svdr4apyTOhxyIisgvdSTyqqWGyRhtYrdv6/5GYELuiCc/BGubZSGm3xknSmKUnEQQybf22EHcSC4fq0abR9zUmbSxuhxfjLTfpjjB8AiiGV5JBbE6qyvlTkEgx0/1/pofSzgob/By7DGRZKwcppeceYFIcf5bqeb7vWlkNGXA3B/ffe4fMpICQBpMgzjsSoLeTeu+vfrMex0uLzhWZkGjjkxgrw2fd7SaBdhmGcI7i4kGIYHiBd50LTZ84C+gFRFXttf/+3/AYVrMjVh3c1E+Zg2imRM45RJH4s+8B3GYclSKy3NDtqb6whIxMSAmZO3Xyhitg5IGU4vZ9UD64fXrVNG0XPl0ggpmwbMKXY/rt5bhGRKfIDzLlk41RAGMXua6lK9cI9NcRPsxMkt0kIf1XdFOv5Z7IVuRDgduWSst0ACgly8cJ7ts/pKpkkNQN+DEg7EYScq3+k/Dyx0/Gl4rn4Agdn/mP7ojO89rA2mhxnRWXoruuOzOMcph8R2gje2VRKW/39Z7xlTJ8nx3qD83Eko0byaZmb+erLnAsAJ5HS5D8kyqArmWAzXyzyDkrITAI5woyra3lOm8sz7yhknCJMRzZeEyZOp5R6NPwMJDSeuvhFHWlUWm2x+E33+pUBkwLUarMrARtCOtOH2uJ21nyzS5+288zRUoL1N2Qs12wlmJHuhcXtJGmxVMlKoQbTYMxG17HbL/vqCVEDAJHXJDwzdqVOspwl/dANFUUCnrFyZj7EqfByTRGN8rtzPj7rV78snm7ai07lZZBhjXYikWpsVIbga+aJT4w6C5peN3CI/T2SmoimI1ty/HuHyy9pCaZnHSTD/P9Vywr4ilp6TxAUtMbAAZ9TxxXWDb5jMwvBINaguzlNHz9gWh/1/43FfxRt/YsqkmNCZ4SweR7m6ZExjVEQTD3UElGAhwbeh9A3iY7r6J6Lv+drWx4Um41i65AHcb+ZB9KccS8/rtO2I8gYxP2JuS57eqXFR1Zr+uznw/hXfhBWRTA7b0aWwwaSIu2IAoaEHFdIBdPgA=',
          a: 4562.2,
          b: 36.2,
          c: 155.5
        },
        {
          name: 'Megalo Box',
          times: 215487,
          cover: 'data:image/webp;base64,UklGRv4EAABXRUJQVlA4IPIEAAAQFwCdASpIAEgAPpE4l0iloyIhK5xrgLASCWMAx9xxS5fbe+s+1O5fGeEOlfnju+jqE9Kf9u1/WAXUYnBtoKG5Z6kd84RhJcGSdkl6seEVsCfPBOVKmDMbXIWxsYfV88NQ/tbX8bIf1UHnm+9aZI12DLNaa2fZsHNCRieq2CiKAtEHh/dyTGYwj/hzdb75ou0yYrbC3PnUNWjN/CetG8ysOCj1dRfpqNK3YoIt4Ny9lLcB4zYK0Ce4p/VouTQ3mFgAAP74Tgu9vkgWuNvpTq3ysDXaejaMzZ2gWoudVApyzRY+jiV7a7YMmEzDyUf94nR81iG6+lcFiJfTI/3RKH+hW8QQGRiMF8EkAmIf4f+7zZFt8pJTX83FcxvokkpEs6UWAQ4Jg+e8yn2XDOjMpll6eqQE8MJjbixEIr3xto5/d7zRapfjaWLVIaL5MO8CnlrMe52H68NnnLtS64jxx8mtXCzQJUEBSbmzXYJuf8Vep/vQ2kcpoEn4n5h9pVYQDCVgjmrWKe/er1+E0O4TPZF5cv9HKz/QxT0Ytm8CwhUkacDkcTgra8rx11vog0XjKpUZ3VpgBJkMhxe+pVeRB8XB04L75v1R0YTuD1rRNNiljszRsuu1cikv+1/cLnnLIrtIUIAiM/Svdr4apyTOhxyIisgvdSTyqqWGyRhtYrdv6/5GYELuiCc/BGubZSGm3xknSmKUnEQQybf22EHcSC4fq0abR9zUmbSxuhxfjLTfpjjB8AiiGV5JBbE6qyvlTkEgx0/1/pofSzgob/By7DGRZKwcppeceYFIcf5bqeb7vWlkNGXA3B/ffe4fMpICQBpMgzjsSoLeTeu+vfrMex0uLzhWZkGjjkxgrw2fd7SaBdhmGcI7i4kGIYHiBd50LTZ84C+gFRFXttf/+3/AYVrMjVh3c1E+Zg2imRM45RJH4s+8B3GYclSKy3NDtqb6whIxMSAmZO3Xyhitg5IGU4vZ9UD64fXrVNG0XPl0ggpmwbMKXY/rt5bhGRKfIDzLlk41RAGMXua6lK9cI9NcRPsxMkt0kIf1XdFOv5Z7IVuRDgduWSst0ACgly8cJ7ts/pKpkkNQN+DEg7EYScq3+k/Dyx0/Gl4rn4Agdn/mP7ojO89rA2mhxnRWXoruuOzOMcph8R2gje2VRKW/39Z7xlTJ8nx3qD83Eko0byaZmb+erLnAsAJ5HS5D8kyqArmWAzXyzyDkrITAI5woyra3lOm8sz7yhknCJMRzZeEyZOp5R6NPwMJDSeuvhFHWlUWm2x+E33+pUBkwLUarMrARtCOtOH2uJ21nyzS5+288zRUoL1N2Qs12wlmJHuhcXtJGmxVMlKoQbTYMxG17HbL/vqCVEDAJHXJDwzdqVOspwl/dANFUUCnrFyZj7EqfByTRGN8rtzPj7rV78snm7ai07lZZBhjXYikWpsVIbga+aJT4w6C5peN3CI/T2SmoimI1ty/HuHyy9pCaZnHSTD/P9Vywr4ilp6TxAUtMbAAZ9TxxXWDb5jMwvBINaguzlNHz9gWh/1/43FfxRt/YsqkmNCZ4SweR7m6ZExjVEQTD3UElGAhwbeh9A3iY7r6J6Lv+drWx4Um41i65AHcb+ZB9KccS8/rtO2I8gYxP2JuS57eqXFR1Zr+uznw/hXfhBWRTA7b0aWwwaSIu2IAoaEHFdIBdPgA=',
          a: 4562.2,
          b: 36.2,
          c: 155.5
        },
        {
          name: 'Megalo Box',
          times: 215487,
          cover: 'data:image/webp;base64,UklGRv4EAABXRUJQVlA4IPIEAAAQFwCdASpIAEgAPpE4l0iloyIhK5xrgLASCWMAx9xxS5fbe+s+1O5fGeEOlfnju+jqE9Kf9u1/WAXUYnBtoKG5Z6kd84RhJcGSdkl6seEVsCfPBOVKmDMbXIWxsYfV88NQ/tbX8bIf1UHnm+9aZI12DLNaa2fZsHNCRieq2CiKAtEHh/dyTGYwj/hzdb75ou0yYrbC3PnUNWjN/CetG8ysOCj1dRfpqNK3YoIt4Ny9lLcB4zYK0Ce4p/VouTQ3mFgAAP74Tgu9vkgWuNvpTq3ysDXaejaMzZ2gWoudVApyzRY+jiV7a7YMmEzDyUf94nR81iG6+lcFiJfTI/3RKH+hW8QQGRiMF8EkAmIf4f+7zZFt8pJTX83FcxvokkpEs6UWAQ4Jg+e8yn2XDOjMpll6eqQE8MJjbixEIr3xto5/d7zRapfjaWLVIaL5MO8CnlrMe52H68NnnLtS64jxx8mtXCzQJUEBSbmzXYJuf8Vep/vQ2kcpoEn4n5h9pVYQDCVgjmrWKe/er1+E0O4TPZF5cv9HKz/QxT0Ytm8CwhUkacDkcTgra8rx11vog0XjKpUZ3VpgBJkMhxe+pVeRB8XB04L75v1R0YTuD1rRNNiljszRsuu1cikv+1/cLnnLIrtIUIAiM/Svdr4apyTOhxyIisgvdSTyqqWGyRhtYrdv6/5GYELuiCc/BGubZSGm3xknSmKUnEQQybf22EHcSC4fq0abR9zUmbSxuhxfjLTfpjjB8AiiGV5JBbE6qyvlTkEgx0/1/pofSzgob/By7DGRZKwcppeceYFIcf5bqeb7vWlkNGXA3B/ffe4fMpICQBpMgzjsSoLeTeu+vfrMex0uLzhWZkGjjkxgrw2fd7SaBdhmGcI7i4kGIYHiBd50LTZ84C+gFRFXttf/+3/AYVrMjVh3c1E+Zg2imRM45RJH4s+8B3GYclSKy3NDtqb6whIxMSAmZO3Xyhitg5IGU4vZ9UD64fXrVNG0XPl0ggpmwbMKXY/rt5bhGRKfIDzLlk41RAGMXua6lK9cI9NcRPsxMkt0kIf1XdFOv5Z7IVuRDgduWSst0ACgly8cJ7ts/pKpkkNQN+DEg7EYScq3+k/Dyx0/Gl4rn4Agdn/mP7ojO89rA2mhxnRWXoruuOzOMcph8R2gje2VRKW/39Z7xlTJ8nx3qD83Eko0byaZmb+erLnAsAJ5HS5D8kyqArmWAzXyzyDkrITAI5woyra3lOm8sz7yhknCJMRzZeEyZOp5R6NPwMJDSeuvhFHWlUWm2x+E33+pUBkwLUarMrARtCOtOH2uJ21nyzS5+288zRUoL1N2Qs12wlmJHuhcXtJGmxVMlKoQbTYMxG17HbL/vqCVEDAJHXJDwzdqVOspwl/dANFUUCnrFyZj7EqfByTRGN8rtzPj7rV78snm7ai07lZZBhjXYikWpsVIbga+aJT4w6C5peN3CI/T2SmoimI1ty/HuHyy9pCaZnHSTD/P9Vywr4ilp6TxAUtMbAAZ9TxxXWDb5jMwvBINaguzlNHz9gWh/1/43FfxRt/YsqkmNCZ4SweR7m6ZExjVEQTD3UElGAhwbeh9A3iY7r6J6Lv+drWx4Um41i65AHcb+ZB9KccS8/rtO2I8gYxP2JuS57eqXFR1Zr+uznw/hXfhBWRTA7b0aWwwaSIu2IAoaEHFdIBdPgA=',
          a: 4562.2,
          b: 36.2,
          c: 155.5
        },
        {
          name: 'Megalo Box',
          times: 215487,
          cover: 'data:image/webp;base64,UklGRv4EAABXRUJQVlA4IPIEAAAQFwCdASpIAEgAPpE4l0iloyIhK5xrgLASCWMAx9xxS5fbe+s+1O5fGeEOlfnju+jqE9Kf9u1/WAXUYnBtoKG5Z6kd84RhJcGSdkl6seEVsCfPBOVKmDMbXIWxsYfV88NQ/tbX8bIf1UHnm+9aZI12DLNaa2fZsHNCRieq2CiKAtEHh/dyTGYwj/hzdb75ou0yYrbC3PnUNWjN/CetG8ysOCj1dRfpqNK3YoIt4Ny9lLcB4zYK0Ce4p/VouTQ3mFgAAP74Tgu9vkgWuNvpTq3ysDXaejaMzZ2gWoudVApyzRY+jiV7a7YMmEzDyUf94nR81iG6+lcFiJfTI/3RKH+hW8QQGRiMF8EkAmIf4f+7zZFt8pJTX83FcxvokkpEs6UWAQ4Jg+e8yn2XDOjMpll6eqQE8MJjbixEIr3xto5/d7zRapfjaWLVIaL5MO8CnlrMe52H68NnnLtS64jxx8mtXCzQJUEBSbmzXYJuf8Vep/vQ2kcpoEn4n5h9pVYQDCVgjmrWKe/er1+E0O4TPZF5cv9HKz/QxT0Ytm8CwhUkacDkcTgra8rx11vog0XjKpUZ3VpgBJkMhxe+pVeRB8XB04L75v1R0YTuD1rRNNiljszRsuu1cikv+1/cLnnLIrtIUIAiM/Svdr4apyTOhxyIisgvdSTyqqWGyRhtYrdv6/5GYELuiCc/BGubZSGm3xknSmKUnEQQybf22EHcSC4fq0abR9zUmbSxuhxfjLTfpjjB8AiiGV5JBbE6qyvlTkEgx0/1/pofSzgob/By7DGRZKwcppeceYFIcf5bqeb7vWlkNGXA3B/ffe4fMpICQBpMgzjsSoLeTeu+vfrMex0uLzhWZkGjjkxgrw2fd7SaBdhmGcI7i4kGIYHiBd50LTZ84C+gFRFXttf/+3/AYVrMjVh3c1E+Zg2imRM45RJH4s+8B3GYclSKy3NDtqb6whIxMSAmZO3Xyhitg5IGU4vZ9UD64fXrVNG0XPl0ggpmwbMKXY/rt5bhGRKfIDzLlk41RAGMXua6lK9cI9NcRPsxMkt0kIf1XdFOv5Z7IVuRDgduWSst0ACgly8cJ7ts/pKpkkNQN+DEg7EYScq3+k/Dyx0/Gl4rn4Agdn/mP7ojO89rA2mhxnRWXoruuOzOMcph8R2gje2VRKW/39Z7xlTJ8nx3qD83Eko0byaZmb+erLnAsAJ5HS5D8kyqArmWAzXyzyDkrITAI5woyra3lOm8sz7yhknCJMRzZeEyZOp5R6NPwMJDSeuvhFHWlUWm2x+E33+pUBkwLUarMrARtCOtOH2uJ21nyzS5+288zRUoL1N2Qs12wlmJHuhcXtJGmxVMlKoQbTYMxG17HbL/vqCVEDAJHXJDwzdqVOspwl/dANFUUCnrFyZj7EqfByTRGN8rtzPj7rV78snm7ai07lZZBhjXYikWpsVIbga+aJT4w6C5peN3CI/T2SmoimI1ty/HuHyy9pCaZnHSTD/P9Vywr4ilp6TxAUtMbAAZ9TxxXWDb5jMwvBINaguzlNHz9gWh/1/43FfxRt/YsqkmNCZ4SweR7m6ZExjVEQTD3UElGAhwbeh9A3iY7r6J6Lv+drWx4Um41i65AHcb+ZB9KccS8/rtO2I8gYxP2JuS57eqXFR1Zr+uznw/hXfhBWRTA7b0aWwwaSIu2IAoaEHFdIBdPgA=',
          a: 4562.2,
          b: 36.2,
          c: 155.5
        },
        {
          name: 'Megalo Box',
          times: 215487,
          cover: 'data:image/webp;base64,UklGRv4EAABXRUJQVlA4IPIEAAAQFwCdASpIAEgAPpE4l0iloyIhK5xrgLASCWMAx9xxS5fbe+s+1O5fGeEOlfnju+jqE9Kf9u1/WAXUYnBtoKG5Z6kd84RhJcGSdkl6seEVsCfPBOVKmDMbXIWxsYfV88NQ/tbX8bIf1UHnm+9aZI12DLNaa2fZsHNCRieq2CiKAtEHh/dyTGYwj/hzdb75ou0yYrbC3PnUNWjN/CetG8ysOCj1dRfpqNK3YoIt4Ny9lLcB4zYK0Ce4p/VouTQ3mFgAAP74Tgu9vkgWuNvpTq3ysDXaejaMzZ2gWoudVApyzRY+jiV7a7YMmEzDyUf94nR81iG6+lcFiJfTI/3RKH+hW8QQGRiMF8EkAmIf4f+7zZFt8pJTX83FcxvokkpEs6UWAQ4Jg+e8yn2XDOjMpll6eqQE8MJjbixEIr3xto5/d7zRapfjaWLVIaL5MO8CnlrMe52H68NnnLtS64jxx8mtXCzQJUEBSbmzXYJuf8Vep/vQ2kcpoEn4n5h9pVYQDCVgjmrWKe/er1+E0O4TPZF5cv9HKz/QxT0Ytm8CwhUkacDkcTgra8rx11vog0XjKpUZ3VpgBJkMhxe+pVeRB8XB04L75v1R0YTuD1rRNNiljszRsuu1cikv+1/cLnnLIrtIUIAiM/Svdr4apyTOhxyIisgvdSTyqqWGyRhtYrdv6/5GYELuiCc/BGubZSGm3xknSmKUnEQQybf22EHcSC4fq0abR9zUmbSxuhxfjLTfpjjB8AiiGV5JBbE6qyvlTkEgx0/1/pofSzgob/By7DGRZKwcppeceYFIcf5bqeb7vWlkNGXA3B/ffe4fMpICQBpMgzjsSoLeTeu+vfrMex0uLzhWZkGjjkxgrw2fd7SaBdhmGcI7i4kGIYHiBd50LTZ84C+gFRFXttf/+3/AYVrMjVh3c1E+Zg2imRM45RJH4s+8B3GYclSKy3NDtqb6whIxMSAmZO3Xyhitg5IGU4vZ9UD64fXrVNG0XPl0ggpmwbMKXY/rt5bhGRKfIDzLlk41RAGMXua6lK9cI9NcRPsxMkt0kIf1XdFOv5Z7IVuRDgduWSst0ACgly8cJ7ts/pKpkkNQN+DEg7EYScq3+k/Dyx0/Gl4rn4Agdn/mP7ojO89rA2mhxnRWXoruuOzOMcph8R2gje2VRKW/39Z7xlTJ8nx3qD83Eko0byaZmb+erLnAsAJ5HS5D8kyqArmWAzXyzyDkrITAI5woyra3lOm8sz7yhknCJMRzZeEyZOp5R6NPwMJDSeuvhFHWlUWm2x+E33+pUBkwLUarMrARtCOtOH2uJ21nyzS5+288zRUoL1N2Qs12wlmJHuhcXtJGmxVMlKoQbTYMxG17HbL/vqCVEDAJHXJDwzdqVOspwl/dANFUUCnrFyZj7EqfByTRGN8rtzPj7rV78snm7ai07lZZBhjXYikWpsVIbga+aJT4w6C5peN3CI/T2SmoimI1ty/HuHyy9pCaZnHSTD/P9Vywr4ilp6TxAUtMbAAZ9TxxXWDb5jMwvBINaguzlNHz9gWh/1/43FfxRt/YsqkmNCZ4SweR7m6ZExjVEQTD3UElGAhwbeh9A3iY7r6J6Lv+drWx4Um41i65AHcb+ZB9KccS8/rtO2I8gYxP2JuS57eqXFR1Zr+uznw/hXfhBWRTA7b0aWwwaSIu2IAoaEHFdIBdPgA=',
          a: 4562.2,
          b: 36.2,
          c: 155.5
        },
        {
          name: 'Megalo Box',
          times: 215487,
          cover: 'data:image/webp;base64,UklGRv4EAABXRUJQVlA4IPIEAAAQFwCdASpIAEgAPpE4l0iloyIhK5xrgLASCWMAx9xxS5fbe+s+1O5fGeEOlfnju+jqE9Kf9u1/WAXUYnBtoKG5Z6kd84RhJcGSdkl6seEVsCfPBOVKmDMbXIWxsYfV88NQ/tbX8bIf1UHnm+9aZI12DLNaa2fZsHNCRieq2CiKAtEHh/dyTGYwj/hzdb75ou0yYrbC3PnUNWjN/CetG8ysOCj1dRfpqNK3YoIt4Ny9lLcB4zYK0Ce4p/VouTQ3mFgAAP74Tgu9vkgWuNvpTq3ysDXaejaMzZ2gWoudVApyzRY+jiV7a7YMmEzDyUf94nR81iG6+lcFiJfTI/3RKH+hW8QQGRiMF8EkAmIf4f+7zZFt8pJTX83FcxvokkpEs6UWAQ4Jg+e8yn2XDOjMpll6eqQE8MJjbixEIr3xto5/d7zRapfjaWLVIaL5MO8CnlrMe52H68NnnLtS64jxx8mtXCzQJUEBSbmzXYJuf8Vep/vQ2kcpoEn4n5h9pVYQDCVgjmrWKe/er1+E0O4TPZF5cv9HKz/QxT0Ytm8CwhUkacDkcTgra8rx11vog0XjKpUZ3VpgBJkMhxe+pVeRB8XB04L75v1R0YTuD1rRNNiljszRsuu1cikv+1/cLnnLIrtIUIAiM/Svdr4apyTOhxyIisgvdSTyqqWGyRhtYrdv6/5GYELuiCc/BGubZSGm3xknSmKUnEQQybf22EHcSC4fq0abR9zUmbSxuhxfjLTfpjjB8AiiGV5JBbE6qyvlTkEgx0/1/pofSzgob/By7DGRZKwcppeceYFIcf5bqeb7vWlkNGXA3B/ffe4fMpICQBpMgzjsSoLeTeu+vfrMex0uLzhWZkGjjkxgrw2fd7SaBdhmGcI7i4kGIYHiBd50LTZ84C+gFRFXttf/+3/AYVrMjVh3c1E+Zg2imRM45RJH4s+8B3GYclSKy3NDtqb6whIxMSAmZO3Xyhitg5IGU4vZ9UD64fXrVNG0XPl0ggpmwbMKXY/rt5bhGRKfIDzLlk41RAGMXua6lK9cI9NcRPsxMkt0kIf1XdFOv5Z7IVuRDgduWSst0ACgly8cJ7ts/pKpkkNQN+DEg7EYScq3+k/Dyx0/Gl4rn4Agdn/mP7ojO89rA2mhxnRWXoruuOzOMcph8R2gje2VRKW/39Z7xlTJ8nx3qD83Eko0byaZmb+erLnAsAJ5HS5D8kyqArmWAzXyzyDkrITAI5woyra3lOm8sz7yhknCJMRzZeEyZOp5R6NPwMJDSeuvhFHWlUWm2x+E33+pUBkwLUarMrARtCOtOH2uJ21nyzS5+288zRUoL1N2Qs12wlmJHuhcXtJGmxVMlKoQbTYMxG17HbL/vqCVEDAJHXJDwzdqVOspwl/dANFUUCnrFyZj7EqfByTRGN8rtzPj7rV78snm7ai07lZZBhjXYikWpsVIbga+aJT4w6C5peN3CI/T2SmoimI1ty/HuHyy9pCaZnHSTD/P9Vywr4ilp6TxAUtMbAAZ9TxxXWDb5jMwvBINaguzlNHz9gWh/1/43FfxRt/YsqkmNCZ4SweR7m6ZExjVEQTD3UElGAhwbeh9A3iY7r6J6Lv+drWx4Um41i65AHcb+ZB9KccS8/rtO2I8gYxP2JuS57eqXFR1Zr+uznw/hXfhBWRTA7b0aWwwaSIu2IAoaEHFdIBdPgA=',
          a: 4562.2,
          b: 36.2,
          c: 155.5
        },
        {
          name: 'Megalo Box',
          times: 215487,
          cover: 'data:image/webp;base64,UklGRv4EAABXRUJQVlA4IPIEAAAQFwCdASpIAEgAPpE4l0iloyIhK5xrgLASCWMAx9xxS5fbe+s+1O5fGeEOlfnju+jqE9Kf9u1/WAXUYnBtoKG5Z6kd84RhJcGSdkl6seEVsCfPBOVKmDMbXIWxsYfV88NQ/tbX8bIf1UHnm+9aZI12DLNaa2fZsHNCRieq2CiKAtEHh/dyTGYwj/hzdb75ou0yYrbC3PnUNWjN/CetG8ysOCj1dRfpqNK3YoIt4Ny9lLcB4zYK0Ce4p/VouTQ3mFgAAP74Tgu9vkgWuNvpTq3ysDXaejaMzZ2gWoudVApyzRY+jiV7a7YMmEzDyUf94nR81iG6+lcFiJfTI/3RKH+hW8QQGRiMF8EkAmIf4f+7zZFt8pJTX83FcxvokkpEs6UWAQ4Jg+e8yn2XDOjMpll6eqQE8MJjbixEIr3xto5/d7zRapfjaWLVIaL5MO8CnlrMe52H68NnnLtS64jxx8mtXCzQJUEBSbmzXYJuf8Vep/vQ2kcpoEn4n5h9pVYQDCVgjmrWKe/er1+E0O4TPZF5cv9HKz/QxT0Ytm8CwhUkacDkcTgra8rx11vog0XjKpUZ3VpgBJkMhxe+pVeRB8XB04L75v1R0YTuD1rRNNiljszRsuu1cikv+1/cLnnLIrtIUIAiM/Svdr4apyTOhxyIisgvdSTyqqWGyRhtYrdv6/5GYELuiCc/BGubZSGm3xknSmKUnEQQybf22EHcSC4fq0abR9zUmbSxuhxfjLTfpjjB8AiiGV5JBbE6qyvlTkEgx0/1/pofSzgob/By7DGRZKwcppeceYFIcf5bqeb7vWlkNGXA3B/ffe4fMpICQBpMgzjsSoLeTeu+vfrMex0uLzhWZkGjjkxgrw2fd7SaBdhmGcI7i4kGIYHiBd50LTZ84C+gFRFXttf/+3/AYVrMjVh3c1E+Zg2imRM45RJH4s+8B3GYclSKy3NDtqb6whIxMSAmZO3Xyhitg5IGU4vZ9UD64fXrVNG0XPl0ggpmwbMKXY/rt5bhGRKfIDzLlk41RAGMXua6lK9cI9NcRPsxMkt0kIf1XdFOv5Z7IVuRDgduWSst0ACgly8cJ7ts/pKpkkNQN+DEg7EYScq3+k/Dyx0/Gl4rn4Agdn/mP7ojO89rA2mhxnRWXoruuOzOMcph8R2gje2VRKW/39Z7xlTJ8nx3qD83Eko0byaZmb+erLnAsAJ5HS5D8kyqArmWAzXyzyDkrITAI5woyra3lOm8sz7yhknCJMRzZeEyZOp5R6NPwMJDSeuvhFHWlUWm2x+E33+pUBkwLUarMrARtCOtOH2uJ21nyzS5+288zRUoL1N2Qs12wlmJHuhcXtJGmxVMlKoQbTYMxG17HbL/vqCVEDAJHXJDwzdqVOspwl/dANFUUCnrFyZj7EqfByTRGN8rtzPj7rV78snm7ai07lZZBhjXYikWpsVIbga+aJT4w6C5peN3CI/T2SmoimI1ty/HuHyy9pCaZnHSTD/P9Vywr4ilp6TxAUtMbAAZ9TxxXWDb5jMwvBINaguzlNHz9gWh/1/43FfxRt/YsqkmNCZ4SweR7m6ZExjVEQTD3UElGAhwbeh9A3iY7r6J6Lv+drWx4Um41i65AHcb+ZB9KccS8/rtO2I8gYxP2JuS57eqXFR1Zr+uznw/hXfhBWRTA7b0aWwwaSIu2IAoaEHFdIBdPgA=',
          a: 4562.2,
          b: 36.2,
          c: 155.5
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.rankList{
  width: 260px;
  height: 255px;
  margin-top: 30px;
  position: relative;
  h3{
    font-size: 18px;
    line-height:  24px;
    font-weight: normal;
  }
  .time{
    position: absolute;
    right: 0;
    top: 0;
    width: 55px;
    border: 1px solid #CCD0D7;
    border-radius: 4px;
    li{
      height: 22px;
      line-height: 22px;
      text-indent: 7px;
      cursor: default;
      .down{
        display: inline-block;
        width: 12px;
        height: 12px;
        background: url('../images/icons.png') no-repeat -475px -151px;
        margin-left: 3px;
      }
      a{
        display: block;
        height: 100%;
        transition: .3s;
        &:hover{
          background: #CCD0D7;
        }
      }
    }
    &:hover .hide{
      display: block;
    }
    .hide{
      display: none;
    }
  }
  .list{
    margin-top: 20px;
    li{
      height: 18px;
      line-height: 18px;
      margin-bottom: 20px;
      position: relative;
      &:nth-child(1) i, &:nth-child(2) i, &:nth-child(3) i, {
        background: #F25D8E;
      }
      i{
        font-style: normal;
        display: inline-block;
        color: #fff;
        width: 18px;
        height: 18px;
        text-align: center;
        font-weight: bold;
        border-radius: 4px;
        background: #B8C0CC;
        margin-right: 4px;
      }
      a{
        display: inline-block;
        width: 225px;
        transition: .2s;
        span{
          display: inline-block;
          margin-left: 10px;
          color: #99A2AA;
        }
        &:hover{
          color: #00A1D6;
        }
      }
      &:hover .listInfo{
        animation: show 1s forwards;
      }
      .listInfo{
        box-sizing: border-box;
        position: absolute;
        left: 0;
        bottom: 32px;
        width: 320px;
        height: 135px;
        background: #FFF;
        border: 1px solid #CCD0D7;
        border-radius: 4px;
        box-shadow: 0 2px 5px #DFDFDF;
        visibility: hidden;
        .infoTop{
          padding: 12px;
          border-bottom: 1px solid #CCD0D7;
          position: relative;
          img{
            width: 72px;
            height: 72px;
          }
          p{
            position: absolute;
            left: 97px;
          }
          .infoTitle{
            top: 23px;
          }
          .infoState{
            top: 52px;
            color: #99A2AA;
          }
        }
        .infoBot{
          padding: 10px 12px;
          span{
            color: #99A2AA;
            padding-left: 16px;
            margin-right: 27px;
            background: url('../images/icons.png') no-repeat -282px -90px;
            &:nth-child(2){
              background-position: -282px -218px;
            }
            &:nth-child(3){
              background-position: -282px -2330px;
            }
          }
        }
      }
    }
  }
  .moreVideos{
    margin-top: -5px;
    display: block;
    width: 258px;
    line-height: 24px;
    text-align: center;
    background: #E5E9EF;
    border: 1px solid #E0E6ED;
    border-radius: 4px;
    transition: .2s;
    text-indent: 1px;
    &:hover {
      background: #CCD0D7;
    }
  }
}
</style>

