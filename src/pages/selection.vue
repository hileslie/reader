<template>
  <section class="selection">
    <header class="header">头</header>
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
