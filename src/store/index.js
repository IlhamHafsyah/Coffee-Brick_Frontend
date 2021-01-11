import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import Auth from './modules/auth'
import Regis from './modules/regis'
import Dashboard from './modules/dashboard'
import Product from './modules/product'
import Payment from './modules/payment'
import Promo from './modules/promo'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { Auth, Regis, Dashboard, Product, Payment, Promo },
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
