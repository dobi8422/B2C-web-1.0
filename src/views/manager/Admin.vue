<template>
  <div class="admin">
    <div id="nav" class="d-flex border-bottom border-secondary" style="width: 340px;">
      <router-link class="nav-link" to="/admin/order" @click="loading">訂單</router-link>
      <router-link class="nav-link" to="/admin/product" @click="loading">產品</router-link>
      <router-link class="nav-link" to="/admin/coupon" @click="loading">優惠卷</router-link>
      <router-link class="nav-link" to="/admin/promotion" @click="loading">活動</router-link>
      <a class="nav-link" @click.prevent="signout">登出</a>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Admin',
  methods: {
    signout () {
      this.updateLoading(true)
      const api = 'https://vue-course-api.hexschool.io/logout'
      // CUSTOMPATH: '"zxz189"'
      // const api = `${process.env.APIPATH}/admin/signin`
      this.axios.post(api, this.user).then(res => {
        if (res.data.success) {
          const token = res.data.token
          const expired = res.data.expired
          // console.log(token, expired)
          document.cookie = `hexToken=${token};expires=${new Date(expired)}`
          this.$router.push('/login')
          this.updateLoading(false)
        }
      })
    },
    loading () {
      this.updateLoading(true)
      setTimeout(() => { this.updateLoading(false) }, 1000)
    },
    ...mapActions(['updateLoading'])
  }
}
</script>

<style lang="scss" scoped>
#nav {
  a {
    font-weight: bold;
    color: black;

    &.router-link-exact-active {
      color: #e465a0;
    }
  }
}
</style>
