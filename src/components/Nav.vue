<template>
  <div>
    <nav class="fixed-top navbar" :class="{'nav navbar-dark bg-dark':isDownPage, 'nav_down':!isDownPage}">
      <div class="container-fluid justify-content-between">
        <div class="d-flex">
          <router-link class="nav-link ps-0" to="/" @click="loading"><i class="fas fa-birthday-cake"></i>&ensp;Hola Cake</router-link>
        </div>
        <div class="d-flex" v-if="!isCollapse">
          <router-link class="nav-link" to="/about" @click="loading">關於我們</router-link>
          <router-link class="nav-link" to="/product" @click="loading">商品</router-link>
          <router-link class="nav-link" to="/login" @click="loading">登入</router-link>
          <router-link class="nav-link" to="/cart" @click="loading"><i class="fas fa-shopping-cart"></i></router-link>
        </div>
        <!-- 縮小nav -->
        <button v-else class="navbar-toggler" :class="{'navbar-light':!isDownPage}" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end justify-content-center row g-3" :class="{'nav navbar-dark bg-dark':isDownPage, 'nav_down navbar-light bg-light':!isDownPage}" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <router-link class="nav-link" to="/" @click="loading">首頁</router-link>
          <router-link class="nav-link" to="/about" @click="loading">關於我們</router-link>
          <router-link class="nav-link" to="/product" @click="loading">商品</router-link>
          <router-link class="nav-link" to="/login" @click="loading">登入</router-link>
          <router-link class="nav-link" to="/cart" @click="loading">購物車</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      fullWidth: 0,
      scrollTop: 0
    }
  },
  computed: {
    isCollapse () { return this.fullWidth < 992 },
    isDownPage () { return this.scrollTop < 600 }
  },
  methods: {
    loading () { this.updateLoading() },
    ...mapActions(['updateLoading'])
  },
  mounted () {
    this.fullWidth = window.innerWidth
    window.onresize = () => { this.fullWidth = window.innerWidth }
    this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    window.onscroll = () => { this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop }
  }
}
</script>

<style lang="scss" scoped>
.nav {
  transition: background .3s ease;
  a {
    font-weight: bold;
    color: rgb(254, 246, 255);

    &.router-link-exact-active {
      color: #e465a0;
    }
  }
}
.nav_down {
  border-bottom: rgba(126, 126, 126, 0.123) 1px solid;
  background: rgba(254, 246, 255, 0.685);
  transition: background .3s ease;
  color: black;
  a {
    font-weight: bold;
    color: black;

    &.router-link-exact-active {
      color: #e465a0;
    }
  }
}
</style>
