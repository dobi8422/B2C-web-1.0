<template>
  <div class="login">
    <main class="form-signin" @submit.prevent="signin">
      <form>
        <div class="my-5 fs-1"><i class="fas fa-birthday-cake"></i>&ensp;登入</div>
        <div class="form-floating">
          <input type="email" class="form-control" id="floatingInput" v-model="user.username" placeholder="Email">
          <label for="floatingInput" class="text-secondary">Email</label>
        </div>
        <div class="form-floating">
          <input type="password" class="form-control" id="floatingPassword" v-model="user.password" placeholder="Password">
          <label for="floatingPassword" class="text-secondary">Password</label>
        </div>

        <!-- <div class="checkbox mb-3">
          <label><input type="checkbox" value="remember-me"> Remember me</label>
        </div> -->
        <button class="w-100 btn btn-lg btn-secondary" type="submit">Sign in</button>
      </form>
    </main>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    signin () {
      const api = `${process.env.VUE_APP_APIPATH}/admin/signin`
      this.axios.post(api, this.user).then((res) => {
        if (res.data.success) {
          const token = res.data.token
          const expired = res.data.expired
          document.cookie = `hexToken=${token};expires=${new Date(expired)}`
          this.alertMessage('登入成功')
          this.$router.push('/admin/product')
        }
      })
    },
    ...mapActions(['alertMessage'])
  }
}
</script>

<style lang="scss" scoped>
body {
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  height: 100%;
  background-color: #f5f5f5;
}
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-floating:focus-within {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
