import axios from 'axios'
export default {
  state: {},
  mutations: {},
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
    }
  },
  getters: {}
}
