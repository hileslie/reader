import fetch from './fetch.js'

const url = '/api'

export default {
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

  //  获取排行榜类型
  getAllRanking () {
    return fetch({
      method: 'get',
      url: url + '/ranking/gender'
    })
  }
}
