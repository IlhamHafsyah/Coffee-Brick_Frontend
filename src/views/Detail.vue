<template>
  <div class="detail">
    <Header />
    <div class="content">
      <hr />
      <b-container class="bv-example-row">
        <br />
        <b-row>
          <b-col cols="5">
            <div class="img">
              <!-- <img v-if="url" :src="url" class="round-img" /> -->
              <img
                v-if="products.product_image"
                class="round-img"
                :src="'http://localhost:4001/' + products.product_image"
                alt="photo"
              />
              <div v-else>
                <img
                  class="default"
                  style="background-color:#d2d2d2;border-radius:50%;width:230px;height:230px"
                />
              </div>
            </div>
            <br />
            <br />
            <div class="deliv">
              <b-card>
                <h4>Delivery and Time</h4>
                <br />
                <b-form-group>
                  <div class="btn1">
                    <b-button @click="dinein">
                      Dine in
                    </b-button>
                    <b-button>
                      Door delivery
                    </b-button>
                    <b-button>
                      Pick up
                    </b-button>
                    <!-- <b-form-radio-group
                      v-model="delivery_method"
                      :options="option"
                      buttons
                    ></b-form-radio-group> -->
                  </div>
                  <!-- <span>yang dipilih : {{ selected }}</span> -->
                </b-form-group>
                <br />
                <div class="now">
                  <b-row>
                    <b-col cols="6">Now</b-col>
                    <b-col cols="6">
                      <b-button>
                        Yes
                      </b-button>
                      <b-button>
                        No
                      </b-button>
                      <!-- <b-form-group>
                        <b-form-radio-group
                          id="btn-radios-2"
                          v-model="selecteds"
                          :options="options"
                          name="radios-btn"
                          buttons
                        ></b-form-radio-group>
                      </b-form-group> -->
                    </b-col>
                  </b-row>
                </div>
                <br />
                <br />
                <div class="time">
                  <b-row>
                    <b-col cols="6">Set time</b-col>
                    <b-col cols="6"
                      ><input
                        type="time"
                        v-model="time"
                        v-on:keyup.enter="search()"
                        style="width: 170px"
                      />
                      <!-- <p>time : {{ time }}</p> -->
                    </b-col>
                  </b-row>
                </div>
              </b-card>
            </div>
          </b-col>
          <b-col cols="7">
            <div class="name">
              <b-card>{{ products.product_name }}</b-card>
              <!-- <p>{{ products }}</p> -->
            </div>
            <div class="desc">
              <b-card>{{ products.product_desc }}</b-card>
            </div>
            <br />
            <p>
              Delivery only on <b>Monday to</b><br /><b>friday</b> at
              <b>1 - 7 pm</b>
            </p>
            <b-row>
              <b-col cols="6">
                <template>
                  <div>
                    <br />
                    <div class="spin">
                      <b-form-spinbutton
                        v-model="qty"
                        id="sb-wrap"
                        wrap
                        min="1"
                        max="25"
                        placeholder="-"
                      ></b-form-spinbutton>
                      <br />
                      <br />
                    </div>
                  </div>
                </template>
              </b-col>
              <div class="price">
                <b-col cols="6">IDR.{{ products.product_price }}</b-col>
              </div>
            </b-row>
            <div class="cart">
              <b-button @click="addToCart()">Add to Cart</b-button><br />
            </div>
            <br />
            <div class="staff"><b-button>Ask a Staff</b-button></div>
          </b-col>
        </b-row>
        <br />
        <br />
        <br />
        <b-row>
          <b-col cols="4">
            <div class="sizeOpt">
              <b-card>
                <p>Choose a size</p>
                <div
                  class="bav"
                  v-if="
                    products.category_id === 1 || products.category_id === 2
                  "
                >
                  <b-button @click="setSizeR">
                    R
                  </b-button>
                  <b-button @click="setSizeL">
                    L
                  </b-button>
                  <b-button @click="setSizeXl">
                    XL
                  </b-button>
                </div>
                <div class="food" v-else>
                  <b-button style="font-size:12px" @click="setSize250">
                    250gr
                  </b-button>
                  <b-button style="font-size:12px" @click="setSize300">
                    300gr
                  </b-button>
                  <b-button style="font-size:12px" @click="setSize500">
                    500gr
                  </b-button>
                </div>
                <!-- <b-form-group>
                  <b-form-radio-group
                    id="btn-radios-3"
                    v-model="size"
                    :options="sizeOption"
                    name="radios-btn"
                    buttons
                  >
                  </b-form-radio-group>
                  <br
                /></b-form-group> -->
              </b-card>
            </div>
          </b-col>
          <b-col cols="8">
            <div class="direct">
              <b-card>
                <b-row>
                  <b-col cols="2">
                    <img
                      v-if="products.product_image"
                      class="round-img"
                      :src="'http://localhost:4001/' + products.product_image"
                      alt="photo"
                    />
                    <div v-else>
                      <img
                        class="default"
                        style="background-color:#d2d2d2;border-radius:50%;width:230px;height:230px"
                      />
                    </div>
                  </b-col>
                  <b-col cols="3"
                    ><ul>
                      <li>
                        {{ products.product_name }}
                      </li>
                      <li v-if="qty === ''"></li>
                      <li v-else>{{ qty }}x ({{ size }})</li>
                    </ul></b-col
                  >
                  <b-col cols="7">
                    <div class="checkout">
                      <b-row>
                        <b-col cols="9"><p>Checkout</p></b-col>
                        <b-col cols="3"><b-button>-></b-button></b-col>
                      </b-row>
                    </div></b-col
                  >
                </b-row>
                <h4>{{ getCart }}</h4>
              </b-card>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <hr />
    <br /><br />
    <Footer />
  </div>
</template>

<script>
import axios from 'axios'
import Header from '../components/_base/Header'
import Footer from '../components/_base/Footer'
import alert from '../mixin/alert'
import { mapMutations, mapGetters } from 'vuex'

export default {
  name: 'Detail',
  mixins: [alert],
  components: {
    Header,
    Footer
  },
  data() {
    return {
      products: [],
      cart: [],
      // detailHistory: [
      //   {
      //     product_id: '',
      //     qty: '',
      //     size: '',
      //     subtotal: '',
      //     history_id: 1
      //   }
      // ],
      product_name: '',
      product_id: '',
      size: '',
      product_image: '',
      delivery_method: '',
      subtotal: '',
      id: '',
      time: '',
      selected: '',
      selecteds: '',
      selectedSize: '',
      qty: '',
      option: [
        { text: 'Dine in', value: 'Dine in' },
        { text: 'Door Delivery', value: 'Door Delivery' },
        { text: 'Pick up', value: 'Pick up' }
      ],
      options: [
        { text: 'Yes', value: 'Yes' },
        { text: 'No', value: 'No' }
      ],
      sizeOption: [
        { text: 'R', value: 'Reguler' },
        { text: 'L', value: 'Large' },
        { text: 'XL', value: 'X-Large' }
      ]
    }
  },
  created() {
    this.getProductById(this.$route.params.id)
    let getCart = localStorage.getItem('cart')
    getCart = JSON.parse(getCart)
    if (getCart) {
      this.cart = getCart
    } else {
      this.cart = []
    }
  },
  computed: {
    ...mapGetters(['getCart'])
  },
  methods: {
    ...mapMutations(['setCartData']),
    dinein() {
      this.delivery_method = 'Dine in'
    },
    door() {
      this.delivery_method = 'Door Delivery'
    },
    pick() {
      this.delivery_method = 'Pick Up'
    },
    setSize250() {
      this.size = '250 gr'
    },
    setSize300() {
      this.size = '300 gr'
    },
    setSize500() {
      this.size = '500 gr'
    },
    setSizeR() {
      this.size = 'Reguler'
    },
    setSizeL() {
      this.size = 'Large'
    },
    setSizeXl() {
      this.size = 'X Large'
    },
    getProductById(id) {
      console.log(id)
      axios
        .get(`http://localhost:4001/product/${id}`)
        .then(response => {
          console.log(response)
          this.product_name = response.data.data[0].product_name
          this.products = response.data.data[0]
          this.product_id = response.data.data[0].product_id
          this.subtotal = response.data.data[0].product_price
          this.product_image = response.data.data[0].product_image
        })
        .catch(error => {
          console.log(error)
        })
    },
    addToCart() {
      console.log(this.cart)
      const setCart = {
        product_name: this.product_name,
        product_id: this.product_id,
        qty: this.qty,
        size: this.size,
        product_image: this.product_image,
        delivery_method: this.delivery_method,
        subtotal: this.subtotal,
        history_id: ''
        // product_name: this.products.product_name,
        // product_id: this.products.product_id,
        // qty: this.cart.qty,
        // size: this.cart.size,
        // subtotal: this.products.product_price,
        // history_id: 1
      }
      this.cart = [...this.cart, setCart]
      // const add = [...this.cart, setCart]
      // console.log(add)
      // this.setCartData(add)
      this.setCartData(this.cart)
      this.makeToast(`Yeay!`, `Product added to cart`, 'success')
      setTimeout(() => {
        this.$router.push('/product')
      }, 2000)

      localStorage.setItem('cart', JSON.stringify(this.cart))
    }
    // postDetailHistory() {
    //   console.log(this.detailHistory)
    //   axios
    //     .post('http://localhost:4000/history/detail', this.detailHistory)
    //     .then(response => {
    //       console.log(response)
    //     })
    //     .catch(error => {
    //       console.log(error)
    //     })
    // }
  }
}
</script>

<style>
@import '../assets/detail.css';
</style>
