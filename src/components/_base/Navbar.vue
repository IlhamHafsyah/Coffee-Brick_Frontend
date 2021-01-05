<template>
  <div class="link">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/product">Product</router-link></li>
      <li><router-link to="/cart">Your Cart</router-link></li>
      <li><router-link to="/history">History</router-link></li>
      <button @click="handleLogout">logout</button>
    </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Navbar',
  methods: {
    ...mapActions(['logout']),
    handleLogout() {
      console.log('Success Logout')
      this.logout()
    }
  }
}
</script>
