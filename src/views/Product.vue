<template>
  <div class="Product">
    <b-container class="bv-example-row">
      <b-row>
        <b-col class="logo">
          <img alt="Coffee Brick logo" src="../assets/logo copy.png" />
          <a href="">Coffee Brick</a>
        </b-col>
        <b-col class="menu">
          <Navbar />
        </b-col>
        <b-col class="user-menu">
          <ul>
            <li><img src="../assets/search-icon.png" /></li>
            <li><img src="../assets/chat-icon.png" /></li>
            <li>
              <a href=""><img src="../assets/lit-profile-pic.png"/></a>
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
    <!-- <Header /> -->
    <hr />
    <b-container class="bv-example-row">
      <b-row>
        <b-col cols="4">
          <h4>Promo for you</h4>
          <p>Coupon will be updated every weeks.<br />Check them out!</p>
          <div id="space"></div>
          <div id="rectangle1"></div>
          <div id="rectangle2"></div>
          <div id="rectangle3"></div>
          <img src="../assets/beef-spag.png" />
          <h2>Beef Spaghetti<br />20% OFF</h2>
          <h3>Buy 1 Choco Oreo and get 20% off for<br />Beef Spaghetti</h3>
          <div class="dashln"></div>
          <div class="cc">COUPON CODE</div>
          <div class="code">FNPR15RG</div>
          <div class="valid">Valid until October 10th 2020</div>
          <a class="btn btn-primary btn-lg" href="#" role="button">
            Apply Coupon
          </a>
          <div class="term">
            <p>Term and conditions</p>
          </div>
          <ol>
            <li>You can only apply 1 coupon per day</li>
            <li>It only for dine in</li>
            <li>Buy 1 get 1 only for new user</li>
            <li>Should make member card to apply coupon</li>
          </ol>
        </b-col>
        <b-col cols="8">
          <div class="category">
            <ul>
              <li><a href="">Favorite Product</a></li>
              <li><a href="">Coffee</a></li>
              <li><a href="">Non Coffee</a></li>
              <li><a href="">Foods</a></li>
              <li><a href="">Add-on</a></li>
            </ul>
          </div>
          <b-row>
            <b-col
              xl="3"
              lg="4"
              md="6"
              sm="12"
              v-for="(item, index) in products"
              :key="index"
            >
              <b-card
                :title="item.product_name"
                img-src="https://www.averiecooks.com/wp-content/uploads/2017/11/caramelmacchiato-18.jpg"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
              >
                <b-card-text> Rp. {{ item.product_price }} </b-card-text>

                <b-button href="#" variant="primary">Add to Cart</b-button>
                <b-button href="#" variant="success">Update</b-button>
                <b-button href="#" variant="danger">Delete</b-button>
              </b-card>
            </b-col>
          </b-row></b-col
        >
      </b-row>
    </b-container>
    <hr />
    <!-- <Footer /> -->
    <b-container class="bv-example-row">
      <b-row>
        <b-col class="desc">
          <div class="logo">
            <img src="../assets/logo copy.png" />
            <a href="">Coffee Brick</a>
          </div>
          <p>
            Coffee Shop is a store that sells some good<br />meals, and
            especially coffee. We provide<br />high quality beans
          </p>
          <div class="socmed">
            <img src="../assets/fb-logo.png" />
            <img src="../assets/tw-logo.png" />
            <img src="../assets/ig-logo.png" />
          </div>
          <div class="cr">
            <p>&copy;2020CoffeeStore</p>
          </div>
        </b-col>
        <b-col class="product">
          <h4>Product</h4>
          <ul>
            <li><a href="">Dashboard</a></li>
            <li><a href="">Pricing</a></li>
            <li><a href="">Locations</a></li>
            <li><a href="">Countries</a></li>
            <li><a href="">BLog</a></li>
          </ul>
        </b-col>
        <b-col class="engage">
          <h4>Engage</h4>
          <ul>
            <li><a href="">Coffee Shop ?</a></li>
            <li><a href="">FAQ</a></li>
            <li><a href="">About Us</a></li>
            <li><a href="">Privacy Policy</a></li>
            <li><a href="">Term of Service</a></li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Navbar from '../components/_base/Navbar'
// import Header from '../components/_base/Header'
// import Footer from '../components/_base/Footer'
import axios from 'axios'

export default {
  name: 'Product',
  components: {
    Navbar
    // Header,
    // Footer
  },
  data() {
    return {
      products: []
    }
  },
  created() {
    this.getProduct()
  },
  methods: {
    getProduct() {
      axios
        .get('http://localhost:4000/product?page=1&limit=12&search&sort')
        .then(response => {
          console.log(response)
          this.products = response.data.data
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style>
@import '../assets/style.css';
/* font */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap');
</style>
