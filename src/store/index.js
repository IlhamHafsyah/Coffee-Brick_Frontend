import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import Auth from './modules/auth'
import Regis from './modules/regis'
import Dashboard from './modules/dashboard'
import Product from './modules/product'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { Auth, Regis, Dashboard, Product },
  state: {
    name: 'Ilham'
  },
  mutations: {},
  actions: {},
  getters: {},
  plugins: [
    createPersistedState({
      paths: ['Auth.users']
    })
  ]
})
