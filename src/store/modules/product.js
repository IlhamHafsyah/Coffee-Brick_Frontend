import axios from 'axios'
// import router from '../../router'

export default {
  state: {
    limit: 12,
    page: 1,
    id: '',
    search: '',
    sort: '',
    upid: '',
    delid: '',
    totalRows: null,
    products: [],
    productsDetail: [],
    postResult: []
  },
  mutations: {
    setProduct(state, payload) {
      state.products = payload.data
      state.totalRows = payload.pagination.totalData
    },
    setProductsDetail(state, payload) {
      state.productsDetail = payload
    },
    setCategoryId(state, payload) {
      state.productsDetail.category_id = payload
    },
    setStock(state, payload) {
      state.productsDetail.product_stock = payload
    },
    setStartHour(state, payload) {
      state.productsDetail.start_hour = payload
    },
    setEndHour(state, payload) {
      state.productsDetail.end_hour = payload
    },
    setBaveragesSize(state, payload) {
      state.productsDetail.size_r = payload
      state.productsDetail.size_l = payload
      state.productsDetail.size_xl = payload
    },
    setFoodsSize(state, payload) {
      state.productsDetail.size_250 = payload
      state.productsDetail.size_300 = payload
      state.productsDetail.size_500 = payload
    },
    //1
    changePage(state, payload) {
      state.page = payload
    },
    searchProduct(state, payload) {
      state.search = payload
    },
    sortProduct(state, payload) {
      state.sort = payload
    },
    update(state, payload) {
      state.upid = payload
    },
    delete(state, payload) {
      state.delid = payload
    },
    setId(state, payload) {
      state.id = payload
    }
  },
  actions: {
    getProducts(context) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `http://localhost:4001/product?id=${context.state.id}&page=${context.state.page}&limit=${context.state.limit}&search=${context.state.search}&sort=${context.state.sort}`
          )
          .then(result => {
            console.log(result)
            context.commit('setProduct', result.data)
            resolve(result)
            //   state.totalRows = response.data.pagination.totalData
            //   state.products = response.data.data
            //   state.id = id
            //   console.log(state.sort)
          })
          .catch(error => {
            console.log(error)
            reject(error)
          })
      })
    },
    postProducts(context, payload) {
      return new Promise((resolve, reject) => {
        console.log(payload)
        axios
          .post('http://localhost:4001/product', payload)
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
    updateProducts(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(`http://localhost:4001/product/${context.state.upid}`, payload)
          .then(result => {
            resolve(result)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    deleteProducts(context) {
      return new Promise((resolve, reject) => {
        axios
          .delete(`http://localhost:4001/product/${context.state.delid}`)
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
    getPageProduct(state) {
      return state.page
    },
    getLimitProduct(state) {
      return state.limit
    },
    getDataProduct(state) {
      return state.products
    },
    getTotalRowsProduct(state) {
      return state.totalRows
    },
    getSearchProduct(state) {
      return state.search
    },
    getIdProduct(state) {
      return state.id
    },
    getSortProduct(state) {
      return state.sort
    },
    getProductDetail(state) {
      return state.productsDetail
    }
  }
}
