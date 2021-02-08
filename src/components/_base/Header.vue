<template>
  <div class="Header">
    <b-container class="bv-example-row">
      <b-row>
        <b-col class="logo">
          <img alt="Coffee Brick logo" src="../../assets/logo copy.png" />
          <!-- <a href="">Coffee Brick</a> -->
        </b-col>
        <b-col class="menu">
          <Navbar />
        </b-col>
        <b-col class="user-menu">
          <div class="search">
            <input
              style="border-radius: 20px"
              type="text"
              v-model="char"
              v-on:keyup.enter="searchingProduct(char)"
              placeholder=" Search..."
            />
          </div>
          <div class="logout">
            <a @click="handleLogout"
              ><img style="width: 30px" src="../../assets/logout-icon.png"
            /></a>
          </div>
          <a @click="setProfile(users.users_id)"
            ><img
              style="border-radius: 50%"
              src="../../assets/lit-profile-pic.png"
          /></a>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Navbar from './Navbar'
import { mapMutations, mapActions, mapGetters } from 'vuex'

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
  computed: {
    ...mapGetters({ users: 'setUsers' }),
    ...mapGetters({ data: 'datas' })
  },
  methods: {
    ...mapActions(['getProducts']),
    ...mapActions(['getUsers']),
    ...mapMutations(['searchProduct']),
    ...mapMutations(['getid']),
    setProfile(id) {
      this.getid(id)
      this.getUsers()
      this.$router.push({
        name: 'Profile',
        params: { id: id }
      })
    },
    searchingProduct(char) {
      console.log(char)
      this.searchProduct(char)
      this.getProducts()
    },
    ...mapActions(['logout']),
    handleLogout() {
      console.log('Success Logout')
      this.logout()
    }
  }
}
</script>
