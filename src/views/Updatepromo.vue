<template>
  <div class="newpromo">
    <Header />
    <hr />
    <b-container>
      <b-row>
        <b-col cols="4">
          <div class="left">
            <div class="picture">
              <img v-if="url" :src="url" class="round-img" />
              <img
                v-else-if="promoDetail.promocode_image"
                class="round-img"
                :src="
                  `https://${URL}/fileUploadsApi1/` +
                    promoDetail.promocode_image
                "
                alt="photo"
              />
              <div v-else>
                <img
                  class="default"
                  style="background-color:#d2d2d2;border-radius:50%;width:230px;height:230px"
                />
              </div>
            </div>
            <b-card>
              <div class="cfg">
                <b-button>
                  <input type="file" id="file" @change="handleFile" />
                  <label for="file">Choose From Gallery</label>
                </b-button>
              </div>
              <br /><br />
              <h3>Enter the discount :</h3>
              <div>
                <br />
                <input
                  type="number"
                  min="1"
                  v-model="promoDetail.promocode_discount"
                />
              </div>
              <br />
              <h3>Expired date :</h3>
              <div>
                <br />
                <input
                  type="date"
                  min="0"
                  max="100"
                  v-model="promoDetail.valid_until"
                />
              </div>
              <br />
              <br />
            </b-card>
          </div>
        </b-col>
        <b-col cols="8">
          <div class="right">
            <b-card>
              <h4>Name :</h4>
              <input
                type="text"
                v-model="promoDetail.promocode_name"
              /><br /><br />
              <h4>Normal Price :</h4>
              <input type="text" /><br /><br />
              <h4>Minimum Purchase :</h4>
              <input
                type="text"
                v-model="promoDetail.minimum_purchase"
              /><br /><br />

              <br /><br />
              <b-button @click="updatePromos()">Update Coupon</b-button
              ><br /><br />
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
import alert from '../mixin/alert'
import { mapGetters, mapMutations } from 'vuex'
import Header from '../components/_base/Header'
import Footer from '../components/_base/Footer'
import { mapActions } from 'vuex'

export default {
  name: 'Newpromo',
  mixins: [alert],
  components: {
    Header,
    Footer
  },
  computed: {
    ...mapGetters({ promoDetail: 'getPromoDetail' })
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
      },
      URL: process.env.VUE_APP_API
    }
  },
  methods: {
    ...mapActions(['updatePromo']),
    ...mapMutations(['setPromoDetail']),
    ...mapMutations(['updatesIdPromo']),
    handleFile(event) {
      console.log(event)
      // this.promoDetail.promocode_image = event.target.files[0]
      const size = event.target.files[0].size
      const type = event.target.files[0].type
      if (type != 'image/jpeg' && type != 'image/png' && type != 'image/jpg') {
        this.makeToast(
          'Failed',
          `Type of file must be JPEG, JPG, or PNG !`,
          'danger'
        )
      } else {
        if (size > 2000000) {
          this.makeToast('Failed', `File too large (max 2 MB)`, 'danger')
        } else {
          const file = (this.promoDetail.promocode_image =
            event.target.files[0])
          this.url = URL.createObjectURL(file)
        }
      }
    },
    setDiscount(percent) {
      this.promoDetail.promocode_discount = percent
    },
    setValidUntil(date) {
      this.promoDetail.valid_until = date
    },
    updatePromos() {
      console.log(this.$route.params.id)
      const {
        promocode_name,
        promocode_image,
        promocode_discount,
        minimum_purchase,
        valid_until,
        promocode_status
      } = this.promoDetail
      const data = new FormData()
      data.append('promocode_name', promocode_name)
      data.append('promocode_image', promocode_image)
      data.append('promocode_discount', promocode_discount)
      data.append('minimum_purchase', minimum_purchase)
      data.append('valid_until', valid_until)
      data.append('promocode_status', promocode_status)
      this.setPromoDetail(data)
      this.updatesIdPromo(this.$route.params.id)
      this.updatePromo(data)
        .then(result => {
          this.makeToast(
            `${result.data.msg}`,
            `Success Update Promo`,
            'success'
          )
          setTimeout(() => {
            this.$router.push('/product')
          }, 2000)
        })
        .catch(error => {
          this.makeToast('Failed', `${error.data.msg}`, 'danger')
        })
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
