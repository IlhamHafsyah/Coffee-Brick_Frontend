<template>
  <div class="Product">
    <Header />
    <hr />
    <b-container class="bv-example-row">
      <b-row>
        <b-col cols="4">
          <div class="coupon">
            <h4>Promo for you</h4>
            <p>Coupon will be updated every weeks.<br />Check them out!</p>
            <div class="addcoupon">
              <button @click="toAddcoupon()">Add Coupon</button>
            </div>
            <div class="overflow">
              <Coupon />
            </div>
          </div>
        </b-col>
        <b-col cols="8">
          <div class="addproduct" style="text-align: right">
            <button @click="toAddproduct()">
              Add Product
            </button>
          </div>
          <Card />
        </b-col>
      </b-row>
    </b-container>
    <hr />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/_base/Header'
import Coupon from '../components/_base/Coupon'
import Card from '../components/_base/Card'
import Footer from '../components/_base/Footer'

export default {
  name: 'Product',
  mounted() {
    console.log(process.env.VUE_APP_API)
  },
  components: {
    Header,
    Coupon,
    Card,
    Footer
  },
  methods: {
    toAddcoupon() {
      this.$router.push('/newpromo')
    },
    toAddproduct() {
      this.$router.push('/newproduct')
    }
  }
}
</script>

<style>
@import '../assets/product.css';
/* font */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap');
</style>
