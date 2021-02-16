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
              v-if="data.profile_picture"
              style="border-radius: 50%; width: 33px; height: 33px"
              :src="`${URL}/` + data.profile_picture"
            />
            <div v-else>
              <img
                class="default"
                src="../../assets/default-profile.png"
                style="border-radius: 50%; width: 33px; height: 33px"
              />
            </div>
          </a>
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
      char: '',
      URL: process.env.VUE_APP_API
    }
  },
  created() {
    this.getUsers()
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
