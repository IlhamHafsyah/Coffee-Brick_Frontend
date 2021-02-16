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
        <div class="det">
          <b-card
            style="border-radius: 20px; height: 150px; z-index: 1; position: relative; top: 85px; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.8)"
          >
            <b-row>
              <b-col cols="4">
                <b-row>
                  <b-col style="text-align: right">
                    <img src="../assets/user.png" alt="" />
                  </b-col>
                  <b-col style="text-align: left">
                    <h5
                      style="font-weight: bold; font-family: 'Rubik', sans-serif"
                    >
                      90+ <br />
                      Staff
                    </h5>
                  </b-col>
                </b-row>
              </b-col>
              <b-col cols="4">
                <b-row>
                  <b-col style="text-align: right">
                    <img src="../assets/location.png" alt="" />
                  </b-col>
                  <b-col style="text-align: left">
                    <h5
                      style="font-weight: bold; font-family: 'Rubik', sans-serif"
                    >
                      30+ <br />
                      Store
                    </h5>
                  </b-col>
                </b-row>
              </b-col>
              <b-col cols="4">
                <b-row>
                  <b-col style="text-align: right">
                    <img src="../assets/Server.png" alt="" />
                  </b-col>
                  <b-col style="text-align: left">
                    <h5
                      style="font-weight: bold; font-family: 'Rubik', sans-serif"
                    >
                      800+ <br />
                      Customer
                    </h5>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-card>
        </div>
        <div class="image">
          <b-row>
            <b-col>
              <img src="../assets/pic-homew.png" alt="" />
            </b-col>
          </b-row>
        </div>
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
