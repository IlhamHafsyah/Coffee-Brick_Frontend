export default {
  state: {
    cart: []
  },
  mutations: {
    setCartData(state, payload) {
      state.cart = payload
      console.log(state.cart)
    }
  },
  actions: {},
  getters: {}
}
