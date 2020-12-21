<template>
  <div class="listproduct">
    <div class="category">
      <ul>
        <li><a href="http://localhost:8080/product">All Product</a></li>
        <li>
          <a @click="getProduct(1)">Coffee</a>
        </li>
        <li><a @click="getProduct(2)">Non Coffee</a></li>
        <li><a @click="getProduct(3)">Foods</a></li>
        <li><a @click="getProduct(4)">Add-on</a></li>
      </ul>
    </div>
    <b-row>
      <b-col
        xl="3"
        lg="4"
        md="6"
        sm="12"
        v-for="(item, index) in products"
        :key="index"
      >
        <div class="product-card">
          <b-card
            :title="item.product_name"
            img-src="https://kopicoffindo.files.wordpress.com/2016/11/mengenal-sejarah-cappucino.jpeg?w=2000"
            img-alt="Image"
            img-top
            tag="article"
            class="mb-2"
            @click="detailProduct(item.product_id)"
          >
            <div class="price">
              <b-card-text> IDR {{ item.product_price }} </b-card-text>
            </div>
          </b-card>
        </div>
      </b-col>
    </b-row>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="limit"
      @change="handlePageChange"
    ></b-pagination>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Card',
  computed: {
    rows() {
      return this.totalRows
    }
  },
  data() {
    return {
      products: [],
      // productsByCategory: [],
      alert: false,
      isMsg: '',
      product_id: '',
      currentPage: 1,
      totalRows: null,
      limit: 12,
      page: 1,
      id: ''
    }
  },
  created() {
    this.getProduct(this.id)
    // this.getCategoryById(this.id)
  },
  methods: {
    getProduct(id) {
      axios
        .get(
          `http://localhost:4000/product?page=${this.page}&limit=${this.limit}&search=${this.id}&sort`
        )
        .then(response => {
          console.log(response)
          console.log(id)
          this.totalRows = response.data.pagination.totalData
          this.products = response.data.data
          console.log(this.totalRows)
          this.id = id
          console.log(this.id)
        })
        .catch(error => {
          console.log(error)
        })
    },
    // getCategoryById(id) {
    //   axios
    //     .get(`http://localhost:4000/category/${id}`)
    //     .then(response => {
    //       console.log(response)
    //       this.id = id
    //       this.totalRows = response.data.pagination.totalData
    //       this.productsByCategory = response.data.data
    //     })
    //     .catch(error => {
    //       console.log(error)
    //     })
    // },
    handlePageChange(numberPage) {
      console.log(numberPage)
      this.page = numberPage
      this.getProduct(this.id)
    },
    detailProduct(product_id) {
      this.$router.push({ name: 'Detail', params: { id: product_id } })
    }
  }
}
</script>
