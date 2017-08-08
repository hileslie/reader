<template>
  <section class="search">
    <header class="header">
      <div class="top">
        <v-return></v-return>
        <h2 class="title" @click="loadMore">玄幻</h2>
      </div>
      <div class="top-nav">
        <div class="top-one">
          <a v-for="(x, index) in typeListTop" :key="index" @click="choseOneList(x, index)" :class="{'active':oneType===index}">{{x.name}}</a>
        </div>
        <div class="top-two">
          <a v-for="(x, index) in typeList" :key="index" @click="choseTwoList(x, index)" :class="{'active':twoType===index}">{{x}}</a>
        </div>
      </div>
    </header>
    <section class="content" ref="box">
      <ul>
        <li class="item" v-for="(x, index) in bookLists" :key="index">
          <router-link to="/book-details" class="item-click">
            <div class="pic">
              <img class="pic-item" :src="'http://statics.zhuishushenqi.com' + x.cover" alt="">
            </div>
            <div class="info">
              <h2 class="title">{{x.title}}</h2>
              <p class="intro">
                {{x.shortIntro}}
              </p>
              <div class="people">
                <div class="author">{{x.author}}</div>
                <div class="reader">{{x.retentionRatio}}留存 | {{x.latelyFollower}}人气</div>
              </div>
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
      oneType: 0,
      twoType: 0,
      type: 'hot',
      typeListTop: [
        {
          value: 'hot',
          name: '热门'
        }, {
          value: 'new',
          name: '新书'
        }, {
          value: 'reputation',
          name: '好评'
        }, {
          value: 'over',
          name: '完结'
        }, {
          value: 'monthly',
          name: '包月'
        }
      ],
      minor: '',
      typeList: [],
      bookLists: [],
      start: 0,
      limit: 20,
      scroll: 0
    }
  },
  created () {
    api.getCategoriesType().then(response => {
      Object.entries(response.data).forEach(([key, value]) => {
        if (this.$route.query.gender === key) {
          value.forEach(value => {
            if (value.major === this.$route.query.major) {
              value.mins.unshift('全部')
              this.typeList = value.mins
            }
          })
        }
      })
    }).catch(err => {
      console.log(err)
    })

    this.getBookLists(this.$route.query.gender, this.type, this.$route.query.major, this.minor, this.start, this.limit)
  },
  components: {
    'v-return': Return
  },
  mounted () {
    // this.$refs.box.addEventListener('scroll', this.menu)
  },
  methods: {
    // 小说列表
    getBookLists (gender, type, major, minor, start, limit) {
      api.getTypeBookList(
        {
          gender: gender,
          type: type,
          major: major,
          minor: minor,
          start: start,
          limit: limit
        }
      ).then(response => {
        this.bookLists = response.data.books
      }).catch(err => {
        console.log(err)
      })
    },
    choseOneList (x, index) {
      this.type = x.value
      this.oneType = index
      this.getBookLists(this.$route.query.gender, this.type, this.$route.query.major, this.minor, this.start, this.limit)
    },
    choseTwoList (x, index) {
      this.minor = x === '全部' ? '' : x
      this.twoType = index
      this.getBookLists(this.$route.query.gender, this.type, this.$route.query.major, this.minor, this.start, this.limit)
    },
    loadMore () {
      // this.$refs.box.scrollTop = this.$refs.box.scrollHeight
      console.log(this.$refs.box.scrollHeight)
      // console.log(document.body.clientHeight)
      // console.log(document.body.scrollTop)
      // console.log(this.$refs.box.offsetHeight)
      console.log(this.$refs.box.scrollTop)
    },
    menu () {
      this.scroll = this.$refs.box.scrollTop
      console.log(this.scroll)
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
    .top{
      height :4rem
      line-height :4rem
      background-color :#bf360c
      .return{
        position :absolute
        z-index :2
        left :10px
      }
      .title{
        position :absolute
        z-index :1
        top :0
        left :0
        width :100%
        margin :0 auto
        text-align :center
        font-size :1.4rem
        color :#fff
      }
    }
    .top-nav{
      .top-one, .top-two{
        height :4rem
        line-height :4rem
        border-bottom :1px solid #ddd
        a{
          display :inline-block
          padding :0 10px
          color :#000
        }
        .active{
          color :#bf360c
        }
      }
      .top-two{
        width :100%
        overflow-y :auto
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
    .item{
      padding :10px
      border-bottom :1px solid #ddd
      box-sizing :border-box
      .item-click{
        display :block
        clearfloat()
        .pic{
          float :left
          margin-right :10px
          .pic-item{
            width :66px
            height :88px
          }
        }
        .info{
          .title{
            font-size :1.6rem
            line-height :2rem
            color :#000
          }
          .intro{
            line-height :1.8rem
            overflow: hidden
            text-overflow: ellipsis
            display: -webkit-box
            -webkit-line-clamp: 2
            -webkit-box-orient: vertical
          }
          .people{
            clearfloat()
            margin-top :10px
            .author{
              float :left
            }
            .reader{
              float :right
            }
          }
        }
      }
    }
  }
}
</style>

