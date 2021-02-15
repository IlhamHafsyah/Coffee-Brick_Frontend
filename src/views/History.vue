<template>
  <div class="history">
    <Header />
    <b-container>
      <b-jumbotron>
        <h2>Let's see what you have bought!</h2>
        <p>Long press to delete item</p>
        <br /><br />
        <b-row>
          <b-col cols="4" v-for="(item, index) in products" :key="index">
            <b-card class="history-card">
              <h4>{{ item.product_name }}</h4>
            </b-card>
          </b-col>
        </b-row>
      </b-jumbotron>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Header from '../components/_base/Header'
import Footer from '../components/_base/Footer'
export default {
  nama: 'History',
  components: {
    Header,
    Footer
  },
  computed: {
    ...mapGetters({ products: 'getDataProduct' })
  }
}
</script>

<style>
@import '../assets/history.css';
</style>
