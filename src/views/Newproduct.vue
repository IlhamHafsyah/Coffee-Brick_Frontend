<template>
  <div class="newproduct">
    <Header />
    <hr />
    <b-container>
      <b-row>
        <b-col cols="4">
          <div class="left">
            <div class="picture">
              <b-card><img src="../assets/camera.png" alt=""/></b-card>
            </div>
            <b-card>
              <div class="tap">
                <b-button>Take a Picture</b-button>
              </div>
              <br />
              <div class="cfg">
                <b-button>Choose From Gallery</b-button>
              </div>
              <br /><br /><br />
              <h3>Delivery Hour :</h3>
              <div>
                <b-dropdown
                  id="dropdown-1"
                  text="Select start hour"
                  variant="default"
                  class="m-md-2"
                >
                  <b-dropdown-item>First Action</b-dropdown-item>
                  <b-dropdown-item>Second Action</b-dropdown-item>
                  <b-dropdown-item>Third Action</b-dropdown-item>
                </b-dropdown>
              </div>
              <div>
                <b-dropdown
                  id="dropdown-1"
                  text="Select end hour"
                  variant="default"
                  class="m-md-2"
                >
                  <b-dropdown-item>First Action</b-dropdown-item>
                  <b-dropdown-item>Second Action</b-dropdown-item>
                  <b-dropdown-item>Third Action</b-dropdown-item>
                </b-dropdown>
              </div>
              <br />
              <br />
              <h3>Input Stock :</h3>
              <div>
                <b-dropdown
                  id="dropdown-1"
                  text="Input stock"
                  variant="default"
                  class="m-md-2"
                >
                  <b-dropdown-item>First Action</b-dropdown-item>
                  <b-dropdown-item>Second Action</b-dropdown-item>
                  <b-dropdown-item>Third Action</b-dropdown-item>
                </b-dropdown>
              </div>
            </b-card>
          </div>
        </b-col>
        <b-col cols="8">
          <div class="right">
            <b-card>
              <h4>Name :</h4>
              <input type="text" /><br /><br />
              <h4>Price :</h4>
              <input type="text" /><br /><br />
              <h4>Description :</h4>
              <input type="text" /><br /><br />
              <h4>Input Product Size :</h4>
              <h5>Click size you want to use for this product</h5>
              <div class="size">
                <b-button>R</b-button>
                <b-button>L</b-button>
                <b-button>XL</b-button>
                <b-button>250<br />gr</b-button>
                <b-button>300<br />gr</b-button>
                <b-button>500<br />gr</b-button><br />
              </div>
              <br />
              <h4>Input Delivery Methods :</h4>
              <h5>Click methods you want to use for this product</h5>
              <div class="delivery">
                <b-button>take away</b-button>
                <b-button>Dine in</b-button>
                <b-button>Home Delivery</b-button><br /><b></b>
              </div>
              <br /><br />
              <b-button>Save Product</b-button><br /><br />
              <b-button>Cancel</b-button>
            </b-card>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <hr />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/_base/Header'
import Footer from '../components/_base/Footer'

export default {
  name: 'Newproduct',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
@import '../assets/newproduct.css';
/* font */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap');
</style>
