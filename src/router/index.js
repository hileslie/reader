import Vue from 'vue'
import Router from 'vue-router'

// 页面
import Bookcase from '../pages/bookcase'
import Selection from '../pages/selection'
import Classify from '../pages/classify'
import Ranking from '../pages/ranking'

import Search from '../pages/search'

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
    {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ]
})
