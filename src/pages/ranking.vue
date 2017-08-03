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
        <div class="item left">
          男生
        </div>
        <div class="item right">
          女生
        </div>
      </div>
    </header>
    <section class="content">
      <p>排行</p>
      <p>排行</p>
      <p>排行</p>
      <p>排行</p>
      <p>排行</p>
      <p>排行</p>
      <p>排行</p>
      <p>排行</p>
      <p>排行</p>
      <p>排行</p>
      <p>排行</p>
      <p>排行</p>
      <p>排行</p>
      <p>排行</p>
      <p>排行</p>
      <p>排行</p>
      <p>排行</p>
      <p>排行</p>
      <p>排行</p>
      <p>排行</p>
      <p>排行</p>
      <p>排行</p>
      <p>排行</p>
      <p>排行</p>
      <p>排行</p>
      <p>排行</p>
      <p>排行</p>
      <p>排行</p>
      <p>排行</p>
      <p>排行</p>
      <p>排行</p>
      <p>排行</p>
      <p>排行</p>
      <p>排行</p>
      <p>排行</p>
      <p>排行</p>
      <p>排行</p>
      <p>排行</p>
      <p>排行</p>
      <p>排行</p>
      <p>排行</p>
      <p>排行</p>
      <p>排行</p>
      <p>排行</p>
      <p>排行</p>
      <p>排行</p>
      <p>排行</p>
      <p>排行</p>
      <p>排行</p>
      <p>排行</p>
      <p>排行</p>
      <p>排行</p>
      <p>排行</p>
      <p>排行</p>
      <p>排行</p>
      <p>排行</p>
      <p>排行</p>
      <p>排行</p>
      <p>排行</p>
      <p>排行</p>

      <p>排行</p>
      <p>排行</p>
      <p>排行</p>
      <p>排行</p>
      <p>排行</p>
      <p>排行</p>
      <p>排行</p>
      <p>排行</p>
      <p>排行</p>
      <p>排行</p>
      <p>排行</p>
      <p>排行</p>
      <p>排行</p>

      <p>排行</p>

    </section>
    <v-footer></v-footer>
  </section>
</template>
<script>
// 组件
import Footer from '../components/footer'
export default {
  components: {
    'v-footer': Footer
  }
}
</script>
<style lang="stylus" scoped>
.ranking{
  display:-webkit-box
  -webkit-box-orient:vertical
  height:100%
  .header{
    // display: -webkit-box
    // display: -webkit-flex /* Safari */
    // display: flex
    // flex-direction: row
    .top, .top-nav{
      display: -webkit-box
      display: -webkit-flex /* Safari */
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
      background-color :#eeeeee
      font-size :0
      .item{
        text-align :center
        color :#424242
        font-size :1.2rem
      }
      .left{
        border-right :1px solid #ddd
        box-sizing: border-box
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
    background-color:#ccc
  }
}
</style>

