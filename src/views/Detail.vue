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
              <img src="../assets/cb.png" alt="" />
            </div>
            <br />
            <br />
            <div class="deliv">
              <b-card>
                <h4>Delivery and Time</h4>
                <br />
                <b-form-group>
                  <div class="btn1">
                    <b-form-radio-group
                      v-model="selected"
                      :options="option"
                      buttons
                    ></b-form-radio-group>
                  </div>
                  <!-- <span>yang dipilih : {{ selected }}</span> -->
                </b-form-group>
                <br />
                <div class="now">
                  <b-row>
                    <b-col cols="6">Now</b-col>
                    <b-col cols="6"
                      ><b-form-group>
                        <b-form-radio-group
                          id="btn-radios-2"
                          v-model="selecteds"
                          :options="options"
                          name="radios-btn"
                          buttons
                        ></b-form-radio-group>
                        <!-- <span>pilihan {{ selecteds }}</span> -->
                      </b-form-group></b-col
                    >
                  </b-row>
                </div>
                <br />
                <div class="time">
                  <b-row>
                    <b-col cols="6">Set time</b-col>
                    <b-col cols="6"
                      ><input
                        type="text"
                        v-model="time"
                        placeholder="Enter time for reservation"
                        v-on:keyup.enter="search()"
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
                        v-model="cart.qty"
                        id="sb-wrap"
                        wrap
                        min="0"
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
                <b-form-group>
                  <b-form-radio-group
                    id="btn-radios-3"
                    v-model="cart.size"
                    :options="sizeOption"
                    name="radios-btn"
                    buttons
                  >
                  </b-form-radio-group>
                  <br
                /></b-form-group>
              </b-card>
            </div>
          </b-col>
          <b-col cols="8">
            <div class="direct">
              <b-card>
                <b-row>
                  <b-col cols="2"><img src="../assets/cb.png" alt=""/></b-col>
                  <b-col cols="3"
                    ><ul>
                      <li>
                        {{ products.product_name }}
                      </li>
                      <li>{{ cart.qty }}x ({{ cart.size }})</li>
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

export default {
  name: 'Detail',
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
    console.log('ini apaan =' + this.$route.params.id)
  },
  methods: {
    getProductById(id) {
      console.log(id)
      axios
        .get(`http://localhost:4001/product/${id}`)
        .then(response => {
          console.log(response)
          this.products = response.data.data[0]
          this.cart.product_id = response.data.data[0].product_id
          this.cart.subtotal = response.data.data[0].product_price
        })
        .catch(error => {
          console.log(error)
        })
    },
    addToCart() {
      console.log(this.cart)
      const setCart = {
        product_name: this.products.product_name,
        product_id: this.products.product_id,
        qty: this.cart.qty,
        size: this.cart.size,
        subtotal: this.products.product_price,
        history_id: 1
      }
      this.cart = [...this.cart, setCart]
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
