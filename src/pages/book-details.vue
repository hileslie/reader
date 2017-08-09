<template>
  <section class="book-details">
    <header class="header">
      <v-return></v-return>
      <h2 class="title">{{bookInfo.title}}</h2>
    </header>
    <section class="content">
      <div class="top">
        <div class="top-one">
          <div class="pic">
            <img class="pic-item" :src="bookInfo.cover | imgPath" alt="">
          </div>
          <div class="info">
            <h1 class="title">{{bookInfo.title}}</h1>
            <p class="author">
              <span>{{bookInfo.author}}</span> |
              <span>{{bookInfo.cat}}</span>
            </p>
            <p class="words">
              <span>{{bookInfo.wordCount | BookCount}}字</span> |
              <span>{{bookInfo.updated}}</span>
            </p>
          </div>
        </div>
        <div class="top-two">
          <div class="item">
            <p>追书人气</p>
            <p>{{bookInfo.latelyFollower}}</p>
          </div>
          <div class="item">
            <p>读者留存</p>
            <p>{{bookInfo.retentionRatio}}%</p>
          </div>
          <div class="item">
            <p>日更字数</p>
            <p>{{bookInfo.serializeWordCount}}</p>
          </div>
        </div>
      </div>
      <div class="intro">
        <h2 class="title">
          <span></span>
          简介
        </h2>
        <p class="info">
          自撒娇地啊大家都来卡基督教啊家具店了解到家啊索拉卡多久啊看书来道具卡基督教埃里克 自撒娇地啊大家都来卡基督教啊家具店了解到家啊索拉卡多久啊看书来道具卡基督教埃里克 自撒娇地啊大家都来卡基督教啊家具店了解到家啊索拉卡多久啊看书来道具卡基督教埃里克 自撒娇地啊大家都来卡基督教啊家具店了解到家啊索拉卡多久啊看书来道具卡基督教埃里克
        </p>
      </div>
      <div class="label">
        <h2 class="title">
          <span></span>
          标签
        </h2>
        <div class="list">
          <span class="item">玄幻</span>
        </div>
      </div>
      <div class="hot-book-review">
        <h2 class="title">
          <span></span>
          热门书评
        </h2>
        <ul class="list">
          <li class="item">
            <div class="left">
              <img class="head" src="http://statics.zhuishushenqi.com/avatar/2a/37/2a37cbbf61d3c61313dfd59a147f14e5" alt="">
            </div>
            <div class="right">
              <p class="name">名字</p>
              <p class="remarks">简评</p>
              <p class="comments">评价评价评价评价好牛逼撒大声叫东陵大盗大里的评价评价评价评价好牛逼撒大声叫东陵大盗大里的评价评价评价评价好牛逼撒大声叫东陵大盗大里的评价评价评价评价好牛逼撒大声叫东陵大盗大里的评价评价评价评价好牛逼撒大声叫东陵大盗大里的</p>
              <div class="operation">
                <div class="left">2017-09-09</div>
                <div class="right">有用</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="recommend">
        <h2 class="title">
          <div class="left">
            <span></span>
            你可能会喜欢
          </div>
          <div class="right">
            <router-link to="/similar-recommend">更多</router-link>
          </div>
        </h2>
        <ul class="list">
          <li class="item">
            <img class="pic" src="http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F1365284%2F_1365284_826093.jpg%2F" alt="">
            <p class="name">通天仙路</p>
          </li>
          <li class="item">
            <img class="pic" src="http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F1365284%2F_1365284_826093.jpg%2F" alt="">
            <p class="name">通天仙路</p>
          </li>
          <li class="item">
            <img class="pic" src="http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F1365284%2F_1365284_826093.jpg%2F" alt="">
            <p class="name">通天仙路</p>
          </li>
          <li class="item">
            <img class="pic" src="http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F1365284%2F_1365284_826093.jpg%2F" alt="">
            <p class="name">通天仙路</p>
          </li>
          <li class="item">
            <img class="pic" src="http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F1365284%2F_1365284_826093.jpg%2F" alt="">
            <p class="name">通天仙路</p>
          </li>
          <li class="item">
            <img class="pic" src="http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F1365284%2F_1365284_826093.jpg%2F" alt="">
            <p class="name">通天仙路</p>
          </li>
        </ul>
      </div>
    </section>
    <footer class="footer">
      <nav class="nav">
        <a class="left">+追更新</a>
        <router-link to="/book" class="right">开始阅读</router-link>
      </nav>
    </footer>
  </section>
</template>
<script>
import Return from '../components/return'
import api from '../api/api'
export default {
  data () {
    return {
      bookInfo: {}
    }
  },
  components: {
    'v-return': Return
  },
  created () {
    api.getBookInfo(this.$route.query._id).then(response => {
      this.bookInfo = response.data
      console.log(this.bookInfo)
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>
<style lang="stylus" scoped>
@import '../assets/stylus/mixin.styl'

.book-details{
  display:-webkit-box
  -webkit-box-orient:vertical
  height:100%
  .header{
    height :4rem
    line-height :4rem
    background-color :#bf360c
    padding :0 10px
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
    }
  }
  .content{
    position:relative
    -webkit-box-flex:1
    -webkit-flex:1
    flex:1
    overflow:auto
    -webkit-overflow-scrolling:touch
    .top{
      padding :10px
      border-bottom :1px solid #ddd
      .top-one{
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
            line-height :3.2rem
          }
          .author, .words{
            line-height :2.4rem
          }
        }
      }
      .top-two{
        r_flex()
        padding :10px 0
        .item{
          flex-grow: 1
          text-align :center
          p{
            line-height :1.6rem
          }
        }
      }
    }
    .intro{
      padding: 10px
      border-bottom: 1px solid #ddd
      .title{
        font-size :1.4rem
        line-height :2
        span{
          red-block()
        }
      }
      .info{
        line-height :1.5
        overflow: hidden
        text-overflow: ellipsis
        display: -webkit-box
        -webkit-line-clamp: 4
        -webkit-box-orient: vertical
      }
    }
    .label{
      padding: 10px
      border-bottom: 1px solid #ddd
      .title{
        font-size :1.4rem
        line-height :2
        span{
          red-block()
        }
      }
      .list{
        padding :10px 0
        .item{
          display :inline-block
          border :1px solid #ddd
          border-radius :10px
          padding :5px
        }
      }
    }
    .hot-book-review{
      padding: 10px
      border-bottom: 1px solid #ddd
      .title{
        font-size :1.4rem
        line-height :2
        span{
          red-block()
        }
      }
      .list{
        .item{
          clearfloat()
          padding :10px 0
          .left{
            float :left
            min-width :50px
            .head{
              width :40px
              height :40px
              border-radius :50%
            }
          }
          .right{
            overflow:hidden
            .name, .remarks, .comments{
              line-height :1.5
            }
            .operation{
              clearfloat()
              line-height :2
              .left{
                float :left
              }
              .right{
                float :right
              }
            }
            .comments{
              overflow: hidden
              text-overflow: ellipsis
              display: -webkit-box
              -webkit-line-clamp: 3
              -webkit-box-orient: vertical
            }
          }
        }
      }
    }
    .recommend{
      padding: 10px
      border-bottom: 1px solid #ddd
      .title{
        font-size :1.4rem
        line-height :2
        r_flex()
        span{
          red-block()
        }
        .left, .right{
          flex-grow :1
        }
        .right{
          text-align :right
        }
      }
      .list{
        padding :10px 0
        .item{
          width :32.5%
          text-align :center
          box-sizing :border-box
          display :inline-block
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
  .footer{
    overflow: hidden
    border-top :1px solid #ddd
    .nav{
      display:-webkit-box
      height: 4rem
      line-height: 4rem
      .left{
        background-color :#e0e0e0
        color :#dd2c00
        font-size :1.6rem
      }
      .right{
        background-color :#dd2c00
        color :#fff
        font-size :1.6rem
      }
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
}
</style>

