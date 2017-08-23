<template>
  <section class="classify">
    <header class="header">
      <div class="item left">分类</div>
      <div class="item right">
        <router-link to="/search">搜索</router-link>
      </div>
    </header>
    <section class="content">
      <img class="loading" src="../assets/img/timg.gif" alt="" v-if="loading">
      <div class="main" v-for="(x, index) in classify" :key="index">
        <h2 class="title">{{x.title}}</h2>
        <ul class="box">
          <li class="item" v-for="(y, index) in x.bookList" :key="index">
            <router-link :to="{ name: 'Booklist', query: {major: y.name, gender: x.gender}}">
              <p class="name">{{y.name}}</p>
              <p>{{y.bookCount}}本</p>
            </router-link>
          </li>
        </ul>
      </div>
    </section>
    <v-footer></v-footer>
  </section>
</template>
<script>
import Footer from '../components/footer'
import api from '../api/api'

export default {
  data () {
    return {
      classify: [],
      loading: true
    }
  },
  components: {
    'v-footer': Footer
  },
  created () {
    api.getAllCategories().then((response) => {
      Object.entries(response.data).forEach(([key, value]) => {
        let obj = null
        switch (key) {
          case 'male':
            obj = {
              title: '男生',
              gender: 'male',
              bookList: value
            }
            break
          case 'female':
            obj = {
              title: '女生',
              gender: 'female',
              bookList: value
            }
            break
          case 'press':
            obj = {
              title: '出版',
              gender: 'press',
              bookList: value
            }
            break
        }
        if (obj !== null) {
          this.classify.push(obj)
        }
      })
      this.$nextTick(function () {
        this.loading = false
      })
    }).catch(err => {
      console.log(err)
    })
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
    .loading{
      position :absolute
      top :30%
      left :50%
      margin-left :-33px
    }
    .main{
      .title{
        height :4rem
        line-height :4rem
        padding-left :10px
        font-size :1.2rem
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
          line-height :1.5
          .name{
            font-size :1.4rem
            color :#000
          }
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
