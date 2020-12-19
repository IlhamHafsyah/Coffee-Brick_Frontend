<template>
  <div class="cart">
    <Header />
    <b-jumbotron>
      <h2>Checkout your<br />item now!</h2>
      <b-row>
        <b-col cols="6"><b-card> Order Summary</b-card></b-col>
        <b-col cols="6"
          ><h3>Address details</h3>
          <b-card>Delivery to</b-card>
          <h3>Payment method</h3>
          <b-card> cod</b-card>
          <b-button>Confirm and Pay</b-button></b-col
        >
      </b-row>
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
  }
}
</script>
