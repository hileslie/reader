<template>
  <section class="classify">
    <header class="header">
      <div class="item left">分类</div>
      <div class="item right">
        <router-link to="/search">搜索</router-link>
      </div>
    </header>
    <section class="content">
      <div class="male">
        <h2 class="title">男生</h2>
        <ul class="box">
          <li class="item" v-for="(x, index) in maleBookList" :key="index">
            <router-link to="/book-list">
              <p>{{x.name}}{{index}}</p>
              <p>{{x.num}}本</p>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="female">
        <h2 class="title">女生</h2>
        <ul class="box">
          <li class="item">
            <p>名字</p>
            <p>123本</p>
          </li>
          <li class="item">
            <p>名字</p>
            <p>123本</p>
          </li>
          <li class="item">
            <p>名字</p>
            <p>123本</p>
          </li>
          <li class="item">
            <p>名字</p>
            <p>123本</p>
          </li>
          <li class="item">
            <p>名字</p>
            <p>123本</p>
          </li>
          <li class="item">
            <p>名字</p>
            <p>123本</p>
          </li>
          <li class="item">
            <p>名字</p>
            <p>123本</p>
          </li>
        </ul>
      </div>
      <div class="press">
        <h2 class="title">出版社</h2>
        <ul class="box">
          <li class="item">
            <p>名字</p>
            <p>123本</p>
          </li>
          <li class="item">
            <p>名字</p>
            <p>123本</p>
          </li>
          <li class="item">
            <p>名字</p>
            <p>123本</p>
          </li>
          <li class="item">
            <p>名字</p>
            <p>123本</p>
          </li>
          <li class="item">
            <p>名字</p>
            <p>123本</p>
          </li>
          <li class="item">
            <p>名字</p>
            <p>123本</p>
          </li>
          <li class="item">
            <p>名字</p>
            <p>123本</p>
          </li>
        </ul>
      </div>
    </section>
    <v-footer></v-footer>
  </section>
</template>
<script>
import Footer from '../components/footer'
export default {
  data () {
    return {
      maleBookList: [
        {
          name: '男',
          num: 1
        },
        {
          name: '男',
          num: 1
        },
        {
          name: '男',
          num: 1
        },
        {
          name: '男',
          num: 1
        },
        {
          name: '男',
          num: 1
        },
        {
          name: '男',
          num: 1
        },
        {
          name: '男',
          num: 1
        }
      ]
    }
  },
  components: {
    'v-footer': Footer
  }
}
</script>
<style lang="stylus" scoped>
.classify{
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
  .header *{
    display :block
  }
  .content{
    position:relative
    -webkit-box-flex:1
    -webkit-flex:1
    flex:1
    overflow:auto
    -webkit-overflow-scrolling:touch
    .male, .female, .press{
      .title{
        height :4rem
        line-height :4rem
        padding-left :10px
      }
      .box{
        font-size :0
        .item{
          display :inline-block
          box-sizing: border-box
          width :33.3%
          text-align :center
          padding :10px 0
          font-size :1.2rem
        }
        .item:nth-child(1), .item:nth-child(2), .item:nth-child(3){
          border-top :1px solid #ddd
        }
        .item:nth-child(3n+1), .item:nth-child(3n+2){
          border-bottom :1px solid #ddd
          border-right :1px solid #ddd
        }
        .item:nth-child(3n+3){
          border-bottom :1px solid #ddd
        }
      }
    }
  }
}
</style>
