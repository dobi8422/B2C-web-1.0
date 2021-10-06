import { createStore } from 'vuex'
// import axios from 'axios'

import productModule from './product'
import cartModule from './cart'

const store = createStore({
  strict: true,
  // 嚴謹模式
  state () {
    // state的data-->>由元件mapState取得值，可被取代mapState
    // state屬於區域變數，action, mutation, getter屬於全域變數
    return {
      isLoading: false,
      message: '',
      isMessage: false
    }
  },
  actions: {
    // state的method，呼叫mutation去改變-->>由元件mapAction呼叫
    updateLoading (context) {
      context.commit('LOADING', true)
      setTimeout(() => { context.commit('LOADING', false) }, 1000)
    },
    alertMessage (context, payload) {
      context.commit('MESSAGE', payload)
      context.commit('ISMESSAGE', true)
      setTimeout(() => { context.commit('ISMESSAGE', false) }, 2500)
    }
  },
  mutations: {
    // 提供(vuex, 其他元件)呼叫的方法，state:vuex的data，payload:外部傳來的參數
    // 避免mutation限制同步，都盡量使用action呼叫mutation
    LOADING (state, payload) {
      state.isLoading = payload
    },
    MESSAGE (state, payload) {
      state.message = payload
    },
    ISMESSAGE (state, payload) {
      state.isMessage = payload
    }
  },
  getters: {
    // state的computed，隨時偵測state的值-->>由元件mapGetter呼叫，幾乎可取代mapState
    isLoading: state => state.isLoading,
    message: state => state.message,
    isMessage: state => state.isMessage
  },
  modules: {
    productModule,
    cartModule
  }
})

export default store
