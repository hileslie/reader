<template>
  <section class="ranking">
    <header class="header">
      <div class="top">
        <div class="item left">排行榜</div>
        <div class="item right">
          <router-link to="/search">搜索</router-link>
        </div>
      </div>
      <div class="top-nav">
        <div class="item left" :class="{'active-b':isActiveB}" @click="changeSex('male')">
          男生
        </div>
        <div class="item center"></div>
        <div class="item right" :class="{'active-b':!isActiveB}" @click="changeSex('female')">
          女生
        </div>
      </div>
    </header>
    <section class="content">
      <aside class="sidebar">
        <ul>
          <li class="item" v-for="(x, index) in sidebarList" :key="index" :class="{'active-l':index===num}" @click="changeType(x, index)">
            {{x.shortTitle}}
          </li>
        </ul>
      </aside>
      <section class="main">
        <img class="loading" src="../assets/img/timg.gif" alt="" v-if="loading">
        <ul>
          <li class="item" v-for="(x, index) in bookList" :key="index">
            <router-link :to="{ name: 'Bookdetails', query: {_id: x._id}}">
              <div class="left">
                <img class="pic" :src="x.cover | imgPath" :alt="x.title">
              </div>
              <div class="right">
                <h2 class="title">{{x.title}}</h2>
                <p class="author">{{x.author}}</p>
                <p class="info">{{x.shortIntro}}</p>
                <p class="popularity ">{{x.retentionRatio}}%留存 | {{x.latelyFollower | BookListCount}}人气</p>
              </div>
            </router-link>
          </li>
        </ul>
      </section>
    </section>
    <v-footer></v-footer>
  </section>
</template>
<script>
import Footer from '../components/footer'
import api from '../api/api'

export default {
  data () {
    return {
      loading: true,
      isActiveB: true,
      male: [],
      female: [],
      sidebarList: [],
      bookList: [],
      num: 0
    }
  },
  components: {
    'v-footer': Footer
  },
  created () {
    this.getRanking()
  },
  methods: {
    // 获取侧边栏
    getRanking () {
      api.getAllRanking().then(response => {
        this.male = response.data.male
        this.female = response.data.female
        this.sidebarList = this.male
        this.getBookList(this.male[0]._id)
      }).catch(err => {
        console.log(err)
      })
    },

    // 获取右侧书籍列表
    getBookList (_id) {
      this.bookList = []
      this.loading = true
      api.getRankingList(_id).then(response => {
        this.bookList = response.data.ranking.books
        this.loading = false
      }).catch(err => {
        console.log(err)
      })
    },

    // 改变性别
    changeSex (txt) {
      if (txt === 'male') {
        this.num = 0
        this.getBookList(this.male[0]._id)
        this.isActiveB = true
        this.sidebarList = this.male
      } else if (txt === 'female') {
        this.num = 0
        this.getBookList(this.female[0]._id)
        this.isActiveB = false
        this.sidebarList = this.female
      }
    },

    // 改变侧边栏
    changeType (x, index) {
      this.num = index
      this.getBookList(x._id)
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '../assets/stylus/mixin.styl'
.ranking{
  display:-webkit-box
  -webkit-box-orient:vertical
  height:100%
  .header{
    .top, .top-nav{
      display: -webkit-box
      display: -webkit-flex
      display: flex
      flex-direction: row
      height :4rem
      line-height :4rem
      background-color :#bf360c
      .item{
        flex-grow: 1
        color :#fff
        a{
          color :#fff
        }
      }
      .left{
        padding-left :10px
      }
      .right{
        text-align :right
        padding-right :10px
      }
    }
    .top-nav{
      background-color :#fafafa
      font-size :0
      .item{
        text-align :center
        color :#424242
        font-size :1.2rem
      }
      .center{
        flex-grow: 0
        width :1px
        height :2rem
        line-height :2rem
        background-color :#ddd
        margin-top :12px
      }
      .left{
        box-sizing: border-box
      }
      .active-b{
        border-bottom :2px solid #bf360c
      }
    }
  }
  .content{
    position:relative
    -webkit-box-flex:1
    -webkit-flex:1
    flex:1
    overflow:auto
    -webkit-overflow-scrolling:touch
    z-index :999
    .sidebar{
      position :fixed
      top :96px
      bottom :48px
      width :80px
      overflow-y: scroll
      background-color :#f5f5f5
      .item{
        line-height :3
        text-align :center
      }
      .active-l{
        color :#bf360c
        background-color :#fff
      }
    }
    .main{
      margin-left :80px
      position :relative
      .loading{
        position :absolute
        top :150px
        left :50%
        margin-left :-33px
      }
      .item{
        clearfloat()
        padding :10px
        border-bottom :1px solid #ddd
        a{
          display :block
          .left{
            float :left
            width :30%
            margin-right :10px
            .pic{
              width :66px
              height :88px
            }
          }
          .right{
            float :left
            width :65%
            .title{
              font-size :1.4rem
              color :#000
              line-height :2
              overflow: hidden
              text-overflow: ellipsis
              display: -webkit-box
              -webkit-line-clamp: 1
              -webkit-box-orient: vertical
            }
            .author{
              line-height :1.5
            }
            .info{
              line-height :1.5
              overflow: hidden
              text-overflow: ellipsis
              display: -webkit-box
              -webkit-line-clamp: 1
              -webkit-box-orient: vertical
            }
            .popularity {
              line-height :2
            }
          }
        }
      }
    }
  }
}
</style>

