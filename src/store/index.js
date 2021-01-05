import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './modules/auth'
import Regis from './modules/regis'
import Dashboard from './modules/dashboard'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { Auth, Regis, Dashboard },
  state: {
    name: 'Ilham'
  },
  mutations: {},
  actions: {},
  getters: {}
})
