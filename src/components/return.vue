<template>
  <div class="return">
    <a @click="goBack">返回</a>
  </div>
</template>
<script>
export default {
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="stylus" scoped>
.return{
  a{
    display :block
  }
}
</style>

