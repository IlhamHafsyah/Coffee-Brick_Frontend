<template>
  <div class="login">
    <b-container>
      <b-row>
        <b-col cols="6">
          <div class="pic"></div>
        </b-col>
        <b-col cols="6">
          <b-row>
            <b-col cols="6">
              <div class="logo">
                <img src="../../assets/logo copy.png" />
              </div>
            </b-col>
            <b-col cols="6">
              <div class="signup">
                <b-button @click="toRegister()">Sign Up</b-button>
              </div>
            </b-col>
          </b-row>
          <div class="form">
            <br />
            <h2>Log In</h2>
            <br />
            <b-form @submit.prevent="onSubmit" @reset.prevent="onReset">
              <h5>Email Adrress :</h5>
              <input
                v-focus
                type="email"
                v-model="form.users_email"
                placeholder="  Input Your Email ..."
              /><br /><br />
              <h5>Password :</h5>
              <input
                type="password"
                v-model="form.users_password"
                placeholder="  Input Your Password ..."
              />
              <br /><br />
              <div class="fp">
                <a href="">Forgot Password ?</a>
              </div>
              <br /><br /><br />
              <div class="submit">
                <b-button type="submit">Submit</b-button>
              </div>
              <br />
              <div class="reset">
                <b-button type="reset">Reset</b-button>
              </div>
              <br /><br />
              <div class="google">
                <b-button>
                  <img src="../../assets/google.png" alt="" />
                  Sign Up With Google</b-button
                >
              </div>
            </b-form>
          </div>
          <br /><br /><br />
          <div class="su"></div>
          <br /><br />
          <div class="google"></div>
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
import { mapActions } from 'vuex'
import Footer from '../../components/_base/Footer'
import alert from '../../mixin/alert'
export default {
  name: 'Login',
  mixins: [alert],
  components: {
    Footer
  },
  data() {
    return {
      form: {
        users_email: '',
        users_password: ''
      }
    }
  },
  computed: {
    // mapState dan mapGetters
    //1
    // dataName() {
    //   return this.$store.state.name
    // }
    //2
    // ...mapState(['users']),
    // ...mapGetters({ users: 'setUsers' })
    // ...mapState({ dataName: 'name' })
  },
  methods: {
    // mapAction dan mapMutations
    // ...mapMutations(['setUsers']),
    ...mapActions(['login']),
    toRegister() {
      this.$router.push('/register')
    },
    onSubmit() {
      this.login(this.form)
        .then(result => {
          this.makeToast(
            `${result.data.msg}`,
            `Congratulations, ${this.form.users_email}`,
            'success'
          )
          setTimeout(() => {
            this.$router.push('/')
          }, 2000)
        })
        .catch(error => {
          this.makeToast('Failed', `${error.data.msg}`, 'danger')
        })
    },
    onReset() {
      this.form = {
        users_email: '',
        users_password: ''
      }
    }
  }
}
</script>

<style>
@import '../../assets/login.css';
/* font */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap');
</style>
