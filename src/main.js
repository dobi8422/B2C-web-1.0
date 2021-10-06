import { createApp } from 'vue'
import 'bootstrap'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
import validate from './validate.js'
import store from './store/index.js'

import App from './App.vue'
import router from './router'

axios.defaults.withCredentials = true

const Vue = createApp(App)
Vue.use(store, validate).use(VueAxios, axios).use(router).mount('#app')

router.beforeEach((to, from, next) => {
  // console.log(to, from, next)
  if (to.meta.requiresAuth) {
    const api = 'https://vue-course-api.hexschool.io/api/user/check'
    // CUSTOMPATH: '"zxz189"'
    // const api = `${process.env.APIPATH}/admin/signin`
    axios.post(api).then((res) => {
      // console.log(res.data)
      if (res.data.success) {
        next()
      } else {
        router.push('/login')
      }
    })
  } else {
    next()
  }
})
