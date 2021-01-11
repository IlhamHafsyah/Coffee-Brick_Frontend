<template>
  <div class="newproduct">
    <Header />
    <hr />
    <b-container>
      <b-row>
        <b-col cols="4">
          <div class="left">
            <div class="picture">
              <b-card><img src="../assets/camera.png" alt=""/></b-card>
            </div>
            <b-card>
              <input type="file" @change="handleFile" />
              <div class="tap">
                <b-button>Take a Picture</b-button>
              </div>
              <br />
              <div class="cfg">
                <b-button>Choose From Gallery</b-button>
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
                    v-model="form.start_hour"
                    @click="setStart('08:00:00.0000')"
                    >08:00</b-dropdown-item
                  >
                  <b-dropdown-item
                    v-model="form.start_hour"
                    @click="setStart('12:00:00.0000')"
                    >12:00</b-dropdown-item
                  >
                  <b-dropdown-item
                    v-model="form.start_hour"
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
                    v-model="form.end_hour"
                    @click="setEnd('12:00:00.0000')"
                    >12:00</b-dropdown-item
                  >
                  <b-dropdown-item
                    v-model="form.end_hour"
                    @click="setEnd('16:00:00.0000')"
                    >16:00</b-dropdown-item
                  >
                  <b-dropdown-item
                    v-model="form.end_hour"
                    @click="setEnd('20:00:00.0000')"
                    >20:00</b-dropdown-item
                  >
                </b-dropdown>
              </div>
              <br />
              <br />
              <h3>Input Stock :</h3>
              <div>
                <b-dropdown
                  id="dropdown-1"
                  text="Input stock"
                  variant="default"
                  class="m-md-2"
                >
                  <b-dropdown-item
                    v-model="form.product_stock"
                    @click="setProductStock(100)"
                    >100</b-dropdown-item
                  >
                  <b-dropdown-item
                    v-model="form.product_stock"
                    @click="setProductStock(150)"
                    >150</b-dropdown-item
                  >
                  <b-dropdown-item
                    v-model="form.product_stock"
                    @click="setProductStock(200)"
                    >200</b-dropdown-item
                  >
                </b-dropdown>
              </div>
              <h3>Category :</h3>
              <div>
                <!-- <select name="cars" id="cars">
                  <option @click="setCategory('1')">Coffee</option>
                  <option @click="setCategory('2')">Non-Coffee</option>
                  <option @click="setCategory('3')">Foods</option>
                  <option @click="setCategory(p)">Add-on</option>
                </select> -->
                <b-dropdown
                  id="dropdown-1"
                  text="Category"
                  variant="default"
                  class="m-md-2"
                >
                  <b-dropdown-item
                    v-model="form.category_id"
                    @click="setBavCategory(1)"
                    >Coffee</b-dropdown-item
                  >
                  <b-dropdown-item
                    v-model="form.category_id"
                    @click="setBavCategory(2)"
                    >Non-coffee</b-dropdown-item
                  >
                  <b-dropdown-item
                    v-model="form.category_id"
                    @click="setFoodsCategory(3)"
                    >Food</b-dropdown-item
                  >
                  <b-dropdown-item
                    v-model="form.category_id"
                    @click="setFoodsCategory(4)"
                    >Add-on</b-dropdown-item
                  >
                </b-dropdown>
              </div>
              <h6>{{ form }}</h6>
            </b-card>
          </div>
        </b-col>
        <b-col cols="8">
          <div class="right">
            <b-card>
              <h4>Name :</h4>
              <input
                type="text"
                v-model="form.product_name"
                placeholder="  Product Name ..."
              /><br /><br />
              <h4>Price :</h4>
              <input
                type="text"
                v-model="form.product_price"
                placeholder="  Product Price ..."
              /><br /><br />
              <h4>Description :</h4>
              <input
                type="text"
                v-model="form.product_desc"
                placeholder="  Product Description ..."
              /><br /><br />
              <h4>Input Product Size :</h4>
              <h5>Click size you want to use for this product</h5>
              <div class="size">
                <b-form-checkbox
                  v-model="form.size_r"
                  id="sizeR"
                  name="check-button"
                  value="1"
                  unchecked-value="0"
                  button
                  button-variant="warning"
                >
                  R
                </b-form-checkbox>
                <b-form-checkbox
                  v-model="form.size_l"
                  id="sizeL"
                  name="check-button"
                  value="1"
                  unchecked-value="0"
                  button
                  button-variant="warning"
                >
                  L
                </b-form-checkbox>
                <b-form-checkbox
                  v-model="form.size_xl"
                  id="sizeXL"
                  name="check-button"
                  value="1"
                  unchecked-value="0"
                  button
                  button-variant="warning"
                >
                  XL
                </b-form-checkbox>
                <b-form-checkbox
                  v-model="form.size_250"
                  id="size250"
                  name="check-button"
                  value="1"
                  unchecked-value="0"
                  button
                  button-variant="warning"
                >
                  250 <br />gr
                </b-form-checkbox>
                <b-form-checkbox
                  v-model="form.size_300"
                  id="size300"
                  name="check-button"
                  value="1"
                  unchecked-value="0"
                  button
                  button-variant="warning"
                >
                  300 <br />gr
                </b-form-checkbox>
                <b-form-checkbox
                  v-model="form.size_500"
                  id="size500"
                  name="check-button"
                  value="1"
                  unchecked-value="0"
                  button
                  button-variant="warning"
                >
                  500 <br />gr
                </b-form-checkbox>
                <!-- <input
                  type="checkbox"
                  v-model="form.size_r"
                  true-value="1"
                  false-value="0"
                /><input
                  type="checkbox"
                  v-model="form.size_l"
                  true-value="1"
                  false-value="0"
                /><input
                  type="checkbox"
                  v-model="form.size_xl"
                  true-value="1"
                  false-value="0"
                /><input
                  type="checkbox"
                  v-model="form.size_250"
                  true-value="1"
                  false-value="0"
                /><input
                  type="checkbox"
                  v-model="form.size_300"
                  true-value="1"
                  false-value="0"
                /><input
                  type="checkbox"
                  v-model="form.size_500"
                  true-value="1"
                  false-value="0"
                />
                <b-button>R</b-button>
                <b-button>L</b-button>
                <b-button>XL</b-button>
                <b-button>250<br />gr</b-button>
                <b-button>300<br />gr</b-button>
                <b-button>500<br />gr</b-button><br /> -->
              </div>
              <br />
              <h4>Input Delivery Methods :</h4>
              <h5>Click methods you want to use for this product</h5>
              <div class="delivery">
                <b-form-checkbox
                  v-model="form.take_away"
                  name="check-button"
                  value="1"
                  unchecked-value="0"
                  button
                  button-variant="warning"
                >
                  Take away
                </b-form-checkbox>
                <b-form-checkbox
                  v-model="form.dine_in"
                  name="check-button"
                  value="1"
                  unchecked-value="0"
                  button
                  button-variant="warning"
                >
                  Dine in
                </b-form-checkbox>
                <b-form-checkbox
                  v-model="form.home_delivery"
                  name="check-button"
                  value="1"
                  unchecked-value="0"
                  button
                  button-variant="warning"
                >
                  Home Delivery
                </b-form-checkbox>
                <!-- <input
                  type="checkbox"
                  v-model="form.take_away"
                  true-value="1"
                  false-value="0"
                /><input
                  type="checkbox"
                  v-model="form.dine_in"
                  true-value="1"
                  false-value="0"
                /><input
                  type="checkbox"
                  v-model="form.home_delivery"
                  true-value="1"
                  false-value="0"
                />
                <b-button>take away</b-button>
                <b-button>Dine in</b-button>
                <b-button>Home Delivery</b-button><br /><b></b> -->
              </div>
              <br /><br />
              <b-button @click="postProduct()">Save Product</b-button
              ><br /><br />
              <b-button>Cancel</b-button>
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
import { mapActions } from 'vuex'
// import axios from 'axios'
import Header from '../components/_base/Header'
import Footer from '../components/_base/Footer'

export default {
  name: 'Newproduct',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      form: {
        category_id: '1',
        product_name: '',
        product_image: '',
        product_price: '',
        product_stock: '100',
        product_desc: '',
        size_r: '0',
        size_l: '0',
        size_xl: '0',
        size_250: '0',
        size_300: '0',
        size_500: '0',
        home_delivery: '0',
        dine_in: '0',
        take_away: '0',
        start_hour: '00:00:00.0000',
        end_hour: '00:00:00.0000',
        product_created_at: new Date(),
        product_status: '1'
      }
    }
  },
  methods: {
    ...mapActions(['postProducts']),
    // ...mapMutations(['setBaveragesSize']),
    // ...mapMutations(['setFoodsSize']),
    setBavCategory(id) {
      this.form.category_id = id
      this.form.size_r = 1
      this.form.size_l = 1
      this.form.size_xl = 1
      this.form.size_250 = 0
      this.form.size_300 = 0
      this.form.size_500 = 0
      document.getElementById('size250').disabled = true
      document.getElementById('size300').disabled = true
      document.getElementById('size500').disabled = true
      document.getElementById('sizeR').disabled = false
      document.getElementById('sizeL').disabled = false
      document.getElementById('sizeXL').disabled = false
    },
    setStart(hour) {
      this.form.start_hour = hour
    },
    setEnd(hour) {
      this.form.end_hour = hour
    },
    setProductStock(val) {
      this.form.product_stock = val
    },
    setFoodsCategory(id) {
      this.form.category_id = id
      this.form.size_r = 0
      this.form.size_l = 0
      this.form.size_xl = 0
      this.form.size_250 = 1
      this.form.size_300 = 1
      this.form.size_500 = 1
      document.getElementById('sizeR').disabled = true
      document.getElementById('sizeL').disabled = true
      document.getElementById('sizeXL').disabled = true
      document.getElementById('size250').disabled = false
      document.getElementById('size300').disabled = false
      document.getElementById('size500').disabled = false
    },
    handleFile(event) {
      console.log(event)
      this.form.product_image = event.target.files[0]
    },
    postProduct() {
      console.log(this.form)
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
      } = this.form
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

      this.postProducts(data)
        .then(result => {
          console.log(result)
          alert('Success Post Product')
        })
        .catch(error => {
          alert(error)
        })
      this.$router.push('/product')
    }
  }
}
</script>

<style>
@import '../assets/newproduct.css';
/* font */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap');
</style>
