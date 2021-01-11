<template>
  <div class="profile">
    <b-container>
      <Header />
      <b-jumbotron>
        <h3>Your Profile</h3>
        <br />
        <b-row>
          <b-col cols="12">
            <b-container>
              <b-card>
                <b-row>
                  <b-col cols="4">
                    <div class="edit">
                      <img src="../assets/lit-profile-pic.png" alt="" />
                      <h4>Name</h4>
                      <h5>example@email.com</h5>
                      <br />
                      <div class="photo">
                        <div class="btn1">
                          <b-button>Choose Photo</b-button><br /><br />
                        </div>
                        <div class="btn2">
                          <b-button>Remove Photo</b-button>
                        </div>
                      </div>
                      <br /><br />
                      <div class="pass">
                        <b-button>Edit Password</b-button>
                      </div>
                      <h4>Do you want to save the change?</h4>
                      <br />
                      <div class="change">
                        <div class="btn1">
                          <b-button @click="editProfileData()"
                            >Save Change</b-button
                          ><br /><br />
                        </div>
                        <div class="btn2">
                          <b-button>cancel</b-button>
                        </div>
                      </div>
                      <br />
                      <div class="logout">
                        <b-button>Log out</b-button>
                      </div>
                    </div>
                  </b-col>
                  <b-col cols="8">
                    <div class="form">
                      <b-card>
                        <h4>Contacts</h4>
                        <br />
                        <b-row>
                          <b-col cols="6">
                            <p>Email address :</p>
                            <input v-model="data.users_email" type="text" />
                            <br /><br />
                            <p>Delivery address :</p>
                            <input
                              v-model="data.delivery_address"
                              type="text"
                            />
                          </b-col>
                          <b-col cols="6"
                            ><p>Mobile number :</p>
                            <input v-model="data.users_phone" type="text"
                          /></b-col>
                        </b-row>
                        <br /><br /><br />
                        <h4>Details</h4>
                        <br />
                        <b-row>
                          <b-col cols="6">
                            <p>Display name :</p>
                            <input v-model="data.users_name" type="text" />
                            <br /><br />
                            <p>First name :</p>
                            <input v-model="data.first_name" type="text" />
                            <br /><br />
                            <p>Last name :</p>
                            <input v-model="data.last_name" type="text" />
                          </b-col>
                          <b-col cols="6"
                            ><p>DD/MM/YY :</p>
                            <input type="text"
                          /></b-col>
                        </b-row>
                        <br /><br />
                        <b-row>
                          <div class="gender">
                            <b-col
                              ><b-form-group>
                                <b-form-radio-group
                                  v-model="selected"
                                  :options="options"
                                  name="radio-inline"
                                ></b-form-radio-group> </b-form-group
                            ></b-col>
                          </div>
                        </b-row>
                      </b-card>
                    </div>
                  </b-col>
                </b-row>
              </b-card>
            </b-container>
          </b-col>
        </b-row>
      </b-jumbotron>
      <Footer />
    </b-container>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import Header from '../components/_base/Header'
import Footer from '../components/_base/Footer'
export default {
  nama: 'Product',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      selected: 'first',
      options: [
        { text: 'Male', value: 'first' },
        { text: 'Female', value: 'second' }
      ]
    }
  },
  computed: {
    ...mapGetters({ users: 'setUsers' }),
    ...mapGetters({ data: 'datas' })
  },
  methods: {
    ...mapActions(['editProfile']),
    ...mapMutations(['setData']),
    editProfileData() {
      const {
        users_name,
        users_email,
        users_password,
        users_phone,
        delivery_address,
        display_name,
        first_name,
        last_name,
        date_of_birth,
        users_gender,
        users_role,
        status
      } = this.data
      const newData = new FormData()
      newData.append('users_name', users_name)
      newData.append('users_email', users_email)
      newData.append('users_password', users_password)
      newData.append('users_phone', users_phone)
      newData.append('delivery_address', delivery_address)
      newData.append('display_name', display_name)
      newData.append('first_name', first_name)
      newData.append('last_name', last_name)
      newData.append('date_of_birth', date_of_birth)
      newData.append('users_gender', users_gender)
      newData.append('users_role', users_role)
      newData.append('status', status)
      this.setData(newData)
      this.editProfile(newData)
        .then(result => {
          console.log(result)
          alert('Success Update Profile')
        })
        .catch(error => {
          alert(error)
        })
    }
  }
}
</script>

<style>
@import '../assets/profile.css';
</style>
