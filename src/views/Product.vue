<template>
  <div class="">
    <div class="row">
      <!-- 投影片-促銷活動 -->
      <SmPromotion class="col-12 mb-5"/>
      <!-- 商品內容 -->
      <div class="container col-9 col-md-8 my-4">
        <div class="row g-5">
          <!-- 分類列表 -->
          <div class="col-12 col-lg-3">
            <div class="row list_group rounded justify-content-center">
              <button href="#" class="btn list_item fs-5" :class="{'list_item_active': label == '所有商品'}" @click="label = '所有商品'">所有商品</button>
              <button href="#" class="btn list_item fs-5" :class="{'list_item_active': label == '巧克力'}" @click="label = '巧克力'">巧克力</button>
              <button href="#" class="btn list_item fs-5" :class="{'list_item_active': label == '乳酪愛好者'}" @click="label = '乳酪愛好者'">乳酪愛好者</button>
              <button href="#" class="btn list_item fs-5" :class="{'list_item_active': label == '慶生系列'}" @click="label = '慶生系列'">慶生系列</button>
              <button href="#" class="btn list_item fs-5" :class="{'list_item_active': label == '卡通造型'}" @click="label = '卡通造型'">卡通造型</button>
              <button href="#" class="btn list_item fs-5" :class="{'list_item_active': label == '小點心'}" @click="label = '小點心'">小點心</button>
            </div>
          </div>
          <!-- 商品列表 -->
          <div class="col-12 col-lg-9">
            <div class="row">
              <div class="col-12 col-sm-6 col-xl-4 mb-4"  v-for="item in labelProducts" :key="item.id">
                <div class="card border-0 shadow-sm">
                  <span class="position-absolute end-0 product_badge">{{ item.category }}</span>
                  <img class="card-body" height="220" :src="item.imageUrl" data-bs-toggle="modal" data-bs-target="#productModal" @click="tempProduct = Object.assign({}, item), tempProduct.num = 1">
                  <div class="card-body p-2">
                    <div class="fw-bold fs-5">{{ item.title }}</div>
                    <div class="d-flex justify-content-center align-items-baseline">
                      <div class="text-danger" v-if="item.origin_price != 0">特價 {{ currency(item.price) }} 元</div>
                      <div v-else>{{ currency(item.price) }} 元</div>
                    </div>
                    <button type="button" class="col-10 btn btn_pink btn-sm ml-auto" @click="addCart(item.id, 1)">加到購物車</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal-商品詳細資料 -->
    <div class="modal fade" id="productModal" tabindex="-1" aria-labelledby="productModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-xl modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-body row g-5 p-4">
            <div class="col-5">
              <div class="row g-2 d-flex justify-content-between h-100">
                <div class="">
                  <img :src="tempProduct.imageUrl" class="img-fluid"/>
                </div>
                <div class="text-warning fs-2" style="letter-spacing: 5px;" id="productModalLabel">
                  <i class="my-auto fas fa-birthday-cake"></i>&ensp;{{ tempProduct.title }}
                </div>
                <div class="d-flex justify-content-around align-items-baseline">
                  <div class="h4" v-if="tempProduct.origin_price == 0">{{ tempProduct.num * tempProduct.price }} 元</div>
                  <del class="h6" v-if="tempProduct.origin_price != 0">原價 {{ tempProduct.num * tempProduct.origin_price }} 元</del>
                  <div class="h4" v-if="tempProduct.origin_price != 0">特價 {{ tempProduct.num * tempProduct.price }} 元</div>
                </div>
                <div class="container">
                  <div class="row g-2">
                    <div class="col-md-6 container">
                      <div class="row g-0">
                        <input class="col-6 rounded-2 text-center" type="number" v-model="tempProduct.num">
                        <p class="col-6 my-auto">{{ tempProduct.unit ? tempProduct.unit : '份' }}</p>
                      </div>
                    </div>
                    <button type="button" class="col-md-6 btn btn_pink" data-bs-dismiss="modal" @click="addCart(tempProduct.id, tempProduct.num)">加到購物車</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="d-flex row col-7 text-start g-4" style="overflow-y: scroll; letter-spacing: 5px;max-height: 600px;">
              <div class="flex-grow-1 border rounded-3">
                <p class="text-warning fs-3">產品介紹</p>
                <p class="ms-4 fs-5" style="letter-spacing: 1px;">{{ tempProduct.content }}</p>
              </div>
              <div class="border rounded-3 p-2">
                <p class="text-warning fs-3">注意事項</p>
                <p class="ms-4 fs-5" style="letter-spacing: 1px;">{{ tempProduct.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Pagination :pages="pagination" @emitProductPage="getProducts"></Pagination>
    <!-- Offcanvas-購物車 -->
    <SmCustomerCart ref="SmCustomerCart"/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Pagination from '@/components/Pagination'
import SmPromotion from '@/views/SmPromotion'
import SmCustomerCart from '@/views/SmCustomerCart'

export default {
  data () {
    return {
      label: '所有商品',
      tempProduct: {}
    }
  },
  components: {
    Pagination,
    SmPromotion,
    SmCustomerCart
  },
  methods: {
    getProducts (page = 1) {
      this.getProducts(page)
    },
    addCart (id, qty) {
      this.addtoCart({ id, qty })
    },
    currency (num) {
      const n = Number(num)
      return `$${n.toFixed(0).replace(/./g, (c, i, a) => {
        const currency = (i && c !== '.' && ((a.length - i) % 3 === 0) ? `, ${c}`.replace(/\s/g, '') : c)
        return currency
      })}`
    },
    ...mapActions(['getProducts', 'addtoCart'])
  },
  computed: {
    labelProducts () {
      return this.label === '所有商品' ? this.products : this.products.filter(item => item.category === this.label)
    },
    ...mapGetters(['products', 'pagination']) // 取代mapState
  },
  created () {
    this.getProducts()
  }
}
</script>

<style lang="scss">
.list_group{
  background: #fcd9d9;
  padding: 10px;
}
.list_item{
  background: #fcd9d9;
  color: #e465a0;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
}
.list_item:hover, .list_item_active{
  background: #e465a0;
  color: #fcd9d9;
}
.product_badge{
  background: #fcd9d9;
  color: rgb(63, 63, 63);
  border-radius: 0 0 0 10px;
  padding: 0 5px;
  box-shadow: 0.5px 1px 2px 0.5px rgba(133, 133, 133, 0.644);
  font-weight: 600;
}
.card-body{
  background: rgb(255, 250, 243);
  box-shadow: 0 0 2px 2px rgba(197, 197, 197, 0.644);
  padding: 0;
}
.card:hover{
  bottom: 10px;
}
.btn_pink{
  background: #fcd9d9;
  font-weight: 600;
  font-size: 1em;
}
.btn_pink:hover{
  background: #e465a0;
  color: #fcd9d9;
}
</style>
