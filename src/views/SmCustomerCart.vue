<template>
  <div>
    <div id="cart_icon" class="nav-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
      <a href="#" class="list_item" @click.prevent ><i class="fas fa-shopping-cart"></i></a>
      <!-- <span class="badge bg-danger" await.v-if="this.carts.carts.length">{{ this.carts.carts.length }}</span> -->
      <!-- await.v-if -->
    </div>
    <!-- Offcanvas -->
    <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasScrollingLabel">
          <i class="fas fa-shopping-cart"></i>&ensp;我的購物車
        </h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="container offcanvas-body">
        <div class="row mx-auto">
          <div v-if="carts.carts">
            <div v-if="carts.carts.length!==0">
              <table class="table mt-4 container">
                <thead class="bg-dark text-light">
                  <th width="5"></th>
                  <th width="60">品名</th>
                  <th width="25">數量</th>
                  <th width="10">單價</th>
                </thead>
                <tbody>
                  <tr v-for="item in cartsReverse" :key="item.id">
                    <td class="align-middle">
                      <button type="button" class="btn btn-outline-danger btn-sm" @click="deleteItem(item.id, item.qty, item.product.unit, item.product.title)">
                        <i class="far fa-trash-alt"></i>
                      </button>
                    </td>
                    <td class="align-middle">{{ item.product.title }}
                      <div class="text-success" v-if="item.coupon">已套用優惠卷</div>
                    </td>
                    <td class="align-middle">{{ item.qty }} {{ item.product.unit }}</td>
                    <td class="align-middle text-right">{{ item.final_total }}</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colspan="3" class="text-right">總計</td>
                    <td class="text-right">{{ carts.total }}</td>
                  </tr>
                  <tr v-if="carts.final_total !== carts.total">
                    <td colspan="3" class="text-right text-success">折扣價</td>
                    <td class="text-right text-success">{{ carts.final_total }}</td>
                  </tr>
                </tfoot>
              </table>
              <div class="d-flex justify-content-evenly">
                <button class="btn btn-outline-secondary" @click="clearCart">清空購物車</button>
                <div data-bs-dismiss="offcanvas" aria-label="Close">
                  <router-link class="btn btn-outline-danger" to="/cart">前往結帳</router-link>
                </div>
              </div>
            </div>
            <div class="fs-4 mt-5" v-else>目前購物車是空的~~</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  methods: {
    // 購物清單
    getCart () {
      this.getCart()
    },
    deleteItem (id, qty, unit, title) {
      this.deleteCartItem({ id, qty, unit, title })
    },
    clearCart () {
      this.carts.carts.forEach(item => {
        const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${item.id}`
        this.axios.delete(api)
      })
      this.alertMessage('清空購物車')
      console.log('清空購物車')
      this.getCart()
    },
    currency (num) {
      const n = Number(num)
      return `$${n.toFixed(0).replace(/./g, (c, i, a) => {
        const currency = (i && c !== '.' && ((a.length - i) % 3 === 0) ? `, ${c}`.replace(/\s/g, '') : c)
        return currency
      })}`
    },
    ...mapActions(['getCart', 'deleteCartItem', 'alertMessage'])
  },
  computed: {
    cartsReverse () {
      return JSON.parse(JSON.stringify(this.carts.carts)).reverse()
    },
    ...mapGetters(['carts'])
  },
  created () {
    this.getCart()
  }
}
</script>

<style lang="scss" scoped>
#cart_icon {
  position: fixed;
  right: 1.2%;
  bottom: 3%;
  z-index: 1000;
}
.badge{
  color: #fcd9d9;
  border-radius: 50%;
  position: absolute;
  top: -5px;
  left: 50px;
}
</style>
