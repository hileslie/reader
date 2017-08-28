import * as types from '../mutation-types'
// 阅读样式
const state = {
  fontSize: localStorage.getItem('FONT_SIZE'),
  nightMode: '',
  bgColor: ''
}

const getters = {
  getFontSize: state => state.fontSize
}

const mutations = {
  [types.SET_FONT_SIZE] (state, newFontSize) {
    state.fontSize = newFontSize
  }
}

const actions = {
  changeFontSize ({commit}, newFontSize) {
    localStorage.setItem('FONT_SIZE', newFontSize)
    commit(types.SET_FONT_SIZE, newFontSize)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
