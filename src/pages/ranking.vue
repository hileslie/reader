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
        <div class="item left" :class="{'active-b':isActiveB}" @click="isActiveB=true">
          男生
        </div>
        <div class="item center"></div>
        <div class="item right" :class="{'active-b':!isActiveB}" @click="isActiveB=false">
          女生
        </div>
      </div>
    </header>
    <section class="content">
      <section class="wrap">
        <aside class="sidebar">
          <ul>
            <li class="item" v-for="(x, index) in sidebarList" :key="index" :class="{'active-l':index===num}" @click="num=index">
              {{x.name}}{{index}}
            </li>
          </ul>
        </aside>
        <section class="main">
          <ul>
            <li class="item" v-for="(x, index) in bookList" :key="index">
              {{x.name}}{{index}}
            </li>
          </ul>
        </section>
      </section>
    </section>
    <v-footer></v-footer>
  </section>
</template>
<script>
import Footer from '../components/footer'
export default {
  data () {
    return {
      isActiveB: true,
      sidebarList: [
        {
          name: '栏目'
        },
        {
          name: '栏目'
        },
        {
          name: '栏目'
        }
      ],
      bookList: [
        {
          name: '书'
        },
        {
          name: '书'
        },
        {
          name: '书'
        }
      ],
      num: 0
    }
  },
  components: {
    'v-footer': Footer
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
    .wrap{
      .sidebar{
        position:fixed
        left :0
        bottom :4rem
        width :20%
        height :calc(100% - 12rem)
        z-index :9
        background-color :#f5f5f5
        .item{
          line-height :4rem
          text-align :center
        }
        .active-l{
          color :#bf360c
          background-color :#fff
        }
      }
      .main{
        padding-left :20%
        background-color :#fff
      }
    }
  }
}
</style>

