import axios from 'axios'
import router from '../../router'

export default {
  state: {
    users: {},
    data: {},
    profileid: '',
    token: localStorage.getItem('token') || null
  },
  mutations: {
    setUsers(state, payload) {
      // console.log('proses mutation setUsers')
      console.log(payload)
      state.users = payload
      state.token = payload.token
      // console.log('proses mutation setUsers')
      // //cek kesimpen apa engga
      // console.log(state.users)
      // console.log(state.token)
    },
    setData(state, payload) {
      // console.log('proses mutation setUsers')
      state.data = payload
      // state.token = payload.token
      // console.log('proses mutation setUsers')
      // //cek kesimpen apa engga
      // console.log(state.users)
      // console.log(state.token)
    },
    delUsers(state) {
      state.users = {}
      state.token = null
    },
    getid(state, payload) {
      state.profileid = payload
    }
  },
  actions: {
    login(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`http://${process.env.VUE_APP_API}/users/login`, payload)
          .then(result => {
            // console.log(result)
            context.commit('setUsers', result.data.data)
            localStorage.setItem('token', result.data.data.token)
            resolve(result)
          })
          .catch(error => {
            console.log(error.response)
            reject(error.response)
          })
      })
    },
    logout(context) {
      localStorage.removeItem('token')
      localStorage.removeItem('cart')
      context.commit('delUsers')
      router.push('/login')
    },
    getUsers(context) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `http://${process.env.VUE_APP_API}/users/${context.state.profileid}`
          )
          .then(result => {
            context.commit('setData', result.data.data[0])
            resolve(result)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    register(context, payload) {
      return new Promise((resolve, reject) => {
        console.log(payload)
        axios
          .post(`http://${process.env.VUE_APP_API}/users/register`, payload)
          .then(result => {
            context.commit('setData', result.data.data)
            console.log(result)
            resolve(result)
          })
          .catch(error => {
            console.log(error)
            reject(error)
          })
      })
    },
    editProfile(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `http://${process.env.VUE_APP_API}/users/${context.state.profileid}`,
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
    editPassword(context, payload) {
      console.log(payload)
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `http://${process.env.VUE_APP_API}/users/editpass/${context.state.profileid}`,
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
    interceptorRequest(context) {
      console.log('Interceptor request works !')
      axios.interceptors.request.use(
        function(config) {
          config.headers.Authorization = `Bearer ${context.state.token}`
          // Do something before request is sent
          return config
        },
        function(error) {
          // Do something with request error
          return Promise.reject(error)
        }
      )
    },
    interceptorResponse(context) {
      console.log('Interceptor response works !')
      axios.interceptors.response.use(
        function(response) {
          // Any status code that lie within the range of 2xx cause this function to trigger
          // Do something with response data
          return response
        },
        function(error) {
          // Any status codes that falls outside the range of 2xx cause this function to trigger
          // Do something with response error
          if (
            error.response.data.status === 403 &&
            (error.response.data.msg === 'invalid token' ||
              error.response.data.msg === 'invalid signature' ||
              error.response.data.msg === 'jwt expired' ||
              error.response.data.msg === 'jwt malformed')
          ) {
            context.dispatch('logout')
            alert(error.response.data.msg)
          }
          return Promise.reject(error)
        }
      )
    }
  },
  getters: {
    setUsers(state) {
      return state.users
    },
    datas(state) {
      return state.data
    },
    isLogin(state) {
      return state.token !== null
    }
  }
}
