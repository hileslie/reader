<template>
  <section class="search">
    <header class="header">
      <v-return></v-return>
      <h2 class="title">玄幻</h2>
    </header>
    <section class="content">

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
    display: -webkit-box
    height :4rem
    line-height :4rem
    .title{
      position :absolute

      width :80%
      margin :0 auto
      text-align :center
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
    background-color:#ccc
  }
}
</style>

