import axios from 'axios'
import router from '../../router'

export default {
  state: {
    users: {},
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
    delUsers(state) {
      state.users = {}
      state.token = null
    }
  },
  actions: {
    login(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post('http://localhost:4001/users/login', payload)
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
    isLogin(state) {
      return state.token !== null
    }
  }
}
