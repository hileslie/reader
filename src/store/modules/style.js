import * as types from '../mutation-types'
// 阅读样式
const state = {
  fontSize: '',
  nightMode: '',
  bgColor: ''
}

const getters = {
  getFontSize: state => state.fontSize
}

const  mutations = {
  [types.SET_FONT_SIZE](state)
}

const actions = {
  changeFontSize ({commit, state}, newFontSize) {

  }
}
