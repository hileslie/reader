<template>
  <section class="featured-list">
    <header class="header">
      <v-return></v-return>
      <h2 class="title">{{this.$route.query.type}}</h2>
    </header>
    <section class="content">
      <ul class="list">
        <li class="item" v-for="(x, index) in bookLike" :key="index">
          <router-link :to="{ name: 'Bookdetails', query: {_id: x.book._id}}">
            <div class="left">
              <img class="pic" :src="x.book.cover | imgPath">
            </div>
            <div class="right">
              <h2 class="name">{{x.book.title}}</h2>
              <p>{{x.book.author}} | {{x.book.majorCate}}</p>
              <p class="info">{{x.book.shortIntro}}</p>
              <p class="num">{{x.book.latelyFollower}} 人气 | {{x.book.retentionRatio}}% 读者留存</p>
            </div>
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
    this.getLists()
  },
  methods: {
    // 获取小说列表
    getLists () {
      api.getFeaturedMoreList(this.$route.query._id).then(response => {
        this.bookLike = response.data.data
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
.featured-list{
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
        box-sizing :border-box
        border-bottom :1px solid #ddd
        margin-bottom :10px
        padding-bottom :10px
        a{
          display :block
          .left{
            display :inline-block
            width :30%
            text-align :center
            .pic{
              width: 66px
              height :88px
            }
          }
          .right{
            display :inline-block
            width :68.5%
            vertical-align :top
            .name{
              line-height :2
              font-size :1.4rem
              color :#000
            }
            .info{
              line-height :2
              overflow: hidden
              text-overflow: ellipsis
              display: -webkit-box
              -webkit-line-clamp: 1
              -webkit-box-orient: vertical
            }
            .num{
              color :#333
              line-height :2
            }
          }
        }
      }
    }
  }
}
</style>

