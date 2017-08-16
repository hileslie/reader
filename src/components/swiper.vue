<template>
  <section class="swiper-banner">
    <swipe class="my-swipe">
      <swipe-item class="slide" v-for="(x, index) in bannersList" :key="index" v-if="x.type === 'c-bookdetail'">
        <router-link :to="{ name: 'Bookdetails', query: {_id: x.link}}">
          <img :src="x.img" alt="x.fullDes">
        </router-link>
      </swipe-item>
    </swipe>
  </section>
</template>

<script>
require('vue-swipe/dist/vue-swipe.css')
import { Swipe, SwipeItem } from 'vue-swipe'
import api from '../api/api'

export default {
  components: {
    'swipe': Swipe,
    'swipe-item': SwipeItem
  },
  data () {
    return {
      bannersList: []
    }
  },
  created () {
    api.getSwiper().then(response => {
      this.bannersList = response.data.data
    })
  }
}
</script>

<style lang="stylus" scoped>
.swiper-banner{
  .my-swipe{
    width :100%
    height :140px
    color: #fff
    font-size: 30px
    text-align: center
    .slide{
      img{
        display :block
        width :100%
        height :140px
      }
    }
  }
}
</style>
