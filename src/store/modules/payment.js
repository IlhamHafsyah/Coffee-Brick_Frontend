import axios from 'axios'

export default {
  state: {
    cart: [],
    payment_met: ''
  },
  mutations: {
    setCartData(state, payload) {
      state.cart = payload
      console.log(state.cart)
    },
    setpaymet(state, payload) {
      state.payment_met = payload
    }
  },
  actions: {
    postDetailHistory(context, payload) {
      return new Promise((resolve, reject) => {
        // console.log(payload)
        axios
          .post('http://localhost:4001/history/detail', payload)
          .then(result => {
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
    }
  }
}
