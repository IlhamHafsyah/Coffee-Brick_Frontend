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
            <input
              type="text"
              v-model="searchData"
              v-on:keyup.enter="search()"
            />
            <li><img src="../../assets/search-icon.png" /></li>
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
export default {
  name: 'Header',
  data() {
    return {
      searchData: ''
    }
  },
  components: {
    Navbar
  },
  methods: {
    search() {
      console.log('Proccess Search !')
      console.log(this.searchData)
    }
  }
}
</script>
