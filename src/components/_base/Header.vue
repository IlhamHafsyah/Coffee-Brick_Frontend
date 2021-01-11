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
              <a @click="setProfile(users.users_id)"
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
    // search() {
    //   console.log('Proccess Search !')
    //   console.log(this.searchData)
    // },
    ...mapActions(['getProducts']),
    ...mapActions(['getUsers']),
    ...mapMutations(['searchProduct']),
    ...mapMutations(['getid']),
    setProfile(id) {
      this.getid(id)
      this.getUsers()
      // console.log(this.users)
      // console.log(this.data)
      // console.log(this.users.users_id)
      // console.log(id)
      this.$router.push({
        name: 'Profile',
        params: { id: id }
      })
    },
    // setProfile(users.id) {
    // this.$router.push(`/profile/${users.id}`)
    // },
    searchingProduct(char) {
      console.log(char)
      this.searchProduct(char)
      this.getProducts()
    }
  }
}
</script>
