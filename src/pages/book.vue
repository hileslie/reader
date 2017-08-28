<template>
  <section class="book">
    <header class="header" v-show="setting">
      <div class="back">
        <v-return></v-return>
      </div>
      <!-- <div class="name" v-show="!setting" :class="{'read-bg-white':isReadBg===1,'read-bg-green':isReadBg===2,'read-bg-light-green':isReadBg===3,'read-bg-brown':isReadBg===4,'read-bg-pink':isReadBg===5,'read-bg-grey':isReadBg===6}">
        <h1 class="title">圣墟</h1>
      </div> -->
    </header>
    <section class="content" :style="{fontSize: fontSize + 'px' }" :class="{'read-bg-white':isReadBg===1,'read-bg-green':isReadBg===2,'read-bg-light-green':isReadBg===3,'read-bg-brown':isReadBg===4,'read-bg-pink':isReadBg===5,'read-bg-grey':isReadBg===6}">
      <h2 class="title">{{articleContent.title}}</h2>
      <p class="article" @click="setting=!setting,fontColor=false" v-if="articleContent.cpContent">{{articleContent.cpContent}}</p>
      <p class="article" @click="setting=!setting,fontColor=false" v-if="!articleContent.cpContent">{{articleContent.body}}</p>
      <img class="loading" src="../assets/img/timg.gif" alt="" v-if="loading">
      <div class="btn" v-show="!loading">
        <a class="left" v-if="num>0" @click="last">上一章</a>
        <a class="right" v-if="num>=0" @click="next">下一章</a>
      </div>
    </section>
    <footer class="footer" v-show="setting">
      <div class="font-color" v-show="fontColor">
        <div class="color">
          <ul class="list">
            <li class="item">
              <span class="circle white" :class="{'circle-active':isReadBg===1}" @click="isReadBg=1"></span>
            </li>
            <li class="item">
              <span class="circle green" :class="{'circle-active':isReadBg===2}" @click="isReadBg=2"></span>
            </li>
            <li class="item">
              <span class="circle light-green" :class="{'circle-active':isReadBg===3}" @click="isReadBg=3"></span>
            </li>
            <li class="item">
              <span class="circle brown" :class="{'circle-active':isReadBg===4}" @click="isReadBg=4"></span>
            </li>
            <li class="item">
              <span class="circle pink" :class="{'circle-active':isReadBg===5}" @click="isReadBg=5"></span>
            </li>
            <li class="item">
              <span class="circle grey" :class="{'circle-active':isReadBg===6}" @click="isReadBg=6"></span>
            </li>
          </ul>
        </div>
        <div class="font">
          <a class="item subtract" @click="subtractFontSize">Aa-</a>
          <a class="item add" @click="addFontSize">Aa+</a>
        </div>
      </div>
      <nav class="nav">
        <a @click="directory=true">目录</a>
        <a>夜间模式</a>
        <a @click="fontColor=!fontColor">设置</a>
      </nav>
    </footer>
    <div class="label" v-show="setting">
      加入书签
    </div>
    <div class="directory" v-show="directory">
      <div class="wrap">
        <header class="directory-header">
          <a class="back" @click="directory=false">返回</a>
          <h2 class="title">圣墟</h2>
          <a class="sorting">倒序</a>
        </header>
        <section class="directory-content">
          <ul>
            <li class="item" v-for="(x, index) in chapterList" :key="index" @click="chooseChapter(x)">
              {{x.title}}
            </li>
          </ul>
        </section>
      </div>
    </div>
  </section>
</template>
<script>
import Return from '../components/return'
import api from '../api/api'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      setting: false,
      directory: false,
      fontColor: false,
      isReadBg: 1,
      fontSize: this.getFontSize,
      chapterList: [],
      articleContent: {},
      loading: true,
      num: 0
    }
  },
  computed: {
    // 使用对象展开运算符将 getters 混入 computed 对象中
    ...mapGetters([
      'getFontSize'
    ])
  },
  components: {
    'v-return': Return
  },
  created () {
    this._getChapters()
    if (!this.fontSize) {
      this.fontSize = 14
    }
  },
  methods: {
    subtractFontSize () {
      if (this.fontSize > 12) {
        this.fontSize--
        this.$store.dispatch('changeFontSize', this.fontSize)
      } else {
        return
      }
    },
    addFontSize () {
      this.fontSize++
      this.$store.dispatch('changeFontSize', this.fontSize)
    },

    // 获取小说章节
    _getChapters () {
      api.getChapters(this.$route.query._id).then(response => {
        this.chapterList = response.data.chapters
        this._getChapterContent(this.chapterList[0].link)
      }).catch(err => {
        console.log(err)
      })
    },

    // 获取小说章节内容
    _getChapterContent (link) {
      this.articleContent = {}
      this.loading = true
      api.getChapterContent(link).then(response => {
        this.loading = false
        this.articleContent = response.data.chapter
        console.log(this.articleContent)
      }).catch(err => {
        console.log(err)
      })
    },

    // 选择章节
    chooseChapter (x) {
      this.directory = false
      this.setting = false
      this._getChapterContent(x.link)
    },

    // 上一章
    last () {
      if (this.num > 0) {
        this.num--
        this._getChapterContent(this.chapterList[this.num].link)
      }
    },

    // 下一章
    next () {
      if (this.num < (this.chapterList.length - 1)) {
        this.num++
        this._getChapterContent(this.chapterList[this.num].link)
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.book{
  display:-webkit-box
  -webkit-box-orient:vertical
  height:100%
  .header{
    display: -webkit-box
    height :4rem
    line-height :4rem
    display: -webkit-flex /* Safari */
    display: flex
    flex-direction: row
    width :100%
    .title{
      width :100%
      font-size: 1.6rem
      padding :0 10px
    }
    .back{
      width :100%
      background-color :#000
      padding :0 10px
    }
    .name{
      width :100%
    }
  }
  .content{
    position:relative
    -webkit-box-flex:1
    -webkit-flex:1
    flex:1
    overflow:auto
    -webkit-overflow-scrolling:touch
    padding : 0 10px
    background-color :#fff
    line-height :1.5
    .loading{
      position :absolute
      top :50%
      left :50%
      margin-left :-33px
      margin-top :-33px
    }
    .title{
      font-size :1.5rem
      padding: 5px
      text-align: center
    }
    .article{
      line-height :2
    }
    .btn{
      height :30px
      line-height :30px
      .left{
        display :block
        float :left
      }
      .right{
        display :block
        float :right
      }
    }
  }
  .footer{
    overflow: hidden
    background-color :#212121
    .font-color{
      border-bottom :1px solid #ddd
      color :#fff
      .color{
        padding :10px 0
        .list{
          display:-webkit-box
          .item{
            flex :1
            -webkit-box-flex: 1
            -webkit-flex:1
            text-align :center
            .circle{
              display :inline-block
              width :30px
              height :30px
              border-radius :50%
            }
            .white{
              background-color :#fff
            }
            .green{
              background-color :#c8e6c9
            }
            .light-green{
              background-color :#dcedc8
            }
            .brown{
              background-color :#d7ccc8
            }
            .pink{
              background-color :#f48fb1
            }
            .grey{
              background-color :#424242
            }
            .circle-active{
              border :2px solid #ffeb3b
            }
          }
        }
      }
      .font{
        padding :10px 0
        text-align :center
        .item{
          display :inline-block
          width :40%
          border :1px solid #ddd
          padding :10px
          border-radius :10px
          color :#fff
        }
      }
    }
    .nav{
      display:-webkit-box
      height: 4rem
      line-height: 4rem
    }
    .nav *{
      display: block
      -webkit-box-flex: 1
      -webkit-flex:1
      flex:1
      text-align :center
      color :#fff
    }
  }
  .label{
    position :absolute
    top :10%
    right :0
    padding :10px
    border-top-left-radius :10px
    border-bottom-left-radius :10px
    background-color :#000
    color :#fff
    z-index :1
  }
  .directory{
    position :absolute
    top :0
    left :0
    width :100%
    height :100%
    z-index :2
    background-color :#fff
    .wrap{
      display:-webkit-box
      -webkit-box-orient:vertical
      height:100%
      .directory-header{
        display: -webkit-box
        height :4rem
        line-height :4rem
        display: -webkit-flex /* Safari */
        display: flex
        flex-direction: row
        position :relative
        background-color : #bf360c
        .title{
          position :absolute
          text-align :center
          width :100%
          font-size: 1.4rem
          color :#fff
        }
        .back{
          position :absolute
          left :10px
          color :#fff
          z-index :9
        }
        .sorting{
          position :absolute
          right :10px
          color :#fff
        }
      }
      .directory-content{
        position:relative
        -webkit-box-flex:1
        -webkit-flex:1
        flex:1
        overflow:auto
        -webkit-overflow-scrolling:touch
        padding : 0 10px
        .item{
          padding: 10px 0
        }
      }
    }
  }
  .read-bg-white{
    background-color :#fff
    color :#000
  }
  .read-bg-green{
    background-color :#c8e6c9
    color :#000
  }
  .read-bg-light-green{
    background-color :#dcedc8
    color :#000
  }
  .read-bg-brown{
    background-color :#d7ccc8
    color :#000
  }
  .read-bg-pink{
    background-color :#f48fb1
    color :#000
  }
  .read-bg-grey{
    background-color :#424242
    color :#000
  }
}
</style>

