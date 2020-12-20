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
                <br />
                <h3>Order Summary</h3>
                <b-row>
                  <b-col cols="12" v-for="(item, index) in cart" :key="index">
                    <div class="product-sum">
                      <b-row>
                        <b-col cols="4">
                          <img src="../assets/cb.png" alt="" />
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
                v-model="address"
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
                    :aria-describedby="ariaDescribedby"
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
              <b-button>Confirm and Pay</b-button>
            </div></b-col
          >
        </b-row>
      </b-container>
    </b-jumbotron>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/_base/Header'
import Footer from '../components/_base/Footer'

export default {
  nama: 'Cart',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      cart: [],
      subtotal: '',
      tax: '',
      shipping: 5000,
      total: '',
      address: '',
      paymentMethod: '',
      selected: 'first',
      method: [
        { text: '', value: 'Card' },
        { text: '', value: 'bank account' },
        { text: '', value: 'cash on delivery' }
      ]
    }
  },
  created() {
    let getCart = localStorage.getItem('cart')
    getCart = JSON.parse(getCart)
    if (getCart) {
      this.cart = getCart
    } else {
      this.cart = []
    }
    console.log(getCart.length)
    // console.log(getCart[0].product_id)

    // let subtotal = ''
    // for (let i = 0; i <= getCart.length; i++) {
    //   subtotal = getCart[i].subtotal * getCart[i].qty
    // }
    // console.log(subtotal)
    let subtotal =
      getCart[0].subtotal * getCart[0].qty +
      getCart[1].subtotal * getCart[1].qty
    this.subtotal = subtotal

    let tax = 0.1 * this.subtotal
    this.tax = tax

    let total = this.subtotal + this.tax + this.shipping
    this.total = total
  }
}
</script>

<style>
@import '../assets/cart.css';
</style>
