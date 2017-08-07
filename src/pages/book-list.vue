<template>
  <section class="search">
    <header class="header">
      <div class="top">
        <v-return></v-return>
        <h2 class="title">玄幻</h2>
      </div>
      <div class="top-nav">
        <div class="top-one">
          <a>热门</a>
          <a>新书</a>
          <a>好评</a>
          <a>完结</a>
          <a>包月</a>
        </div>
        <div class="top-two">
          <a>全部</a>
          <a>东方玄幻</a>
          <a>异界大陆</a>
          <a>异界争霸</a>
          <a>远古神话</a>
        </div>
      </div>
    </header>
    <section class="content">
      <ul>
        <li class="item">
          <router-link to="/book-details" class="item-click">
            <div class="pic">
              <img class="pic-item" src="http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F1228859%2F_1228859_441552.jpg%2F" alt="">
            </div>
            <div class="info">
              <h2 class="title">圣墟</h2>
              <p class="intro">
                母鸡啊母鸡啊母鸡啊母鸡啊母鸡啊母鸡啊母鸡母鸡啊母鸡啊母鸡啊母鸡啊母鸡啊母鸡啊母鸡母鸡啊母鸡啊母鸡啊母鸡啊母鸡啊母鸡啊母鸡母鸡啊母鸡啊母鸡啊母鸡啊母鸡啊母鸡啊母鸡
              </p>
              <div class="people">
                <div class="author">程东</div>
                <div class="reader">123131231232</div>
              </div>
            </div>
          </router-link>
        </li>
        <li class="item">
          <a class="item-click">
            <div class="pic">
              <img class="pic-item" src="http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F1228859%2F_1228859_441552.jpg%2F" alt="">
            </div>
            <div class="info">
              <h2 class="title">圣墟</h2>
              <p class="intro">
                母鸡啊母鸡啊母鸡啊母鸡啊母鸡啊母鸡啊母鸡母鸡啊母鸡啊母鸡啊母鸡啊母鸡啊母鸡啊母鸡母鸡啊母鸡啊母鸡啊母鸡啊母鸡啊母鸡啊母鸡母鸡啊母鸡啊母鸡啊母鸡啊母鸡啊母鸡啊母鸡
              </p>
              <div class="people">
                <div class="author">程东</div>
                <div class="reader">123131231232</div>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </section>
  </section>
</template>
<script>
import Return from '../components/return'
export default {
  components: {
    'v-return': Return
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
    .top-nav{
      .top-one, .top-two{
        height :4rem
        line-height :4rem
        border-bottom :1px solid #ddd
        a{
          display :inline-block
          padding :0 10px
        }
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

