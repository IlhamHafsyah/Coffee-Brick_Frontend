<template>
  <div class="del">
    <h2>Are You Sure to Deleting this Product ?</h2>
    <button @click="deleting()">Yes</button>
    <button @click="cancelDeleting()">Cancel</button>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'

export default {
  name: 'Deleteproduct',
  data() {
    return {}
  },
  created() {
    this.delete(this.$route.params.id)
  },
  methods: {
    ...mapActions(['deleteProducts']),
    ...mapMutations(['delete']),
    deleting() {
      this.delete(this.$route.params.id)
      this.deleteProducts()
        .then(result => {
          console.log(result)
          alert(`Success Delete Product`)
        })
        .catch(error => {
          alert(error)
        })
      this.$router.push('/product')
    },
    cancelDeleting() {
      this.$router.push('/product')
    }
  }
}
</script>
