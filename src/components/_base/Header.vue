<template>
  <div class="Header">
    <b-container class="bv-example-row">
      <b-row>
        <b-col class="logo">
          <img alt="Coffee Brick logo" src="../../assets/logo copy.png" />
          <a href="">Coffee Brick</a>
        </b-col>
        <b-col class="menu">
          <Navbar />
        </b-col>
        <b-col class="user-menu">
          <ul>
            <li>
              <div class="search">
                <input
                  type="text"
                  v-model="char"
                  v-on:keyup.enter="searchingProduct(char)"
                  placeholder="search"
                />
              </div>
            </li>
            <li><img src="../../assets/chat-icon.png" /></li>
            <li>
              <a href="http://localhost:8080/profile"
                ><img src="../../assets/lit-profile-pic.png"
              /></a>
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Navbar from './Navbar'
import { mapMutations, mapActions } from 'vuex'

export default {
  name: 'Header',
  data() {
    return {
      char: ''
    }
  },
  components: {
    Navbar
  },
  methods: {
    // search() {
    //   console.log('Proccess Search !')
    //   console.log(this.searchData)
    // },
    ...mapActions(['getProducts']),
    ...mapMutations(['searchProduct']),

    searchingProduct(char) {
      console.log(char)
      this.searchProduct(char)
      this.getProducts()
    }
  }
}
</script>
