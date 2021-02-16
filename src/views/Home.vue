<template>
  <div class="home">
    <Header />
    <b-container style="height: 1100px">
      <b-jumbotron>
        <h2>Hello {{ users.users_name }} <br /></h2>
        <br />
        <h3>
          Starts Your Day with
        </h3>
        <h3>
          Coffee and Good Meals
        </h3>
        <p>
          We provide high quality beans, good taste, and healthy <br />
          meals made by love just for you. Start your day with us <br />
          for a bigger smile!
        </p>
        <HomeCard />
        <DetailHome />
      </b-jumbotron>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Header from '../components/_base/Header'
import Footer from '../components/_base/Footer'
import DetailHome from '../components/_base/DetailHome'
import HomeCard from '../components/_base/HomeCard'
export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    DetailHome,
    HomeCard
  },
  data() {
    return {
      name: 'Mohammad Ilham Nurdhi Hafsyah',
      message: 'Hello World !',
      rule: 2,
      searchData: '',
      dataProduct: [
        { product_name: 'Meja', product_price: 50000 },
        { product_name: 'Kursi', product_price: 40000 }
      ],
      urlGoogle: 'http://google.com',
      urlYoutube: 'http://youtube.com',
      URL: process.env.VUE_APP_API
    }
  },
  computed: {
    reverseMessage: function() {
      return this.message
        .split(' ')
        .reverse()
        .join(' ')
    },
    ...mapGetters({ users: 'setUsers' })
  },
  methods: {
    boom() {
      console.log('Boom !')
      alert('BOOM !')
    },
    search() {
      console.log('Proccess Search !')
      console.log(this.searchData)
    }
  }
}
</script>

<style>
@import '../assets/style.css';
</style>
