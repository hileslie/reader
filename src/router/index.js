import Vue from 'vue'
import Router from 'vue-router'

// 页面
import Bookcase from '../pages/bookcase'
import Selection from '../pages/selection'
import Classify from '../pages/classify'
import Ranking from '../pages/ranking'

import Search from '../pages/search'

import Booklist from '../pages/book-list'

import Bookdetails from '../pages/book-details'

import SimilarRecommend from '../pages/similar-recommend'

import Book from '../pages/book'

import FeaturedList from '../pages/featured-list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: { name: 'Bookcase' }
    },
    { // 书架
      path: '/bookcase',
      name: 'Bookcase',
      component: Bookcase
    },
    { // 精选
      path: '/selection',
      name: 'Selection',
      component: Selection
    },
    { // 分类
      path: '/classify',
      name: 'Classify',
      component: Classify
    },
    { // 排行
      path: '/ranking',
      name: 'Ranking',
      component: Ranking
    },
    { // 搜索
      path: '/search',
      name: 'Search',
      component: Search
    },
    { // 书单列表
      path: '/book-list',
      name: 'Booklist',
      component: Booklist
    },
    { // 书本介绍详情
      path: '/book-details',
      name: 'Bookdetails',
      component: Bookdetails
    },
    { // 同类推荐
      path: '/similar-recommend',
      name: 'SimilarRecommend',
      component: SimilarRecommend
    },
    { // 书
      path: '/book',
      name: 'Book',
      component: Book
    },
    { // 精选页面更多列表
      path: '/featured-list',
      name: 'FeaturedList',
      component: FeaturedList
    }
  ]
})
