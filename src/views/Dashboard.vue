<template>
  <div class="dashboard">
    <Header />
    <hr />
    <b-container>
      <b-row>
        <b-col cols="4">
          <div class="ti">
            <b-card>
              Today Income
              <h4>Rp. {{ today_income }}</h4>
            </b-card>
          </div>
        </b-col>
        <b-col cols="4">
          <div class="opw">
            <b-card>
              Order per Week
              <h4>{{ total_order }} Orders</h4>
            </b-card>
          </div>
        </b-col>
        <b-col cols="4">
          <div class="yi">
            <b-card>
              Year Income
              <h4>Rp. {{ this_year_income }}</h4>
            </b-card>
          </div>
        </b-col>
      </b-row>
      <br /><br />
      <b-row>
        <b-col>
          <div class="chart">
            <b-card
              >Chart<br />
              <div>
                <b-dropdown
                  id="dropdown-1"
                  text="Filter By"
                  variant="default"
                  class="m-md-2"
                >
                  <b-dropdown-item>Month</b-dropdown-item>
                  <b-dropdown-item>Year</b-dropdown-item>
                </b-dropdown>
              </div>
              <Chart />
            </b-card>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <br />
    <hr />
    <Footer />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import Header from '../components/_base/Header'
import Footer from '../components/_base/Footer'
import Chart from '../components/_base/Chart'

export default {
  name: 'Dashboard',
  components: {
    Header,
    Footer,
    Chart
  },
  data() {
    return {}
  },
  created() {
    this.todayIncome()
    this.weeklyOrder()
    this.yearIncome()
  },
  computed: {
    ...mapGetters({ today_income: 'getTodayIncome' }),
    ...mapGetters({ total_order: 'getOrderPerWeek' }),
    ...mapGetters({ this_year_income: 'getYearIncome' }),
    ...mapGetters(['getPerWeek'])
  },
  methods: {
    ...mapActions(['todayIncome']),
    ...mapActions(['weeklyOrder']),
    ...mapActions(['yearIncome'])
  }
}
</script>

<style>
@import '../assets/dashboard.css';
/* font */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap');
</style>
