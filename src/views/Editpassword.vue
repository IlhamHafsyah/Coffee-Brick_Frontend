<template>
  <div class="del">
    <h2>Edit Password</h2>
    <input type="password" v-model="data.users_password" />
    <h4>{{ data.users_password }}</h4>
    <button @click="edit()">Edit</button>
    <button @click="canceledit()">Cancel</button>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Editpassword',
  data() {
    return {}
  },
  computed: {
    ...mapGetters({ data: 'datas' })
  },
  created() {
    this.getid(this.$route.params.id)
  },
  methods: {
    ...mapActions(['editPassword']),
    ...mapActions(['logout']),
    ...mapMutations(['getid']),

    // ...mapMutations(['deleteProm']),
    edit() {
      const { users_password } = this.data
      const set = { users_password }
      console.log(this.data)
      console.log(set)
      this.getid(this.$route.params.id)
      //   this.deleteProm(this.$route.params.id)
      this.editPassword(set)
        .then(result => {
          console.log(result)
          alert(`Success Edit Password`)
        })
        .catch(error => {
          alert(error)
        })
      this.logout()
    },
    canceledit() {
      this.$router.push('/product')
    }
  }
}
</script>
