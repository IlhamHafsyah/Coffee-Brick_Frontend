<template>
  <div class="cart">
    <Header />
    <b-jumbotron>
      <b-container>
        <h2>Checkout your<br />item now!</h2>
        <br />
        <b-row>
          <div class="sum">
            <b-col cols="6"
              ><b-card>
                <h3>Order Summary</h3>
                <b-row>
                  <div class="overflow">
                    <b-col cols="12" v-for="(item, index) in cart" :key="index">
                      <div class="product-sum">
                        <b-row>
                          <b-col cols="4">
                            <img
                              :src="
                                `https://${URL}/fileUploadsApi1/` +
                                  item.product_image
                              "
                            />
                          </b-col>
                          <b-col cols="4">
                            <b-card-text>
                              {{ item.product_name }}<br />x {{ item.qty }}
                              <br />{{ item.size }}
                            </b-card-text>
                          </b-col>
                          <b-col cols="4">
                            <b-card-text>
                              IDR {{ item.subtotal * item.qty }}
                            </b-card-text>
                          </b-col>
                        </b-row>
                      </div>
                    </b-col>
                  </div>
                  <div class="count">
                    <b-row>
                      <div class="count-text">
                        <b-col
                          ><p>
                            SUBTOTAL <br />TAX & FEES <br />SHIPPING
                          </p></b-col
                        >
                      </div>
                      <div class="count-numb">
                        <b-col
                          ><p>
                            IDR {{ subtotal }} <br />
                            IDR {{ tax }} <br />
                            IDR {{ shipping }}
                          </p></b-col
                        >
                      </div>
                    </b-row>
                    <br />
                    <b-row>
                      <div class="total-text">
                        <b-col
                          ><p>
                            TOTAL
                          </p></b-col
                        >
                      </div>
                      <div class="total-numb">
                        <b-col
                          ><p>IDR {{ total }}</p></b-col
                        >
                      </div>
                    </b-row>
                  </div>
                </b-row>
              </b-card></b-col
            >
          </div>
          <b-col cols="6"
            ><div class="address">
              <h3>Address details</h3>
              <input
                type="text"
                v-model="data.delivery_address"
                v-on:keyup.enter="search()"
                placeholder=" delivered to"
              />
            </div>
            <br /><br />
            <div class="payment">
              <h3>Payment method</h3>
              <b-card
                ><b-form-group>
                  <b-form-radio-group
                    v-model="paymentMethod"
                    :options="method"
                    name="radios-stacked"
                    stacked
                    ><div class="pmet">
                      <div class="card">
                        <img src="../assets/card.png" />
                        <p>Card</p>
                      </div>
                      <div class="bank">
                        <img src="../assets/bank.png" />
                      </div>
                      <p>Bank account</p>
                      <div class="cod">
                        <img src="../assets/cod.png" />
                      </div>
                      <h4>Cash on delivery</h4>
                    </div></b-form-radio-group
                  ></b-form-group
                ></b-card
              >
            </div>
            <br /><br /><br />
            <div class="button">
              <b-button @click="removeItem()">Confirm and Pay</b-button>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </b-jumbotron>
    <Footer />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import Header from '../components/_base/Header'
import Footer from '../components/_base/Footer'
import alert from '../mixin/alert'

export default {
  nama: 'Cart',
  mixins: [alert],
  components: {
    Header,
    Footer
  },
  data() {
    return {
      cart: [],
      user: [],
      detailHistory: [],
      subtotal: 0,
      tax: '',
      shipping: 5000,
      total: '',
      address: '',
      paymentMethod: '',
      URL: process.env.VUE_APP_API,
      method: [
        { text: '', value: 'Card' },
        { text: '', value: 'bank account' },
        { text: '', value: 'cash on delivery' }
      ]
    }
  },
  created() {
    // this.getAddress()
    let getCart = localStorage.getItem('cart')
    getCart = JSON.parse(getCart)
    if (getCart) {
      this.cart = getCart
    } else {
      this.cart = []
    }
    for (let i = 0; i < this.cart.length; i++) {
      this.subtotal += this.cart[i].subtotal * this.cart[i].qty
      let tax = 0.1 * this.subtotal
      this.tax = tax

      let total = this.subtotal + this.tax + this.shipping
      this.total = total
    }
  },
  computed: {
    ...mapGetters(['getCart']),
    ...mapGetters({ data: 'datas' }),
    ...mapGetters(['setUsers']),
    ...mapGetters(['getHisId'])
  },
  methods: {
    ...mapMutations(['setpaymet']),
    ...mapMutations(['setCartData']),
    ...mapActions(['postDetailHistory', 'postHistory']),
    removeItem() {
      let detail = []
      for (let a = 0; a < this.cart.length; a++) {
        console.log(a)
        let prodId = this.cart[a].product_id
        let qtys = this.cart[a].qty
        let sizes = this.cart[a].size
        let deliv = this.cart[a].delivery_method
        let sub = this.cart[a].subtotal
        let det = {
          product_id: prodId,
          qty: qtys,
          size: sizes,
          delivery_method: deliv,
          subtotal: sub,
          payment_method: this.paymentMethod,
          tax: this.tax,
          shipping: this.shipping
        }
        detail.push(det)
        console.log(detail)
      }
      this.postDetailHistory(detail)
        .then(result => {
          console.log(result)
          this.makeToast(`Yeay!`, `Payment Success`, 'success')
        })
        .catch(error => {
          console.log(error)
          this.makeToast('Failed', `${error.data.msg}`, 'danger')
        })
      this.user = this.setUsers
      const setHistory = {
        history_id: this.getHisId + 1,
        payment_method: this.paymentMethod,
        subtotal: this.total,
        user_id: this.setUsers.users_id,
        status: 0
      }
      setTimeout(() => {
        this.postHistory(setHistory)
          .then(result => {
            console.log(result)
          })
          .catch(error => {
            console.log(error)
          }, 5000)
      })
      localStorage.removeItem('cart')
      this.setpaymet(this.paymentMethod)
    }
  }
}
</script>

<style>
@import '../assets/cart.css';
</style>
