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
    </div>
    <div class="filter" style="text-align: right">
      <b-dropdown text="Sort" variant="outline-none" class="btn-sort">
        <b-dropdown-item @click="byName(pn)">Name (A-Z)</b-dropdown-item>
        <b-dropdown-item @click="byPrice(pp)">Price</b-dropdown-item>
        <b-dropdown-item @click="byDate(pc)">Date</b-dropdown-item>
      </b-dropdown>
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
            :img-src="
              item.product_image === ''
                ? require('../../assets/cb.png')
                : 'http://localhost:4001/' + item.product_image
            "
            img-alt="Image"
            img-top
            tag="article"
            class="mb-2"
          >
            <div class="price">
              <b-card-text @click="detailProduct(item.product_id)">
                IDR {{ item.product_price }}
              </b-card-text>
            </div>
            <button @click="updateProduct(item)" v-if="user.users_role === 1">
              Update
            </button>
            <button
              @click="deleteProduct(item.product_id)"
              v-if="user.users_role === 1"
            >
              Delete
            </button>
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
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'Card',
  computed: {
    ...mapGetters({ products: 'getDataProduct' }),
    ...mapGetters({ user: 'setUsers' }),
    ...mapGetters({ limit: 'getLimitProduct' }),
    ...mapGetters({ rows: 'getTotalRowsProduct' }),
    ...mapGetters({ id: 'getIdProduct' }),
    ...mapGetters({ productsDetail: 'getProductDetail' })
  },
  data() {
    return {
      alert: false,
      isMsg: '',
      product_id: '',
      currentPage: 1,
      pn: 'product_name',
      pp: 'product_price',
      pc: 'product_created_at',
      allProduct: ''
    }
  },
  created() {
    this.getProducts()
  },
  methods: {
    ...mapActions(['getProducts']),
    ...mapMutations(['changePage']),
    ...mapMutations(['sortProduct']),
    ...mapMutations(['setId']),
    ...mapMutations(['setProductsDetail']),
    handlePageChange(numberPage) {
      console.log(numberPage)
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
