<template>
  <div class="product">
    <div class="centered">
      <img alt="Vue logo" src="../assets/logo.png" />
      <Navbar />
      <h1>This is Page Product</h1>
      <b-alert :show="alert">{{ isMsg }}</b-alert>
      <form>
        <input
          type="text"
          v-model="form.product_name"
          placeholder="Product Name ..."
        />
        <br />
        <input type="file" @change="handleFile" />
        <br />
        <input
          type="text"
          v-model="form.product_price"
          placeholder="Product Price ..."
        />
        <br />
        <input
          type="text"
          v-model="form.category_id"
          placeholder="Category Id ..."
        />
        <br />
        <input
          type="text"
          v-model="form.product_status"
          placeholder="Product Status ..."
        />
        <br />
        <button type="button" @click="postProduct()">Save</button>
        <button type="button" @click="patchProduct()">Update</button>
        <h5>{{ form }}</h5>
      </form>
      <hr />
      <b-container class="bv-example-row">
        <b-row>
          <b-col
            xl="3"
            lg="4"
            md="6"
            sm="12"
            v-for="(item, index) in products"
            :key="index"
          >
            <b-card
              v-bind:title="item.product_name"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 10rem;"
              class="mb-2"
            >
              <b-card-text @click="detailProduct(item.product_id)">
                Rp. {{ item.product_price }}
              </b-card-text>

              <b-button variant="primary" @click="addToCart(item)"
                >Add To Cart</b-button
              >
              <b-button variant="success" @click="setProduct(item)"
                >Update</b-button
              >
              <b-button variant="danger" @click="deleteProduct(item.product_id)"
                >Delete</b-button
              >
            </b-card>
          </b-col>
        </b-row>
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="limit"
          @change="handlePageChange"
        ></b-pagination>
      </b-container>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/_base/Navbar'
import axios from 'axios'
export default {
  name: 'Product',
  components: {
    Navbar
  },
  computed: {
    rows() {
      return this.totalRows
    }
  },
  data() {
    return {
      products: [],
      form: {
        product_name: '',
        category_id: '',
        product_price: '',
        product_status: '',
        product_image: ''
      },
      alert: false,
      isMsg: '',
      product_id: '',
      currentPage: 1,
      totalRows: null,
      limit: 3,
      page: 1,
      cart: []
    }
  },
  created() {
    this.getProduct()
    let getCart = localStorage.getItem('cart')
    getCart = JSON.parse(getCart)
    if (getCart) {
      this.cart = getCart
    } else {
      this.cart = []
    }
  },
  methods: {
    getProduct() {
      axios
        .get(
          `https://${process.env.VUE_APP_API}/product?id=&page=${this.page}&limit=${this.limit}&search=&sort=`
        )
        .then(response => {
          console.log(response)
          this.totalRows = response.data.pagination.totalData
          this.products = response.data.data
        })
        .catch(error => {
          console.log(error.response)
        })
    },
    postProduct() {
      console.log(this.form)
      const {
        product_name,
        product_price,
        product_status,
        category_id,
        product_image
      } = this.form
      const data = new FormData()
      data.append('product_name', product_name)
      data.append('product_price', product_price)
      data.append('product_status', product_status)
      data.append('category_id', category_id)
      data.append('product_image', product_image.name)
      for (var pair of data.entries()) {
        console.log(pair[0] + ', ' + pair[1])
      }

      axios
        .post(`https://${process.env.VUE_APP_API}/product`, data)
        .then(response => {
          console.log(response)
          this.alert = true
          this.isMsg = response.data.msg
          this.getProduct()
        })
        .catch(error => {
          console.log(error.response)
        })
    },
    setProduct(data) {
      console.log(data)
      this.form = data
      this.product_id = data.product_id
    },
    patchProduct() {
      console.log(this.product_id)
      console.log(this.form)
    },
    deleteProduct(product_id) {
      console.log(product_id)
      axios
        .patch(
          `https://${process.env.VUE_APP_API}/product/deleteProduct/${product_id}`
        )
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error.response)
        })
    },
    handlePageChange(numberPage) {
      console.log(numberPage)
      this.page = numberPage
      this.getProduct()
    },
    detailProduct(product_id) {
      console.log(product_id)
      this.$router.push({ name: 'productDetail', params: { id: product_id } })
    },
    addToCart(data) {
      const setCart = {
        product_id: data.product_id,
        product_name: data.product_name,
        product_price: data.product_price,
        product_qty: 1,
        product_total: data.product_price
      }
      this.cart = [...this.cart, setCart]
      localStorage.setItem('cart', JSON.stringify(this.cart))
      console.log(this.cart)
    },
    handleFile(event) {
      console.log(event)
      this.form.product_image = event.target.files[0]
    }
  }
}
</script>

<style scoped>
.centered {
  text-align: center;
}
</style>
