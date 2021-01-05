import axios from 'axios'
// import router from '../../router'

export default {
  state: {
    today_income: '',
    total_order: '',
    this_year_income: ''
  },
  mutations: {
    setTodayIncome(state, payload) {
      state.today_income = payload
      console.log(payload)
      console.log(state.today_income)
    }
  },
  actions: {
    todayIncome(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get('http://localhost:4001/dashboard/ti', payload)
          .then(result => {
            console.log(result)
            context.commit('setTodayIncome', result.data.data)
            resolve(result)
          })
          .catch(error => {
            console.log(error.response)
            reject(error.response)
          })
      })
    }
  },
  getters: {
    setTodayIncome(state) {
      return state.setTodayIncome
    }
  }
}
