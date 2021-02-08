<template>
  <div class="home">
    <Header />
    <b-container>
      <b-jumbotron>
        <h2>
          HELLO {{ users.users_name }} <br />
          WELLCOME TO LANDING PAGE
        </h2>
      </b-jumbotron>
    </b-container>
    <Footer />
  </div>
</template>

<script>
//1
import { mapGetters } from 'vuex'
import Header from '../components/_base/Header'
import Footer from '../components/_base/Footer'
export default {
  name: 'Home',
  //2
  components: {
    Header,
    Footer
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
      urlYoutube: 'http://youtube.com'
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
