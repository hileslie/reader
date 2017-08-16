import fetch from './fetch.js'

const url = '/api'

export default {
  // 分类页面
  //  获取所有分类
  getAllCategories () {
    return fetch({
      method: 'get',
      url: url + '/cats/lv2/statistics'
    })
  },

  // 获取分类下小类别
  getCategoriesType () {
    return fetch({
      method: 'get',
      url: url + '/cats/lv2'
    })
  },

  // 根据分类获取小说列表
  getTypeBookList (params) {
    return fetch({
      method: 'get',
      url: url + '/book/by-categories',
      params: params
    })
  },

  // 获取小说信息
  getBookInfo (_id) {
    return fetch({
      method: 'get',
      url: url + '/book/' + _id
    })
  },

  // 热门书评http://api.zhuishushenqi.com/post/review/best-by-book?book=5816b415b06d1d32157790b1&limit=5
  // 获取小说热门书评
  getBookReview (params) {
    return fetch({
      method: 'get',
      url: url + '/post/review/best-by-book',
      params: params
    })
  },

  // 你可能会喜欢http://api.zhuishushenqi.com/book/5816b415b06d1d32157790b1/recommend
  // 获取你可能喜欢的小说列表
  getLikeBook (_id) {
    return fetch({
      method: 'get',
      url: url + '/book/' + _id + '/recommend'
    })
  },

  //  获取排行榜类型
  getAllRanking () {
    return fetch({
      method: 'get',
      url: url + '/ranking/gender'
    })
  },

  // 精选页面
  // 获取轮播图数据http://api.zhuishushenqi.com/recommendPage/node/spread/575f74f27a4a60dc78a435a3?pl=ios
  getSwiper () {
    return fetch({
      method: 'get',
      url: url + '/recommendPage/node/spread/575f74f27a4a60dc78a435a3',
      params: {
        pl: 'ios'
      }
    })
  },

  // 获取精选页面的分类列表大概http://api.zhuishushenqi.com/recommendPage/nodes/5910018c8094b1e228e5868f
  getFeatured () {
    return fetch({
      method: 'get',
      url: url + '/recommendPage/nodes/5910018c8094b1e228e5868f'
    })
  },

  // 获取精选分类项目列表http://api.zhuishushenqi.com/recommendPage/books/59128334694d1cda365b8985
  getFeaturedList (_id) {
    return fetch({
      method: 'get',
      url: url + '/recommendPage/books/' + _id
    })
  }
}
