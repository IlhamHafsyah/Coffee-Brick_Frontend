<template>
  <div class="history">
    <Header />
    <b-container>
      <b-jumbotron>
        <h2>Let's see what you have bought!</h2>
        <p>Long press to delete item</p>
        <br /><br />
        <b-row>
          <b-col cols="4" v-for="(item, index) in getHistoryData" :key="index">
            <b-card class="history-card">
              <h4>Invoice : CB-{{ item.invoice }}</h4>
              <h6>Total : RP. {{ item.subtotal }}</h6>
              <h5 style="font-size: 15px">
                Payment Method : {{ item.payment_method }}
              </h5>
              <p>{{ item.history_created_at.substring(0, 10) }}</p>
              <b-button
                @click="detailHistory(item.history_id)"
                v-b-modal.my-modal
                >See Details</b-button
              >
            </b-card>
          </b-col>
        </b-row>
        <b-modal id="my-modal">
          <h4 style="font-size: 15px; color:brown">Your order details</h4>
          <b-card v-for="(item, index) in getDetailHistorys" :key="index">
            <h4>{{ item.qty }} x {{ item.product_name }}</h4>
          </b-card>
        </b-modal>
      </b-jumbotron>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Header from '../components/_base/Header'
import Footer from '../components/_base/Footer'
export default {
  nama: 'History',
  components: {
    Header,
    Footer
  },
  created() {
    this.getHistory(this.setUsers.users_id)
  },
  computed: {
    ...mapGetters({ products: 'getDataProduct' }),
    ...mapGetters(['setUsers', 'getHistoryData', 'getDetailHistorys'])
  },
  methods: {
    ...mapActions(['getHistory', 'getDetailHistory']),
    detailHistory(id) {
      this.getDetailHistory(id)
    }
  }
}
</script>

<style>
@import '../assets/history.css';
</style>
