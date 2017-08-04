<template>
  <section class="selection">
    <header class="header">
      <div class="item left">精选</div>
      <div class="item center">
        <button class="left-btn" :class="{'active-btn': isActiveBtn}" @click="isActiveBtn=true">男生</button>
        <button class="right-btn" :class="{'active-btn': !isActiveBtn}" @click="isActiveBtn=false">女生</button>
      </div>
      <div class="item right">
        <router-link to="/search">搜索</router-link>
      </div>
    </header>
    <section class="content">
      精选
    </section>
    <v-footer></v-footer>
  </section>
</template>
<script>
// 组件
import Footer from '../components/footer'
export default {
  data () {
    return {
      isActiveBtn: true
    }
  },
  components: {
    'v-footer': Footer
  }
}
</script>
<style lang="stylus" scoped>
.selection{
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
    .center{
      font-size :0
      text-align :center
      button{
        list-style :none
        border :none
        font-size :1.2rem
        height :2rem
        line-height :2rem
        margin-top :1rem
        background-color :#bf360c
        color :#fff
        padding :0 10px
        outline :none
      }
      .left-btn{
        border :1px solid #fff
        border-top-left-radius :5px
        border-bottom-left-radius :5px
      }
      .right-btn{
        border :1px solid #fff
        border-top-right-radius :5px
        border-bottom-right-radius :5px
      }
      .active-btn{
        background-color :#fff
        color :#000
      }
    }
    .right{
      text-align :right
      padding-right :10px
    }
  }
  .content{
    position:relative
    -webkit-box-flex:1
    -webkit-flex:1
    flex:1
    overflow:auto
    -webkit-overflow-scrolling:touch
  }
}
</style>
