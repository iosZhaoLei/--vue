import Vue from 'vue'
import Vuex from 'vuex'

import home from './modules/home'
import category from './modules/category'
import discover from './modules/discover'

import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
  username:'',
  headerImg:''
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules:{
    home,
    category,
    discover
  }
})
