<template>
  <div class="d-flex row">
    <Loading v-if="isLoading"/>
    <Nav/>
    <GoTop/>
    <Message v-if="isMessage"/>
    <router-view class="mainpage"/>
    <Footer/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Loading from '@/components/Loading'
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'
import GoTop from '@/components/GoTop'
import Message from '@/components/Message.vue'

export default {
  components: {
    Loading,
    Nav,
    Footer,
    GoTop,
    Message
  },
  computed: { ...mapGetters(['isLoading', 'isMessage']) },
  created () {
    // 讀取cookie
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    if (token !== '') {
      // axios語法，將cookie往後端發送
      this.axios.defaults.headers.common.Authorization = token
    }
  }
}
</script>

<style lang="scss">
@import '~bootstrap/scss/bootstrap';

#app {
  font-family: "Microsoft YaHei", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  overflow-x: hidden;
  background: rgb(255, 252, 247);
}
a{
  text-decoration: none;
}
.mainpage{
  min-height: calc(100vh - 165px);
  margin-top: 56px;
}
::-webkit-scrollbar {
  width: 0.7em;
}
/* Track */
::-webkit-scrollbar-track {
  background: #fcd9d9;
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: #d191af;
  border-radius: 20px;
}
input[type=number]::-webkit-outer-spin-button,
input[type=number]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.bblur{
  background: rgba(255, 252, 247, 0.4);
  backdrop-filter: blur(4px);
  // backdrop-filter: hue-rotate(120deg);
}
</style>
