<template>
  <div class="listproduct">
    <div class="category">
      <ul>
        <li><a @click="getProductCategory(allProduct)">All Product</a></li>
        <li>
          <a @click="getProductCategory(1)">Coffee</a>
        </li>
        <li><a @click="getProductCategory(2)">Non Coffee</a></li>
        <li><a @click="getProductCategory(3)">Foods</a></li>
        <li><a @click="getProductCategory(4)">Add-on</a></li>
      </ul>
      <div class="filter">
        <b-dropdown
          id="dropdown-1"
          text="Filter"
          variant="default"
          class="m-md-2"
        >
          <b-dropdown-item @click="byName(pn)">Name (A-Z)</b-dropdown-item>
          <b-dropdown-item @click="byPrice(pp)">Price</b-dropdown-item>
          <b-dropdown-item @click="byDate(pc)">Date</b-dropdown-item>
        </b-dropdown>
      </div>
      <!-- <div class="select">
        <select v-model="pn">
          <option @click="byName(pn)">product_name</option>
          <option>product_price</option>
        </select>
      </div> -->
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
          <button @click="updateProduct(item)">Update</button>
          <button @click="deleteProduct(item.product_id)">Delete</button>
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
// import axios from 'axios'
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'Card',
  computed: {
    // rows() {
    //   return this.totalRows
    // },
    ...mapGetters({ products: 'getDataProduct' }),
    ...mapGetters({ limit: 'getLimitProduct' }),
    ...mapGetters({ rows: 'getTotalRowsProduct' }),
    // ...mapGetters({ search: 'getSearchProduct' }),
    ...mapGetters({ id: 'getIdProduct' }),
    ...mapGetters({ productsDetail: 'getProductDetail' })
    // ...mapGetters({ sort: 'getSortProduct' })
    // ...mapGetters({ page: 'getPageProduct' })
  },
  data() {
    return {
      // products: [],
      alert: false,
      isMsg: '',
      product_id: '',
      currentPage: 1,
      pn: 'product_name',
      pp: 'product_price',
      pc: 'product_created_at',
      allProduct: ''
      // char: ''
      // totalRows: null,
      // limit: 12,
      // page: 1,
      // id: '',
      // search: ''
      // sort: ''
    }
  },
  created() {
    this.getProducts()
  },
  methods: {
    ...mapActions(['getProducts']),
    //2
    ...mapMutations(['changePage']),
    ...mapMutations(['sortProduct']),
    ...mapMutations(['setId']),
    ...mapMutations(['setProductsDetail']),
    // ...mapMutations(['searchProduct']),
    // getProduct(id) {
    //   axios
    //     .get(
    //       `http://localhost:4001/product?id=${this.id}&page=${this.page}&limit=${this.limit}&search=${this.search}&sort=${this.sort}`
    //     )
    //     .then(response => {
    //       this.totalRows = response.data.pagination.totalData
    //       this.products = response.data.data
    //       this.id = id
    //       console.log(this.sort)
    //     })
    //     .catch(error => {
    //       console.log(error)
    //     })
    // },
    //3
    handlePageChange(numberPage) {
      console.log(numberPage)
      // this.page = numberPage
      this.changePage(numberPage)
      this.getProducts()
    },
    byName(pn) {
      this.sortProduct(pn)
      this.getProducts()
    },
    byPrice(pp) {
      this.sortProduct(pp)
      this.getProducts()
    },
    byDate(pc) {
      this.sortProduct(pc)
      this.getProducts()
    },
    // searchingProduct(char) {
    //   console.log(char)
    //   this.searchProduct(char)
    //   this.getProducts()
    // },
    getProductCategory(id) {
      this.setId(id)
      this.getProducts()
    },
    updateProduct(item) {
      this.setProductsDetail(item)
      this.$router.push({
        name: 'Updateproduct',
        params: { id: item.product_id }
      })
    },
    deleteProduct(product_id) {
      this.$router.push({ name: 'Deleteproduct', params: { id: product_id } })
    },
    detailProduct(product_id) {
      this.$router.push({ name: 'Detail', params: { id: product_id } })
    }
  }
}
</script>
