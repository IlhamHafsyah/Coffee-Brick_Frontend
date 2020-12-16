<template>
  <div class="lifecycle">
    <div class="centered">
      <img alt="Vue logo" src="../assets/logo.png" />
      <Navbar />
      <h1>This is lifecycle page</h1>
      <h3 id="message">Vue Data !</h3>
    </div>
  </div>
</template>

<script>
//1
import Navbar from '../components/_base/Navbar'
export default {
  name: 'lifecycle',
  components: {
    Navbar
  },
  data() {
    return {
      dataTesting: 'Vue Data !'
    }
  },
  //2
  beforeCreate() {
    console.log('Before Created is Running !' + this.dataTesting)
  },
  created() {
    console.log('Created is Running' + this.dataTesting)
  },
  beforeMount() {
    console.log('Before Mounted is Running' + this.dataTesting)
    console.log(document.getElementById('message'))
  },
  mounted() {
    console.log('Mounted is Running' + this.dataTesting)
    console.log(document.getElementById('message'))
  }
}
</script>

<style scoped>
.centered {
  text-align: center;
}
</style>
