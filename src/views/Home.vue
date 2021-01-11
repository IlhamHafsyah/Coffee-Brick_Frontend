<template>
  <div class="home">
    <Header />
    <b-container>
      <b-jumbotron>
        <h2>
          HELLO {{ data.users_name }} <br />
          WELLCOME TO LANDING PAGE
        </h2>
      </b-jumbotron>
    </b-container>
    <Footer />
    <!-- <b-container class="centered"> -->
    <!-- Content here -->
    <!-- </b-container> -->
    <!-- <div class="centered"> -->
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <div>
      <b-card class="text-center">
        <h5>Interpolation</h5>
        <p>My Name is {{ name }}</p>
      </b-card>
      <b-card>
        <h5>Computed</h5>
        <p>Original Message : {{ message }}</p>
        <p>Reverse Message : {{ reverseMessage }}</p>
      </b-card>
      <b-card>
        <h5>Directive</h5>
        <hr />
        <h6>v-if</h6>
        <div v-if="rule === 1">Kamu adalah admin</div>
        <div v-else-if="rule === 2">Kamu adalah kasir</div>
        <div v-else>Kamu adalah user</div>
        <hr />
        <h6>v-show</h6>
        <div v-show="rule === 3">Kamu bukan siapa-siapa</div>
        <hr />
        <h6>v-for</h6>
        <ul>
          <li v-for="(item, index) in dataProduct" :key="index">
            {{ index }}
            <h5>{{ item.product_name }}</h5>
            <p>{{ item.product_price }}</p>
          </li>
        </ul>
        <hr />
        <h6>v-on & v-model</h6>
        <button v-on:click="boom()">Click Me !</button>
        shorthand
    <button @click="boom()">Click Me !</button>
    <hr />
    <input type="text" v-model="searchData" v-on:keyup.enter="search()" />
    <hr />
    <h6>v-bind</h6>
    gak bisa masukin link di data ke href
    <a href="http://google.com">Link Google</a>
    <a v-bind:href="rule === 1 ? urlGoogle : urlYoutube">Link Google</a>
    v-bind:href = :href //shorthand
    </b-card>
    <b-card>
    <h5>Component Communication</h5>
    </b-card>
    </div>
    -->
    <!-- </div> -->
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
    ...mapGetters({ data: 'datas' })
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
