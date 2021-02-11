<template>
  <div class="link">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/product">Product</router-link></li>
      <li>
        <router-link v-if="user.users_role === 0" to="/cart"
          >Your Cart</router-link
        >
        <router-link v-else to="/dashboard">Dashboard</router-link>
      </li>
      <li><router-link to="/history">History</router-link></li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Navbar',
  methods: {},
  computed: {
    ...mapGetters({ user: 'setUsers' })
  }
}
</script>
