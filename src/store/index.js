import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import getters from './getters'
import style from './modules/style'
import bookshelf from './modules/bookshelf'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  actions,
  getters,
  modules: {
    style,
    bookshelf
  }
})
