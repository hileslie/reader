<template>
  <section class="search">
    <header class="header">
      <v-return></v-return>
      <h2 class="title">你可能会喜欢</h2>
    </header>
    <section class="content">
      <ul class="list">
        <li class="item" v-for="(x, index) in bookLike" :key="index">
          <router-link :to="{ name: 'Bookdetails', query: {_id: x._id}}">
            <img class="pic" :src="x.cover | imgPath" alt="">
            <p class="name">{{x.title}}</p>
          </router-link>
        </li>
      </ul>
    </section>
  </section>
</template>
<script>
import Return from '../components/return'
import api from '../api/api'
export default {
  data () {
    return {
      bookLike: {}
    }
  },
  components: {
    'v-return': Return
  },
  created () {
    this.getLikeBook()
  },
  methods: {
    // 获取你可能喜欢的小说列表
    getLikeBook () {
      api.getLikeBook(this.$route.query._id).then(response => {
        this.bookLike = response.data.books
        console.log(this.bookLike)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
.search{
  display:-webkit-box
  -webkit-box-orient:vertical
  height:100%
  .header{
    height :4rem
    line-height :4rem
    background-color :#bf360c
    padding : 0 10px
    .return{
      position :absolute
      z-index :2
    }
    .title{
      position :absolute
      z-index :1
      top :0
      left :0
      width :100%
      margin :0 auto
      text-align :center
      color :#fff
    }
  }
  .content{
    position:relative
    -webkit-box-flex:1
    -webkit-flex:1
    flex:1
    overflow:auto
    -webkit-overflow-scrolling:touch
    .list{
      padding :10px 0
      .item{
        text-align :center
        box-sizing :border-box
        display :inline-block
        a{
          display :block
          .pic{
            width: 66px
            height :88px
          }
          .name{
            line-height :2
          }
        }
      }
    }
  }
}
</style>

