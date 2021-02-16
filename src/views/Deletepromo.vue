<template>
  <div class="del">
    <h2>Are You Sure to Deleting this Coupon ?</h2>
    <button @click="deletingCoupon()">Yes</button>
    <button @click="cancelDeletingCoupon()">Cancel</button>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
import alert from '../mixin/alert'

export default {
  name: 'Deleteproduct',
  mixins: [alert],
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
          this.makeToast(`Success`, `Success Delete Promo`, 'success')
          setTimeout(() => {
            this.$router.push('/product')
          }, 2000)
        })
        .catch(error => {
          console.log(error)
          this.makeToast('Failed', `Fail Deleting`, 'danger')
        })
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
