import Vue from 'vue'
import Router from 'vue-router'

// 页面
import Bookcase from '../pages/bookcase'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: { name: 'Bookcase' }
    },
    {
      path: '/bookcase',
      name: 'Bookcase',
      component: Bookcase
    }
  ]
})
