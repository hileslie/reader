<template>
  <section class="search">
    <header class="header">
      <v-return></v-return>
      <h2 class="title">同类推荐</h2>
    </header>
    <section class="content">
      <p>同类推荐</p>
      <p>搜书</p>
      <p>搜书</p>
      <p>搜书</p>
      <p>搜书</p>
      <p>搜书</p>
      <p>搜书</p>
      <p>搜书</p>
      <p>搜书</p>
      <p>搜书</p>
      <p>搜书</p>
      <p>搜书</p>
      <p>搜书</p>
      <p>搜书</p>
      <p>搜书</p>
      <p>搜书</p>
      <p>搜书</p>
      <p>搜书</p>
      <p>搜书</p>
      <p>搜书</p>
      <p>搜书</p>
      <p>搜书</p>
      <p>搜书</p>
      <p>搜书</p>
      <p>搜书</p>
      <p>搜书</p>
      <p>搜书</p>
      <p>搜书</p>
      <p>搜书</p>
      <p>搜书</p>
      <p>搜书</p>
      <p>搜书</p>
      <p>搜书</p>
      <p>搜书</p>
      <p>搜书</p>
      <p>搜书</p>
      <p>搜书</p>
      <p>搜书</p>
      <p>搜书</p>
      <p>搜书</p>
      <p>搜书</p>
      <p>搜书</p>
      <p>搜书</p>
      <p>搜书</p>
      <p>搜书</p>
      <p>搜书</p>
      <p>搜书</p>
      <p>搜书</p>
      <p>搜书</p>
      <p>搜书</p>
      <p>搜书</p>
      <p>搜书</p>
      <p>搜书</p>
      <p>搜书</p>
      <p>搜书</p>
      <p>搜书</p>
      <p>搜书</p>
      <p>搜书</p>
      <p>搜书</p>
      <p>搜书</p>
      <p>搜书</p>
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
.search{
  display:-webkit-box
  -webkit-box-orient:vertical
  height:100%
  .header{
    height :4rem
    line-height :4rem
    background-color :#bf360c
    padding : 0 10px
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
      color :#fff
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

