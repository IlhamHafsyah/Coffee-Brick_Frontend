import axios from 'axios'

export default {
  state: {
    today_income: '',
    total_order: '',
    this_year_income: '',
    perMonthData: []
  },
  mutations: {
    setPerMonth(state, payload) {
      state.perMonthData = payload
      console.log(state.perMonthData)
    },
    setTodayIncome(state, payload) {
      state.today_income = payload
      // console.log(state.today_income)
    },
    setOrderPerWeek(state, payload) {
      state.total_order = payload
      // console.log(state.total_order)
    },
    setYearIncome(state, payload) {
      state.this_year_income = payload
      // console.log(state.this_year_income)
    }
  },
  actions: {
    todayIncome(context) {
      return new Promise((resolve, reject) => {
        axios
          .get(`https://${process.env.VUE_APP_API}/dashboard/ti`)
          .then(result => {
            // console.log(result)
            context.commit('setTodayIncome', result.data.data[0].today_income)
            resolve(result)
          })
          .catch(error => {
            console.log(error)
            reject(error)
          })
      })
    },
    weeklyOrder(context) {
      return new Promise((resolve, reject) => {
        axios
          .get(`https://${process.env.VUE_APP_API}/dashboard/pw`)
          .then(result => {
            // console.log(result)
            const lgth = result.data.data.length - 1
            // console.log(lgth)
            context.commit(
              'setOrderPerWeek',
              result.data.data[lgth].total_order
            )
            resolve(result)
          })
          .catch(error => {
            console.log(error)
            reject(error)
          })
      })
    },
    yearIncome(context) {
      return new Promise((resolve, reject) => {
        axios
          .get(`https://${process.env.VUE_APP_API}/dashboard/yi`)
          .then(result => {
            // console.log(result)
            context.commit(
              'setYearIncome',
              result.data.data[0].this_year_income
            )
            resolve(result)
          })
          .catch(error => {
            console.log(error)
            reject(error)
          })
      })
    },
    perMonthIncome(context) {
      return new Promise((resolve, reject) => {
        axios
          .get(`https://${process.env.VUE_APP_API}/dashboard/pm`)
          .then(result => {
            console.log(result)
            context.commit('setPerMonth', result.data.data)
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
    getPerMonth(state) {
      return state.perMonthData
    },
    getTodayIncome(state) {
      return state.today_income
    },
    getOrderPerWeek(state) {
      return state.total_order
    },
    getYearIncome(state) {
      return state.this_year_income
    }
  }
}
