import axios from 'axios'

export default {
  state () {
    return {
      carts: []
    }
  },
  actions: {
    getCart (context) {
      context.commit('LOADING', true)
      const api = 'https:vue-course-api.hexschool.io/api/zxz189/cart'
      axios.get(api).then(res => {
        context.commit('GETCART', res.data.data)
        context.commit('LOADING', false)
      })
    },
    deleteCartItem (context, { id, qty, unit, title }) {
      console.log(id, qty, unit, title)
      const api = `https:vue-course-api.hexschool.io/api/zxz189/cart/${id}`
      axios.delete(api).then(res => {
        context.dispatch('getCart')
        const str = `刪除產品：${qty}${unit}${title}`
        context.dispatch('alertMessage', str)
      })
    },
    addtoCart (context, { id, qty }) {
      context.commit('LOADING', true)
      const api = 'https:vue-course-api.hexschool.io/api/zxz189/cart'
      const cart = {
        product_id: id,
        qty
      }
      axios.post(api, { data: cart }).then(res => {
        console.log(res.data.data.product.title)
        const str = `${res.data.data.product.title} 已加入購物車`
        context.dispatch('alertMessage', str)
        context.dispatch('getCart')
      })
      context.commit('LOADING', false)
    }
  },
  mutations: {
    GETCART (state, payload) {
      state.carts = payload
    }
  },
  getters: {
    carts: state => state.carts
  }
}
