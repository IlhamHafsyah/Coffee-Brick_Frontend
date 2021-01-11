<template>
  <div class="newpromo">
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
              <input type="file" @change="handleFile" />
              <div class="tap">
                <b-button>Take a Picture</b-button>
              </div>
              <br />
              <div class="cfg">
                <b-button>Choose From Gallery</b-button>
              </div>
              <br /><br /><br />
              <h3>Enter the discount :</h3>
              <div>
                <b-dropdown
                  id="dropdown-1"
                  text="Input discount"
                  variant="default"
                  class="m-md-2"
                >
                  <b-dropdown-item
                    v-model="form.promocode_discount"
                    @click="setDiscount(5)"
                    >5%</b-dropdown-item
                  >
                  <b-dropdown-item
                    v-model="form.promocode_discount"
                    @click="setDiscount(10)"
                    >10%</b-dropdown-item
                  >
                  <b-dropdown-item
                    v-model="form.promocode_discount"
                    @click="setDiscount(15)"
                    >15%</b-dropdown-item
                  >
                  <b-dropdown-item
                    v-model="form.promocode_discount"
                    @click="setDiscount(20)"
                    >20%</b-dropdown-item
                  >
                  <b-dropdown-item
                    v-model="form.promocode_discount"
                    @click="setDiscount(25)"
                    >25%</b-dropdown-item
                  >
                  <b-dropdown-item
                    v-model="form.promocode_discount"
                    @click="setDiscount(30)"
                    >30%</b-dropdown-item
                  >
                  <b-dropdown-item
                    v-model="form.promocode_discount"
                    @click="setDiscount(35)"
                    >35%</b-dropdown-item
                  >
                  <b-dropdown-item
                    v-model="form.promocode_discount"
                    @click="setDiscount(40)"
                    >40%</b-dropdown-item
                  >
                </b-dropdown>
              </div>
              <br />
              <h3>Expired date :</h3>
              <div>
                <b-dropdown
                  id="dropdown-1"
                  text="Select end date"
                  variant="default"
                  class="m-md-2"
                >
                  <b-dropdown-item
                    v-model="form.valid_until"
                    @click="setValidUntil('2021-01-15')"
                    >15-01-2021</b-dropdown-item
                  >
                  <b-dropdown-item
                    v-model="form.valid_until"
                    @click="setValidUntil('2021-01-16')"
                    >16-01-2021</b-dropdown-item
                  >
                  <b-dropdown-item
                    v-model="form.valid_until"
                    @click="setValidUntil('2021-01-17')"
                    >17-01-2021</b-dropdown-item
                  >
                </b-dropdown>
              </div>
              <br />
              <br />
              <!-- <h3>Input coupon date :</h3>
              <div>
                <b-dropdown
                  id="dropdown-1"
                  text="Input code"
                  variant="default"
                  class="m-md-2"
                >
                  <b-dropdown-item
                    v-model="form.promocode_name"
                    @click="setCode('CODE1')"
                    >CODE1</b-dropdown-item
                  >
                  <b-dropdown-item
                    v-model="form.promocode_name"
                    @click="setCode('CODE2')"
                    >CODE2</b-dropdown-item
                  >
                  <b-dropdown-item
                    v-model="form.promocode_name"
                    @click="setCode('CODE3')"
                    >CODE3</b-dropdown-item
                  >
                  <b-dropdown-item
                    v-model="form.promocode_name"
                    @click="setCode('CODE4')"
                    >CODE4</b-dropdown-item
                  >
                </b-dropdown>
              </div> -->
            </b-card>
          </div>
        </b-col>
        <b-col cols="8">
          <div class="right">
            <b-card>
              <h4>Name :</h4>
              <input type="text" v-model="form.promocode_name" /><br /><br />
              <h4>Normal Price :</h4>
              <input type="text" /><br /><br />
              <h4>Minimum Purchase :</h4>
              <input type="text" v-model="form.minimum_purchase" /><br /><br />
              <h4>Input Product Size :</h4>
              <h5>Click size you want to use for this promo</h5>
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
              <h5>Click methods you want to use for this promo</h5>
              <div class="delivery">
                <b-button>take away</b-button>
                <b-button>Dine in</b-button>
                <b-button>Home Delivery</b-button><br /><b></b>
              </div>
              <br /><br />
              <b-button @click="addPromo()">Save Promo</b-button><br /><br />
              <b-button>Cancel</b-button>
            </b-card>
          </div>
        </b-col>
        <h6>{{ form }}</h6>
      </b-row>
    </b-container>
    <hr />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/_base/Header'
import Footer from '../components/_base/Footer'
import { mapActions } from 'vuex'

export default {
  name: 'Newpromo',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      form: {
        promocode_name: '',
        promocode_image: '',
        promocode_discount: '',
        minimum_purchase: '',
        valid_until: '',
        promocode_created_at: new Date(),
        promocode_status: 1
      }
    }
  },
  methods: {
    ...mapActions(['postPromo']),
    handleFile(event) {
      console.log(event)
      this.form.promocode_image = event.target.files[0]
    },
    setDiscount(percent) {
      this.form.promocode_discount = percent
    },
    setValidUntil(date) {
      this.form.valid_until = date
    },
    addPromo() {
      const {
        promocode_name,
        promocode_image,
        promocode_discount,
        minimum_purchase,
        valid_until,
        promocode_status
      } = this.form
      const data = new FormData()
      data.append('promocode_name', promocode_name)
      data.append('promocode_image', promocode_image)
      data.append('promocode_discount', promocode_discount)
      data.append('minimum_purchase', minimum_purchase)
      data.append('valid_until', valid_until)
      data.append('promocode_status', promocode_status)

      this.postPromo(data)
        .then(result => {
          console.log(result)
          alert('Success Post Product')
        })
        .catch(error => {
          alert(error)
        })
      this.$router.push('/product')
    }
  }
}
</script>

<style>
@import '../assets/newpromo.css';
/* font */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap');
</style>
