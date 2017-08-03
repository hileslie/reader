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
          <li class="item">
            <p>名字</p>
            <p>123本</p>
          </li>
        </ul>
      </div>
      <div class="female"></div>
      <div class="press"></div>
    </section>
    <v-footer></v-footer>
  </section>
</template>
<script>
import Footer from '../components/footer'
export default {
  components: {
    'v-footer': Footer
  }
}
</script>
<style lang="stylus" scoped>
@import '../assets/stylus/mixin.styl'
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
    background-color :#dd2c00
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
    .male{
      .title{
        height :3rem
        line-height :3rem
        padding-left :10px
      }
      .box{
        r_flex()
        flex-direction: row
        flex-wrap: wrap
        -webkit-box-direction: normal;
        -webkit-box-orient: horizontal;
        -moz-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      }
      .item{
        flex-grow: 2
      }
    }
  }
}
</style>
