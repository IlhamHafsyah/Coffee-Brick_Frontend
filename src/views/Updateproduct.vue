<template>
  <div class="updateproduct">
    <Header />
    <hr />
    <b-container>
      <b-row>
        <b-col cols="4">
          <div class="left">
            <div class="picture">
              <img v-if="url" :src="url" class="round-img" />
              <img
                v-else-if="productsDetail.product_image"
                class="round-img"
                :src="
                  `https://${URL}/fileUploadsApi1/` +
                    productsDetail.product_image
                "
                alt="photo"
              />
              <div v-else>
                <img
                  class="default"
                  style="background-color:#d2d2d2;border-radius:50%;width:230px;height:230px"
                />
              </div>
            </div>
            <b-card>
              <div class="cfg">
                <b-button>
                  <input type="file" id="file" @change="handleFile" />
                  <label for="file">Choose From Gallery</label>
                </b-button>
              </div>
              <br /><br /><br />
              <h3>Delivery Hour :</h3>
              <div>
                <b-dropdown
                  id="dropdown-1"
                  text="Select start hour"
                  variant="default"
                  class="m-md-2"
                >
                  <b-dropdown-item
                    v-model="productsDetail.start_hour"
                    @click="setStart('08:00:00.0000')"
                    >08:00</b-dropdown-item
                  >
                  <b-dropdown-item
                    v-model="productsDetail.start_hour"
                    @click="setStart('12:00:00.0000')"
                    >12:00</b-dropdown-item
                  >
                  <b-dropdown-item
                    v-model="productsDetail.start_hour"
                    @click="setStart('16:00:00.0000')"
                    >16:00</b-dropdown-item
                  >
                </b-dropdown>
              </div>
              <div>
                <b-dropdown
                  id="dropdown-1"
                  text="Select end hour"
                  variant="default"
                  class="m-md-2"
                >
                  <b-dropdown-item
                    v-model="productsDetail.end_hour"
                    @click="setEnd('12:00:00.0000')"
                    >12:00</b-dropdown-item
                  >
                  <b-dropdown-item
                    v-model="productsDetail.end_hour"
                    @click="setEnd('16:00:00.0000')"
                    >16:00</b-dropdown-item
                  >
                  <b-dropdown-item
                    v-model="productsDetail.end_hour"
                    @click="setEnd('20:00:00.0000')"
                    >20:00</b-dropdown-item
                  >
                </b-dropdown>
              </div>
              <br />
              <br />
              <h3>Input Stock :</h3>
              <div>
                <div>
                  <input
                    type="number"
                    min="1"
                    v-model="productsDetail.product_stock"
                  />
                </div>
                <br />
              </div>
              <h3>Category :</h3>
              <div>
                <b-dropdown
                  id="dropdown-1"
                  text="Category"
                  variant="default"
                  class="m-md-2"
                >
                  <b-dropdown-item
                    v-model="productsDetail.category_id"
                    @click="setBavCategory(1)"
                    >Coffee</b-dropdown-item
                  >
                  <b-dropdown-item
                    v-model="productsDetail.category_id"
                    @click="setBavCategory(2)"
                    >Non-coffee</b-dropdown-item
                  >
                  <b-dropdown-item
                    v-model="productsDetail.category_id"
                    @click="setFoodsCategory(3)"
                    >Food</b-dropdown-item
                  >
                  <b-dropdown-item
                    v-model="productsDetail.category_id"
                    @click="setFoodsCategory(4)"
                    >Add-on</b-dropdown-item
                  >
                </b-dropdown>
              </div>
            </b-card>
          </div>
        </b-col>
        <b-col cols="8">
          <div class="right">
            <b-card>
              <h4>Name :</h4>
              <input
                type="text"
                v-model="productsDetail.product_name"
                placeholder="  Product Name ..."
              /><br /><br />
              <h4>Price :</h4>
              <input
                type="text"
                v-model="productsDetail.product_price"
                placeholder="  Product Price ..."
              /><br /><br />
              <h4>Description :</h4>
              <input
                type="text"
                v-model="productsDetail.product_desc"
                placeholder="  Product Description ..."
              /><br /><br />
              <h4>Input Product Size :</h4>
              <h5>Click size you want to use for this product</h5>
              <div class="size">
                <div class="size-btn">
                  <b-button
                    v-model="productsDetail.size_r"
                    id="sizeR"
                    @click="setr"
                    :class="
                      productsDetail.size_r === 1
                        ? 'size-btn active'
                        : 'size-btn'
                    "
                    >R</b-button
                  >
                  <b-button
                    v-model="productsDetail.size_l"
                    id="sizeL"
                    @click="setl"
                    :class="
                      productsDetail.size_l === 1
                        ? 'size-btn active'
                        : 'size-btn'
                    "
                    >L</b-button
                  >
                  <b-button
                    v-model="productsDetail.size_xl"
                    id="sizeXL"
                    @click="setxl"
                    :class="
                      productsDetail.size_xl === 1
                        ? 'size-btn active'
                        : 'size-btn'
                    "
                    >XL</b-button
                  >
                  <b-button
                    v-model="productsDetail.size_250"
                    id="size250"
                    @click="set250gr"
                    :class="
                      productsDetail.size_250 === 1
                        ? 'size-btn active'
                        : 'size-btn'
                    "
                    >250<br />gr</b-button
                  >
                  <b-button
                    v-model="productsDetail.size_300"
                    id="size300"
                    @click="set300gr"
                    :class="
                      productsDetail.size_300 === 1
                        ? 'size-btn active'
                        : 'size-btn'
                    "
                    >300<br />gr</b-button
                  >
                  <b-button
                    v-model="productsDetail.size_500"
                    id="size500"
                    @click="set500gr"
                    :class="
                      productsDetail.size_500 === 1
                        ? 'size-btn active'
                        : 'size-btn'
                    "
                    >500<br />gr</b-button
                  ><br />
                </div>
              </div>
              <br />
              <h4>Input Delivery Methods :</h4>
              <h5>Click methods you want to use for this product</h5>
              <div class="delivery">
                <div class="del-btn">
                  <b-button
                    v-model="productsDetail.take_away"
                    @click="setTakeAway"
                    :class="
                      productsDetail.take_away === 1
                        ? 'del-btn active'
                        : 'del-btn'
                    "
                    >take away</b-button
                  >
                  <b-button
                    v-model="productsDetail.dine_in"
                    @click="setDineIn"
                    :class="
                      productsDetail.dine_in === 1
                        ? 'del-btn active'
                        : 'del-btn'
                    "
                    >Dine in</b-button
                  >
                  <b-button
                    v-model="productsDetail.home_delivery"
                    @click="setHomeDel"
                    :class="
                      productsDetail.home_delivery === 1
                        ? 'del-btn active'
                        : 'del-btn'
                    "
                    >Home Delivery</b-button
                  ><br /><b></b>
                </div>
              </div>
              <br /><br />
              <b-button @click="updateProduct()">Update Product</b-button
              ><br /><br />
              <b-button @click="cancel()">Cancel</b-button>
            </b-card>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <hr />
    <Footer />
  </div>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from 'vuex'
import alert from '../mixin/alert'
import Header from '../components/_base/Header'
import Footer from '../components/_base/Footer'

export default {
  name: 'Newproduct',
  mixins: [alert],
  components: {
    Header,
    Footer
  },
  computed: {
    ...mapGetters({ productsDetail: 'getProductDetail' }),
    ...mapGetters({ productData: 'getDataProduct' })
  },
  data() {
    return {
      url: null,
      URL: process.env.VUE_APP_API
    }
  },
  created() {
    this.update(this.$route.params.id)
  },
  methods: {
    ...mapActions(['updateProducts']),
    ...mapActions(['getProducts']),
    ...mapMutations(['update']),
    ...mapMutations(['setProductsDetail']),
    ...mapMutations(['setCategoryId']),
    ...mapMutations(['setStock']),
    ...mapMutations(['setStartHour']),
    ...mapMutations(['setEndHour']),
    ...mapMutations(['setBaveragesSize']),
    ...mapMutations(['setFoodsSize']),

    setStart(hour) {
      this.setStartHour(hour)
    },
    setEnd(hour) {
      this.setEndHour(hour)
    },
    setProductStock(val) {
      this.setStock(val)
    },
    setBavCategory(id) {
      this.setCategoryId(id)
      this.setBaveragesSize(1)
      this.setFoodsSize(0)
      document.getElementById('size250').disabled = true
      document.getElementById('size300').disabled = true
      document.getElementById('size500').disabled = true
      document.getElementById('sizeR').disabled = false
      document.getElementById('sizeL').disabled = false
      document.getElementById('sizeXL').disabled = false
    },
    setFoodsCategory(id) {
      this.setCategoryId(id)
      this.setBaveragesSize(0)
      this.setFoodsSize(1)
      document.getElementById('sizeR').disabled = true
      document.getElementById('sizeL').disabled = true
      document.getElementById('sizeXL').disabled = true
      document.getElementById('size250').disabled = false
      document.getElementById('size300').disabled = false
      document.getElementById('size500').disabled = false
    },
    cancel() {
      this.$router.push('/product')
    },
    handleFile(event) {
      console.log(event)
      // this.productsDetail.product_image = event.target.files[0]
      const size = event.target.files[0].size
      const type = event.target.files[0].type
      if (type != 'image/jpeg' && type != 'image/png' && type != 'image/jpg') {
        this.makeToast(
          'Failed',
          `Type of file must be JPEG, JPG, or PNG !`,
          'danger'
        )
      } else {
        if (size > 2000000) {
          this.makeToast('Failed', `File too large (max 2 MB)`, 'danger')
        } else {
          const file = (this.productsDetail.product_image =
            event.target.files[0])
          this.url = URL.createObjectURL(file)
        }
      }
    },
    setr() {
      if (this.productsDetail.size_r === 0) {
        this.productsDetail.size_r = 1
      } else {
        this.productsDetail.size_r = 0
      }
    },
    setl() {
      if (this.productsDetail.size_l === 0) {
        this.productsDetail.size_l = 1
      } else {
        this.productsDetail.size_l = 0
      }
    },
    setxl() {
      if (this.productsDetail.size_xl === 0) {
        this.productsDetail.size_xl = 1
      } else {
        this.productsDetail.size_xl = 0
      }
    },
    set250gr() {
      if (this.productsDetail.size_250 === 0) {
        this.productsDetail.size_250 = 1
      } else {
        this.productsDetail.size_250 = 0
      }
    },
    set300gr() {
      if (this.productsDetail.size_300 === 0) {
        this.productsDetail.size_300 = 1
      } else {
        this.productsDetail.size_300 = 0
      }
    },
    set500gr() {
      if (this.productsDetail.size_500 === 0) {
        this.productsDetail.size_500 = 1
      } else {
        this.productsDetail.size_500 = 0
      }
    },
    setHomeDel() {
      if (this.productsDetail.home_delivery === 0) {
        this.productsDetail.home_delivery = 1
      } else {
        this.productsDetail.home_delivery = 0
      }
    },
    setDineIn() {
      if (this.productsDetail.dine_in === 0) {
        this.productsDetail.dine_in = 1
      } else {
        this.productsDetail.dine_in = 0
      }
    },
    setTakeAway() {
      if (this.productsDetail.take_away === 0) {
        this.productsDetail.take_away = 1
      } else {
        this.productsDetail.take_away = 0
      }
    },
    updateProduct() {
      console.log('dibawah ini detailnya')
      console.log(this.productsDetail)
      const {
        category_id,
        product_name,
        product_image,
        product_price,
        product_stock,
        product_desc,
        size_r,
        size_l,
        size_xl,
        size_250,
        size_300,
        size_500,
        home_delivery,
        dine_in,
        take_away,
        start_hour,
        end_hour,
        product_status
      } = this.productsDetail
      console.log('ini nama gambar')
      console.log(this.productsDetail.product_image)
      const data = new FormData()
      data.append('category_id', category_id)
      data.append('product_name', product_name)
      data.append('product_image', product_image)
      data.append('product_price', product_price)
      data.append('product_stock', product_stock)
      data.append('product_desc', product_desc)
      data.append('size_r', size_r)
      data.append('size_l', size_l)
      data.append('size_xl', size_xl)
      data.append('size_250', size_250)
      data.append('size_300', size_300)
      data.append('size_500', size_500)
      data.append('home_delivery', home_delivery)
      data.append('dine_in', dine_in)
      data.append('take_away', take_away)
      data.append('start_hour', start_hour)
      data.append('end_hour', end_hour)
      data.append('product_status', product_status)
      this.getProducts()
      this.setProductsDetail(data)
      this.update(this.$route.params.id)
      this.updateProducts(data)
        .then(result => {
          this.makeToast(
            `${result.data.msg}`,
            `Success Update product`,
            'success'
          )
          setTimeout(() => {
            this.$router.push('/product')
          }, 2000)
        })
        .catch(error => {
          this.makeToast('Failed', `${error.data.msg}`, 'danger')
        })
    }
  }
}
</script>

<style>
@import '../assets/updateproduct.css';
/* font */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap');
</style>
