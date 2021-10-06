import axios from 'axios'

export default {
  state () {
    return {
      products: [],
      pagination: {}
    }
  },
  actions: {
    getProducts (context, page = 1) {
      context.commit('LOADING', true)
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products?page=${page}`
      axios.get(api).then(res => {
        context.commit('PRODUCTS', res.data.products)
        context.commit('PAGINATION', res.data.pagination)
        context.commit('LOADING', false)
      })
    }
  },
  mutations: {
    PRODUCTS (state, payload) {
      state.products = payload
    },
    PAGINATION (state, payload) {
      state.pagination = payload
    }
  },
  getters: {
    products: state => state.products,
    pagination: state => state.pagination
  }
}
