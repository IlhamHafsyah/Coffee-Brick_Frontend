import axios from 'axios'
export default {
  state: {
    promoDetail: [],
    updateIdPromo: '',
    delpromoid: ''
  },
  mutations: {
    setPromoDetail(state, payload) {
      state.promoDetail = payload
    },
    deleteProm(state, payload) {
      state.delpromoid = payload
    },
    updatesIdPromo(state, payload) {
      state.updateIdPromo = payload
      //   console.log(state.updateIdPromo)
    }
  },
  actions: {
    postPromo(context, payload) {
      return new Promise((resolve, reject) => {
        console.log(payload)
        axios
          .post('http://localhost:4001/promocode', payload)
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
    updatePromo(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `http://localhost:4001/promocode/${context.state.updateIdPromo}`,
            payload
          )
          .then(result => {
            resolve(result)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    deletePromo(context) {
      return new Promise((resolve, reject) => {
        axios
          .delete(`http://localhost:4001/promocode/${context.state.delpromoid}`)
          .then(result => {
            resolve(result)
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  },
  getters: {
    getPromoDetail(state) {
      return state.promoDetail
    }
  }
}
