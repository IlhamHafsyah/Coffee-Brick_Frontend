<template>
  <div class="detail">
    <Header />
    <hr />
    <b-container class="bv-example-row">
      <b-row>
        <b-col cols="5">
          <img src="../assets/cb.png" alt="" />
          <b-card>
            <b-form-group
              label="Button style radios"
              v-slot="{ ariaDescribedby }"
            >
              <b-form-radio-group
                id="btn-radios-1"
                v-model="selected"
                :options="option"
                :aria-describedby="ariaDescribedby"
                name="radios-btn-default"
                buttons
              ></b-form-radio-group>
            </b-form-group>
            <b-form-group
              label="Button style radios"
              v-slot="{ ariaDescribed }"
            >
              <b-form-radio-group
                id="btn-radios-2"
                v-model="selecteds"
                :options="options"
                :aria-describedby="ariaDescribed"
                name="radios-btn-default"
                buttons
              ></b-form-radio-group> </b-form-group
          ></b-card>
        </b-col>
        <b-col cols="7">
          <b-card>{{ products.product_name }}</b-card>
          <b-card>{{ products.product_desc }}</b-card>
          <b-row>
            <b-col cols="6">
              <template>
                <div>
                  <b-form-spinbutton
                    id="sb-wrap"
                    wrap
                    min="1"
                    max="25"
                    placeholder="--"
                  ></b-form-spinbutton>
                </div>
              </template>
            </b-col>
            <b-col cols="6">IDR {{ products.product_price }}</b-col>
          </b-row>
          <b-button>add to cart</b-button><br />
          <b-button>ask a staff</b-button>
        </b-col>
      </b-row>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import axios from 'axios'
import Header from '../components/_base/Header'
import Footer from '../components/_base/Footer'

export default {
  name: 'Detail',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      products: [],
      id: '',
      selected: 'radio1',
      option: [
        { text: 'Radio 1', value: 'radio1' },
        { text: 'Radio 2', value: 'radio2' },
        { text: 'Radio 3', value: 'radio3' }
      ],
      selecteds: 'radio2',
      options: [
        { text: 'Radio 1', value: 'radio1' },
        { text: 'Radio 2', value: 'radio2' }
      ]
    }
  },
  created() {
    this.getProductById(this.$route.params.id)
    console.log(this.$route.params.id)
  },
  methods: {
    getProductById(id) {
      console.log(id)
      axios
        .get(`http://localhost:4000/product/${id}`)
        .then(response => {
          console.log(response)
          this.products = response.data.data[0]
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
