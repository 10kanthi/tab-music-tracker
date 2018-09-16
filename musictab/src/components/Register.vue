<template>
  <div>
    <h1>Register</h1>
    <input
      type="email"
      name="email"
      v-model="email"
      placeholder="your email"/>
      <br/>
    <input
      type="password"
      name="password"
      v-model="password"
      placeholder="your password"/>
    <br/>>
    <button
      @click="register">
      Register
    </button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
}
</script>
