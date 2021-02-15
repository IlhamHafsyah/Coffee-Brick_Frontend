<template>
  <div class="del">
    <h2>Are You Sure to Deleting this Coupon ?</h2>
    <button @click="deletingCoupon()">Yes</button>
    <button @click="cancelDeletingCoupon()">Cancel</button>
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
    this.deleteProm(this.$route.params.id)
  },
  methods: {
    ...mapActions(['deletePromo']),
    ...mapMutations(['deleteProm']),
    deletingCoupon() {
      this.deleteProm(this.$route.params.id)
      this.deletePromo()
        .then(result => {
          console.log(result)
          alert(`Success Delete Coupon`)
        })
        .catch(error => {
          alert(error)
        })
      this.$router.push('/product')
    },
    cancelDeletingCoupon() {
      this.$router.push('/product')
    }
  }
}
</script>

<style>
@import '../assets/delete.css';
/* font */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap');
</style>
