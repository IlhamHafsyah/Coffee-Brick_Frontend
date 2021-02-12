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
              style="width:150px;height:150px"
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
              <b-card-text>
                {{ item.promocode_name }}
              </b-card-text>
            </div>
            <div class="valid-until">
              <b-card-text>
                Valid until {{ item.valid_until.substring(0, 10) }}
              </b-card-text>
              <button @click="editPromo(item)" v-if="user.users_role === 1">
                Update
              </button>
              <button
                @click="deletepromo(item.promocode_id)"
                v-if="user.users_role === 1"
              >
                Delete
              </button>
            </div>
          </b-card>
        </div>
      </b-col>
    </b-row>
    <br />
    <b-pagination
      v-model="currentPage"
      :total-rows="totalRows"
      :per-page="limit"
      @change="handlePageChange"
      pills
      align="center"
      size="sm"
    ></b-pagination>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
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
      totalRows: 12,
      limit: 1,
      page: 1
    }
  },
  created() {
    this.getPromocode()
  },
  computed: {
    ...mapGetters({ user: 'setUsers' })
  },
  methods: {
    ...mapMutations(['setPromoDetail']),
    handlePageChange(numberPage) {
      console.log(numberPage)
      this.page = numberPage
      this.getPromocode()
    },
    editPromo(item) {
      this.setPromoDetail(item)
      this.$router.push({
        name: 'Updatepromo',
        params: { id: item.promocode_id }
      })
    },
    getPromocode() {
      axios
        .get(`http://localhost:4001/promocode?page=${this.page}`)
        .then(response => {
          console.log(response)
          this.promocode = response.data.data
          this.totalRows = response.data.pagination.totalData
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
