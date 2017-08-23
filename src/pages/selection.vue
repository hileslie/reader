<template>
  <section class="selection">
    <header class="header">
      <div class="item left">精选</div>
      <div class="item center">
        <button class="left-btn" :class="{'active-btn': isActiveBtn}" @click="changeSex('male')">男生</button>
        <button class="right-btn" :class="{'active-btn': !isActiveBtn}" @click="changeSex('famale')">女生</button>
      </div>
      <div class="item right">
        <router-link to="/search">搜索</router-link>
      </div>
    </header>
    <section class="content">
      <Swiper></Swiper>
      <div class="list-type" v-for="(x, index) in featuredList" :key="index">
        <div class="top">
          <h2 class="title">
            <span></span>{{x.title}}</h2>
          <router-link class="more" :to="{ name: 'FeaturedList', query: {type: x.title,_id: x._id}}">更多</router-link>
        </div>
        <v-list :type-id="x._id"></v-list>
      </div>
    </section>
    <v-footer></v-footer>
  </section>
</template>
<script>
// 组件
import Footer from '../components/footer'
import Swiper from '../components/swiper'
import List from '../components/list'

import api from '../api/api'

export default {
  data () {
    return {
      isActiveBtn: true,
      male: [],
      famale: [],
      featuredList: []
    }
  },
  components: {
    'v-footer': Footer,
    'Swiper': Swiper,
    'v-list': List
  },
  created () {
    this.getData('male')
  },
  methods: {
    // 获取精选分类
    getData (sex) {
      this.featuredList = []
      this.male = []
      this.famale = []
      api.getFeatured().then(response => {
        response.data.data.forEach((value, index) => {
          if (value.title.indexOf('男生') >= 0) {
            this.male.push(response.data.data[index])
          } else if (value.title.indexOf('女生') >= 0) {
            this.famale.push(response.data.data[index])
          }
        })
        if (sex === 'male') {
          this.featuredList = this.male
        } else if (sex === 'famale') {
          this.featuredList = this.famale
        }
      }).catch(err => {
        console.log(err)
      })
    },
    // 改变性别
    changeSex (sex) {
      if (sex === 'male') {
        this.isActiveBtn = true
        this.getData(sex)
      } else if (sex === 'famale') {
        this.isActiveBtn = false
        this.getData(sex)
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '../assets/stylus/mixin.styl'
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
    .list-type{
      padding :0 10px
      margin-top :10px
      .top{
        clearfloat()
        .title{
          float :left
          span{
            red-block()
          }
        }
        .more{
          float :right
        }
      }
    }
  }
}
</style>
