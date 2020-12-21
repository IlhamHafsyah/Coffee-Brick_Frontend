<template>
  <div class="history">
    <Header />
    <b-container>
      <b-jumbotron>
        <h2>Let's see what you have bought!</h2>
        <p>Long press to delete item</p>
      </b-jumbotron>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/_base/Header'
import Footer from '../components/_base/Footer'
export default {
  nama: 'History',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
@import '../assets/history.css';
</style>
