import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
import category from './modules/category'
import discover from './modules/discover'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    home,
    category,
    discover
  }
})
