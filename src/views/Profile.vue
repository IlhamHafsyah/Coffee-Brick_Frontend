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
                      <div class="picture">
                        <img v-if="url" :src="url" class="round-img" />
                        <img
                          v-else-if="data.profile_picture"
                          class="round-img"
                          :src="'http://localhost:4001/' + data.profile_picture"
                          alt="photo"
                        />
                        <div v-else>
                          <img
                            class="default"
                            style="background-color:#d2d2d2;border-radius:50%;width:230px;height:230px"
                          />
                        </div>
                      </div>
                      <!-- <img src="../assets/lit-profile-pic.png" alt="" /> -->
                      <h4>{{ data.users_name }}</h4>
                      <h5>{{ data.users_email }}</h5>
                      <br />
                      <div class="photo">
                        <div class="btn1">
                          <b-button>
                            <input type="file" id="file" @change="handleFile" />
                            <label for="file">Choose Photo</label> </b-button
                          ><br /><br />
                        </div>
                        <div class="btn2">
                          <b-button @click="removePhoto">Remove Photo</b-button>
                        </div>
                      </div>
                      <br /><br />
                      <div class="pass">
                        <b-button @click="editPass($route.params.id)"
                          >Edit Password</b-button
                        >
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
                        <!-- <h6>{{ data }}</h6> -->
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
                            <!-- <h6 style="color:white">{{ users }}</h6> -->
                          </b-col>
                          <b-col cols="6"
                            ><p>DD/MM/YY :</p>
                            <input v-model="data.date_of_birth" type="date"
                          /></b-col>
                        </b-row>
                        <br /><br />
                        <b-row>
                          <div class="gender">
                            <b-col
                              ><b-form-group>
                                <b-form-radio-group
                                  v-model="data.users_gender"
                                  :options="options"
                                  name="radio-inline"
                                ></b-form-radio-group>
                              </b-form-group>
                            </b-col>
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
      options: [
        { text: 'Male', value: 1 },
        { text: 'Female', value: 0 }
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
    handleFile(event) {
      console.log(event)
      // this.productsDetail.product_image = event.target.files[0]
      const type = event.target.files[0].type
      if (type != 'image/jpeg' && type != 'image/png' && type != 'image/jpg') {
        console.log('oke')
      } else {
        const file = (this.data.profile_picture = event.target.files[0])
        this.url = URL.createObjectURL(file)
      }
    },
    removePhoto() {
      this.data.profile_picture = ''
    },
    editProfileData() {
      const {
        users_name,
        users_email,
        users_password,
        users_phone,
        profile_picture,
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
      newData.append('profile_picture', profile_picture)
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
    },
    editPass(id) {
      this.$router.push({ name: 'Editpassword', params: { id: id } })
    }
  }
}
</script>

<style>
@import '../assets/profile.css';
</style>
