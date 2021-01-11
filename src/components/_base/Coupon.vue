<template>
  <div class="listpromocode">
    <b-row>
      <b-col
        xl="12"
        lg="12"
        md="12"
        sm="12"
        v-for="(item, index) in promocode"
        :key="index"
      >
        <div class="promo-card">
          <b-card>
            <img
              :src="
                item.promocode_image === ''
                  ? require('../../assets/cil.png')
                  : 'http://localhost:4001/' + item.promocode_image
              "
              alt="image"
            />
            <div class="percent">
              <b-card-text> {{ item.promocode_discount }}% OFF </b-card-text>
            </div>
            <div class="term">
              <b-card-text>
                With minimum purchase of IDR {{ item.minimum_purchase }}
              </b-card-text>
            </div>
            <p>COUPON CODE</p>
            <div class="code">
              <b-card-text> {{ item.promocode_name }} </b-card-text>
            </div>
            <div class="valid-until">
              <b-card-text> Valid until {{ item.valid_until }} </b-card-text>
              <button @click="editPromo(item)">Edit</button>
              <button @click="deletepromo(item.promocode_id)">Delete</button>
            </div>
          </b-card>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import axios from 'axios'
import { mapMutations } from 'vuex'

export default {
  name: 'Coupon',
  data() {
    return {
      promocode: [],
      form: {
        promocode_id: '',
        promocode_name: '',
        promocode_discount: '',
        minimum_purchase: '',
        valid_until: '',
        promocode_created_at: '',
        promocode_updated_at: '',
        promocode_status: ''
      },
      alert: false,
      isMsg: '',
      promocode_id: '',
      currentPage: 1,
      totalRows: null,
      limit: 12,
      page: 1
    }
  },
  created() {
    this.getPromocode()
  },
  methods: {
    ...mapMutations(['setPromoDetail']),
    editPromo(item) {
      this.setPromoDetail(item)
      this.$router.push({
        name: 'Updatepromo',
        params: { id: item.promocode_id }
      })
    },
    getPromocode() {
      axios
        .get('http://localhost:4001/promocode')
        .then(response => {
          console.log(response)
          this.promocode = response.data.data
        })
        .catch(error => {
          console.log(error)
        })
    },
    deletepromo(id) {
      this.$router.push({ name: 'Deletepromo', params: { id: id } })
    }
  }
}
</script>
