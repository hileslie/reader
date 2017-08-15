<template>
  <section class="swiper-banner">
    <swiper :options="swiperOption">
      <swiper-slide v-for="slide in swiperSlides" :key="slide._id" v-if="slide.type === 'c-bookdetail'">
        <router-link :to="{ name: 'book', params: { id: slide.link } }">
          <img :src="slide.img" :alt="slide.title">
        </router-link>
      </swiper-slide>
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="slide in swiperSlides" :key="slide._id" v-if="slide.type === 'c-bookdetail'">
          <img :src="slide.img" :alt="slide.title">
        </div>
      </div>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </section>
</template>

<script>
import {
  swiper,
  swiperSlide
} from 'vue-awesome-swiper'
import api from '../api/api'

export default {
  name: 'swipers',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperSlides: [],
      swiperOption: {
        pagination: '.swiper-pagination',
        notNextTick: true,
        initialSlide: 0,
        autoplay: 0,
        grabCursor: true,
        setWrapperSize: true,
        paginationClickable: true
      }
    }
  },
  created () {
    api.getSwiper().then(response => {
      console.log(response.data)
      this.swiperSlides = response.data.data
    })
  }
}
</script>

<style lang="stylus" scoped>
.swiper-banner {
  width: 100%;
  height: 120px;
  .swiper-container {
    height: 100%;
    width: 100%;
  }
  img {
    height: 100%;
    width: 100%;
  }
}
</style>
