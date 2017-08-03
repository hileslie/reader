<template>
  <footer class="footer">
    <nav class="nav">
      <router-link to="/bookcase">书架</router-link>
      <router-link to="/selection">精选</router-link>
      <router-link to="/classify">分类</router-link>
      <router-link to="/ranking">排行</router-link>
    </nav>
  </footer>
</template>
<style lang="stylus" scoped>
.footer{
  overflow: hidden
  background-color :#212121
  .nav{
    display:-webkit-box
    height: 4rem
    line-height: 4rem
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
</style>
