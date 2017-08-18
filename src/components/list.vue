<template>
  <div class="list">
    <ul>
      <li class="item" v-for="(x, index) in bookList" :key="index">
        <router-link :to="{ name: 'Bookdetails', query: {_id: x.book._id}}">
          <div class="left">
            <img class="pic" :src="x.book.cover" :alt="x.title">
          </div>
          <div class="right">
            <h2 class="title">{{x.book.title}}</h2>
            <p class="info">{{x.book.shortIntro}}</p>
            <div class="statistics">
              <div class="author">{{x.book.author}}</div>
              <div class="popularity">{{x.book.majorCate}} | {{x.book.latelyFollower}}人气</div>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import api from '../api/api'
export default {
  data () {
    return {
      bookList: []
    }
  },
  props: {
    typeId: String
  },
  watch: {
    'typeId': 'getData'
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      api.getFeaturedList(this.typeId).then(response => {
        this.bookList = response.data.data
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '../assets/stylus/mixin.styl'
.list{
  .item{
    clearfloat()
    border-bottom :1px solid #ddd
    padding :10px 0
    .left{
      width :25%
      float :left
      .pic{
        width :66px
        height :88px
      }
    }
    .right{
      width :75%
      float :right
      .title{
        line-height :1.5
        font-size :1.4rem
        color :#000
      }
      .info{
        line-height :1.5
        overflow: hidden
        text-overflow: ellipsis
        display: -webkit-box
        -webkit-line-clamp: 2
        -webkit-box-orient: vertical
      }
      .statistics{
        clearfloat()
        line-height :2
        .author{
          float :left
        }
        .popularity{
          float :right
        }
      }
    }
  }
}
</style>


