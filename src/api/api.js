import fetch from './fetch.js'

// const url = '/api'
const url = ''

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
  },

  // 获取精选分类项目更多列表http://api.zhuishushenqi.com/recommendPage/node/books/all/59128334694d1cda365b8985
  getFeaturedMoreList (_id) {
    return fetch({
      method: 'get',
      url: url + '/recommendPage/node/books/all/' + _id
    })
  },

  // 排行榜页面
  // 获取排行榜类型
  getAllRanking () {
    return fetch({
      method: 'get',
      url: url + '/ranking/gender'
    })
  },

  // 获取排行榜分类列表http://api.zhuishushenqi.com/ranking/54d42d92321052167dfb75e3
  getRankingList (_id) {
    return fetch({
      method: 'get',
      url: url + '/ranking/' + _id
    })
  },

  // 搜索页面
  // 关键字http://api.zhuishushenqi.com/book/search-hotwords
  getHotwords () {
    return fetch({
      method: 'get',
      url: url + '/book/search-hotwords'
    })
  },

  // 获取搜索子自动补充/book/auto-complete
  getText (params) {
    return fetch({
      method: 'get',
      url: url + '/book/auto-complete',
      params: params
    })
  },

  // 获取搜索小说的列表/book/fuzzy-search
  getSearchList (params) {
    return fetch({
      method: 'get',
      url: url + '/book/fuzzy-search',
      params: params
    })
  },

  // 小说页面
  // 获取小说源http://api.zhuishushenqi.com/atoc?view=summary&book=5816b415b06d1d32157790b1
  getGenuineSource (book) {
    return fetch({
      method: 'get',
      url: url + '/btoc',
      params: {
        view: 'summary',
        book: book
      }
    })
  },

  // 获取小说源http://api.zhuishushenqi.com/atoc?view=summary&book=5816b415b06d1d32157790b1
  getMixingSource (book) {
    return fetch({
      method: 'get',
      url: url + '/atoc',
      params: {
        view: 'summary',
        book: book
      }
    })
  },

  // 获取小说章节http://api.zhuishushenqi.com/atoc/568fef99adb27bfb4b3a58dc?view=chapters
  getChapters (sourceId) {
    return fetch({
      method: 'get',
      url: url + '/atoc/' + sourceId,
      params: {
        view: 'chapters'
      }
    })
  },

  // 获取章节内容http://chapterup.zhuishushenqi.com/chapter/http://vip.zhuishushenqi.com/chapter/5817f1161bb2ca566b0a5973?cv=1481275033588
  getChapterContent (link) {
    return fetch({
      method: 'get',
      url: url + '/getChapter',
      params: {
        chapterUrl: link
      }
    })
  }
}
