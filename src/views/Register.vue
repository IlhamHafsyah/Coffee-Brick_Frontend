<template>
  <div class="register">
    <b-container>
      <b-row>
        <b-col cols="6">
          <div class="pic"></div>
        </b-col>
        <b-col cols="6">
          <b-row>
            <b-col cols="6">
              <div class="logo">
                <img src="../assets/logo copy.png" />
              </div>
            </b-col>
            <b-col cols="6">
              <div class="login">
                <b-button @click="toLogin()">Log In</b-button>
              </div>
            </b-col>
          </b-row>
          <div class="form">
            <br />
            <h2>Sign Up</h2>
            <br />
            <h5>Email Adrress :</h5>
            <input
              type="email"
              v-model="form.users_email"
              placeholder="  Input Your Email ..."
            /><br /><br />
            <h5>Password :</h5>
            <input
              type="password"
              v-model="form.users_password"
              placeholder="  Input Your Password ..."
            /><br /><br />
            <h5>Phone Number :</h5>
            <input
              type="phone"
              v-model="form.users_phone"
              placeholder="  Input Your Phone Number ..."
            />
          </div>
          <br /><br /><br />
          <div class="su">
            <b-button @click="regis()">Sign Up</b-button>
          </div>
          <br /><br />
          <div class="google">
            <b-button>
              <img src="../assets/google.png" alt="" />
              Sign Up With Google</b-button
            >
          </div>
        </b-col>
      </b-row>
      <div class="member">
        <b-card>
          <ul>
            <li>
              <h3>
                Get Your Member <br />
                Card Now !
              </h3>
              <p>Let's join with our member and enjoy the deals.</p>
            </li>
            <li>
              <div class="get"><b-button>Create Now</b-button></div>
            </li>
          </ul>
        </b-card>
      </div>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/_base/Footer'
import { mapActions, mapMutations } from 'vuex'

export default {
  name: 'Register',
  components: {
    Footer
  },
  data() {
    return {
      form: {
        users_name: 'Username',
        users_email: '',
        profile_picture: '',
        delivery_address: 'Your Address',
        users_role: '',
        users_phone: '',
        display_name: 'Display Name',
        first_name: 'First Name',
        last_name: 'Last Name',
        date_of_birth: '0000-00-00',
        users_gender: '0',
        status: 1,
        users_password: ''
      }
    }
  },
  methods: {
    ...mapActions(['register']),
    ...mapMutations(['setUsers']),
    ...mapMutations(['setData']),
    toLogin() {
      this.$router.push('/login')
    },
    regis() {
      this.setUsers(this.form)
      this.setData(this.form)
      this.register(this.form)
        .then(result => {
          console.log(result)
          alert('Success Register')
        })
        .catch(error => {
          alert(error)
        })
      this.$router.push('/login')
    }
  }
}
</script>

<style>
@import '../assets/register.css';
/* font */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap');
</style>
