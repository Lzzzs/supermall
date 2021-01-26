import Vue from 'vue'
import Vuex from 'vuex'


import actions from './actions.js'
import mutations from './mutations.js'
import modules from './modules.js'
import getters from './getters.js'
Vue.use(Vuex)

const state = {
  cartLists: []
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules,
  getters
})
