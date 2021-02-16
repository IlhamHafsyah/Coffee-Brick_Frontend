<template>
  <div class="del">
    <h2>Are You Sure to Deleting this Product ?</h2>
    <button @click="deleting()">Yes</button>
    <button @click="cancelDeleting()">Cancel</button>
  </div>
</template>

<script>
import alert from '../mixin/alert'
import { mapActions, mapMutations } from 'vuex'

export default {
  name: 'Deleteproduct',
  mixins: [alert],
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
          this.makeToast(
            `${result.data.msg}`,
            `Success Delete Product`,
            'success'
          )
          setTimeout(() => {
            this.$router.push('/product')
          }, 2000)
        })
        .catch(error => {
          this.makeToast('Failed', `${error.data.msg}`, 'danger')
        })
    },
    cancelDeleting() {
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
