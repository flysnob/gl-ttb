<template>
  <v-layout align-center justify-center>
    <v-form>
      <v-container
        id="register"
        grid-list-xl
        fluid
      >
        <v-layout wrap>
          <v-flex xs12>
            <v-text-field
              v-model="email"
              label="Email"
            >
            </v-text-field>
            <v-text-field
              v-model="password"
              :append-icon="show1 ? 'visibility_off' : 'visibility'"
              :type="show1 ? 'text' : 'password'"
              :rules="[rules.required, rules.min]"
              name="password"
              label="Password"
              hint="At least 8 characters"
              counter
              @click:append="show1 = !show1"
            ></v-text-field>
            <v-checkbox
              v-model="rememberMe"
              label="Remember me?"
            >
            </v-checkbox>
            </v-flex>
          <v-btn
            :disabled="!valid"
            color="success"
            @click="register"
          >
            Register
          </v-btn>
        </v-layout>
      </v-container>
    </v-form>
  </v-layout>
</template>

<script>
  import axios from 'axios'
  axios.defaults.headers.common['Accept'] = 'application/json'

  export default {
    data() {
      return {
        valid: true,
        show1: false,
        show2: true,
        show3: false,
        show4: false,
        password: '',
        email: '',
        rememberMe: '',
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
        },
        data: {
          body: {
            email: '',
            password: '',
            rememberMe: ''
          },
          autoLogin: false,
          rememberMe: false
        },
        formData: new FormData(),
        error: null
      };
    },
    methods: {
      register() {
        axios.post('http://localhost:3000/users', {
          user: {
            email: this.email,
            password: this.password
          }
        })
        .then(response => {
          var formData = new FormData();
          formData.append('email', this.data.body.email);
          formData.append('password', this.data.body.password);
          formData.append('rememeberMe', this.data.body.rememberMe);
        })
        .catch(e => {
          console.log(e);
          this.error = e;
        });
      },
      reset () {
        this.$refs.form.reset()
      }
    }
  }
</script>
