<template>
  <section class="search">
    <header class="header">
      <v-return></v-return>
      <div class="search-box">
        <input class="search-input" v-model="searchText" type="text">
        <span class="search-btn">搜索</span>
      </div>
    </header>
    <section class="content">
      <!-- 关键字补全 -->
      <section class="hot-words-prompt" v-show="textPrompt">
        <ul>
          <li class="item" v-for="(x, index) in TextList" :key="index" @click="search(x)">{{x}}</li>
        </ul>
      </section>
      <!-- 热门词 -->
      <section class="hot-words" v-if="bookList.length===0">
        <h2 class="title">热门搜索</h2>
        <ul>
          <li class="item" v-for="(x, index) in hotwords" :key="index">
            {{x.word}}
          </li>
        </ul>
      </section>
      <!-- 搜索历史 -->
      <section class="search-history" v-if="bookList.length===0">
        <h2 class="title">搜索历史</h2>
      </section>
      <!-- 小说列表 -->
      <section class="search-books">
        <ul>
          <li class="item" v-for="(x, index) in bookList" :key="index">
            <router-link :to="{ name: 'Bookdetails', query: {_id: x._id}}">
              <div class="left">
                <img class="pic" :src="x.cover | imgPath">
              </div>
              <div class="right">
                <h2 class="title">{{x.title}}</h2>
                <p class="info">{{x.shortIntro}}</p>
                <p class="author">{{x.author}}</p>
                <p class="popularity">{{x.retentionRatio}}%留存 | {{x.latelyFollower | BookListCount}}人气</p>
              </div>
            </router-link>
          </li>
        </ul>
      </section>
    </section>
  </section>
</template>
<script>
import Return from '../components/return'
import api from '../api/api'
export default {
  data () {
    return {
      hotwords: [],
      searchText: '',
      TextList: [],
      textPrompt: false,
      bookList: []
    }
  },
  components: {
    'v-return': Return
  },
  created () {
    this.getHotWords()
  },
  // 改变搜索框文字时
  watch: {
    searchText () {
      this.textPrompt = true
      this.getText(this.searchText)
    }
  },
  methods: {
    // 获取热门关键字
    getHotWords () {
      api.getHotwords().then(response => {
        this.hotwords = response.data.searchHotWords.splice(0, 10)
      }).catch(err => {
        console.log(err)
      })
    },

    // 获取文本框自动补充
    getText (query) {
      api.getText(
        {
          query: query
        }
      ).then(response => {
        this.TextList = response.data.keywords
      })
    },

    // 小说列表
    getBooks (query) {
      api.getSearchList(
        {
          query: query
        }
      ).then(response => {
        this.bookList = response.data.books
      })
    },

    // 搜索小说列表
    search (x) {
      this.textPrompt = false
      this.getBooks(x)
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '../assets/stylus/mixin.styl'
.search{
  display:-webkit-box
  -webkit-box-orient:vertical
  height:100%
  .header{
    display: -webkit-box
    height :4rem
    line-height :4rem
    background-color :#bf360c
    .search-box{
      position :relative
      width :85%
      .search-input{
        width :100%
        height :36px
        line-height :36px
        margin :6px
        border-radius :10px
        padding :0 36px 0 10px
        outline-style: none
      }
      .search-btn{
        position :absolute
        right :0
        top :0
      }
    }
  }
  .header *{
    display :block
  }
  .hot-words-prompt{
    position :fixed
    width :100%
    top :48px
    bottom :0
    z-index :2
    overflow :auto
  }
  .content{
    position:relative
    -webkit-box-flex:1
    -webkit-flex:1
    flex:1
    overflow:auto
    -webkit-overflow-scrolling:touch
    .hot-words-prompt{
      background-color :#fff
      .item{
        padding: 10px
        border-bottom :1px solid #ddd
      }
    }
    .hot-words{
      .title{
        font-size :1.4rem
        border-bottom :1px solid #ddd
        padding :10px
      }
      .item{
        display :inline-block
        border :1px solid #ddd
        padding :5px
        border-radius :5px
        margin: 5px
      }
    }
    .search-history{
      .title{
        font-size :1.4rem
        border-bottom :1px solid #ddd
        padding :10px
      }
    }
    .search-books{
      .item{
        clearfloat()
        padding :10px
        border-bottom :1px solid #ddd
        .left{
          float :left
          width :25%
          .pic{
            width :66px
            height :88px
          }
        }
        .right{
          float :left
          width :75%
          .title{
            font-size :14px
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
</style>

