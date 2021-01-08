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
                  <b-dropdown-item>First Action</b-dropdown-item>
                  <b-dropdown-item>Second Action</b-dropdown-item>
                  <b-dropdown-item>Third Action</b-dropdown-item>
                </b-dropdown>
              </div>
              <div>
                <b-dropdown
                  id="dropdown-1"
                  text="Select end hour"
                  variant="default"
                  class="m-md-2"
                >
                  <b-dropdown-item>First Action</b-dropdown-item>
                  <b-dropdown-item>Second Action</b-dropdown-item>
                  <b-dropdown-item>Third Action</b-dropdown-item>
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
                  <b-dropdown-item>First Action</b-dropdown-item>
                  <b-dropdown-item>Second Action</b-dropdown-item>
                  <b-dropdown-item>Third Action</b-dropdown-item>
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
                <input
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
                <b-button>500<br />gr</b-button><br />
              </div>
              <br />
              <h4>Input Delivery Methods :</h4>
              <h5>Click methods you want to use for this product</h5>
              <div class="delivery">
                <input
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
                <b-button>Home Delivery</b-button><br /><b></b>
              </div>
              <br /><br />
              <b-button @click="updateProduct()">Update Product</b-button
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
import { mapActions, mapMutations } from 'vuex'
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
      //   id: ''
    }
  },
  created() {
    this.update(this.$route.params.id)
    console.log('ini id router' + this.$route.params.id)
  },
  methods: {
    ...mapActions(['updateProducts']),
    ...mapMutations(['update']),
    handleFile(event) {
      console.log(event)
      this.form.product_image = event.target.files[0]
    },
    updateProduct() {
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
      this.update(this.$route.params.id)
      this.updateProducts(data)
        .then(result => {
          console.log(result)
          alert('Success Update Product')
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
