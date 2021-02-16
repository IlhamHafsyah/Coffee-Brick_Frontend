import axios from 'axios'

export default {
  state: {
    cart: [],
    payment_met: '',
    historyId: 0,
    historyData: [],
    detail: []
  },
  mutations: {
    setDetail(state, payload) {
      state.detail = payload
    },
    setHistoryData(state, payload) {
      state.historyData = payload
    },
    setCartData(state, payload) {
      state.cart = payload
      console.log(state.cart)
    },
    setpaymet(state, payload) {
      state.payment_met = payload
    },
    setHistoryId(state, payload) {
      state.historyId = payload
    }
  },
  actions: {
    postDetailHistory(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_API}/history/detail`, payload)
          .then(result => {
            context.commit('setHistoryId', result.data.data.history_id)
            console.log(result)
            resolve(result)
          })
          .catch(error => {
            console.log(error)
            reject(error)
          })
      })
    },
    postHistory(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_API}/history`, payload)
          .then(result => {
            console.log(result)
            resolve(result)
          })
          .catch(error => {
            console.log(error)
            reject(error)
          })
      })
    },
    getHistory(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_API}/history/${payload}`)
          .then(result => {
            context.commit('setHistoryData', result.data.data)
            console.log(result)
            resolve(result)
          })
          .catch(error => {
            console.log(error)
            reject(error)
          })
      })
    },
    getDetailHistory(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_API}/history/dh/${payload}`)
          .then(result => {
            context.commit('setDetail', result.data.data)
            console.log(result)
            resolve(result)
          })
          .catch(error => {
            console.log(error)
            reject(error)
          })
      })
    }
  },
  getters: {
    getCart(state) {
      return state.cart
    },
    getHisId(state) {
      return state.historyId
    },
    getHistoryData(state) {
      return state.historyData
    },
    getDetailHistorys(state) {
      return state.detail
    }
  }
}
