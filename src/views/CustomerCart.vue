<template>
  <div class="p-5 container">
    <div class="position-absolute end-0 me-5">
      <button class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#deleteModal">清空購物車</button>
    </div>
    <div class="fs-3 mb-5" style="color: #e465a0;">購物車</div>
    <div class="row my-5">
      <div class="col-lg-6 mx-auto" v-if="carts.carts">
        <div v-if="carts.carts.length!==0">
          <table class="table mt-4 container">
            <thead class="bg-dark text-light">
              <th></th>
              <th>品名</th>
              <th>數量</th>
              <th>單價</th>
            </thead>
            <tbody>
              <tr v-for="item in cartsReverse " :key="item.id">
                <td class="align-middle">
                  <button type="button" class="btn btn-outline-danger btn-sm" @click="deleteItem(item.id, item.qty, item.product.unit, item.product.title)">
                    <i class="far fa-trash-alt"></i>
                  </button>
                </td>
                <td class="align-middle">{{ item.product.title }}
                  <div class="text-success" v-if="item.coupon">已套用優惠卷</div>
                </td>
                <td class="align-middle">
                  <button class="calc btn btn-outline-secondary" @click="this.alertMessage('此功能尚未完成')"><i class="fas fa-chevron-up"></i></button>
                  {{ item.qty }}{{ item.product.unit }}
                  <button class="calc btn btn-outline-secondary" @click="this.alertMessage('此功能尚未完成')"><i class="fas fa-chevron-down"></i></button>
                </td>
                <td class="align-middle">{{ item.total }}
                  <div class="text-success" v-if="item.coupon">{{ Math.round(item.final_total) }}</div>
                </td>
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
          <div class="input-group container">
            <input type="text" class="form-control" v-model="coupon_code" placeholder="請輸入優惠碼">
            <button class="btn btn-secondary" type="button" @click="addCouponCode">套用優惠碼</button>
          </div>
        </div>
        <div class="fs-4 mt-5" v-else>目前購物車是空的~~</div>
      </div>
    </div>
    <hr/>
    <div class="row my-5">
      <Form class="row g-2 col-lg-6 mx-auto" @submit="createOrder">
        <div>
          <label for="useremail">Email</label>
          <Field class="form-control" placeholder="請輸入信箱" name="email" rules="email" v-model="form.user.email" />
          <ErrorMessage class="text-danger" name="email"/>
        </div>
        <div>
          <label for="useremail">收件人姓名</label>
          <Field class="form-control" placeholder="請輸入姓名" name="name" rules="name" v-model="form.user.name"/>
          <ErrorMessage class="text-danger" name="name"/>
        </div>
        <div>
          <label for="useremail">收件人電話</label>
          <Field class="form-control" placeholder="請輸入電話" name="tel" rules="tel" v-model="form.user.tel"/>
          <ErrorMessage class="text-danger" name="tel"/>
        </div>
        <div>
          <label for="useremail">收件人地址</label>
          <Field class="form-control" placeholder="請輸入地址" name="add" rules="address" v-model="form.user.address"/>
          <ErrorMessage class="text-danger" name="add"/>
        </div>
        <div>
          <label for="useremail">備註</label>
          <textarea name="" id="comment" class="form-control" cols="30" rows="5" v-model="form.message"></textarea>
        </div>
        <div class="form-group d-flex justify-content-around">
          <!-- <Field type="radio" name="pay_way" role="pay_way" value="貨到付款" />貨到付款
          <Field type="radio" name="pay_way" role="pay_way" value="線上支付" />線上支付 -->
          <label for=""><input type="radio" name="pay_way">&ensp;貨到付款</label>
          <label for=""><input type="radio" name="pay_way">&ensp;線上支付</label>
        </div>
        <div>
          <button class="btn btn-danger mt-1">送出訂單</button>
        </div>
      </Form>
    </div>
    <!-- Modal-刪除產品 -->
    <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="deleteModalLabel"><i class="fas fa-trash-alt"></i>&ensp;刪除產品</h5>
          </div>
          <div class="modal-body row g-3">
            <div class="col-12">
              確定要 <strong class="text-danger">刪除所有商品</strong> (刪除後將無法恢復)。
            </div>
            <div class="col-12">
              <button type="button" class="btn btn-outline-secondary me-1" data-bs-dismiss="modal">取消</button>
              <button type="button" class="btn btn-danger ms-1" data-bs-dismiss="modal" @click="clearCart">確認刪除</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { Field, Form, ErrorMessage } from 'vee-validate'

export default {
  data () {
    return {
      coupon_code: '',
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      }
    }
  },
  components: {
    Field,
    Form,
    ErrorMessage
  },
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
        this.alertMessage('清空購物車')
        this.getCart()
      })
    },
    // 優惠碼
    addCouponCode () {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/coupon`
      const vm = this
      const coupon = {
        code: vm.coupon_code
      }
      this.axios.post(api, { data: coupon }).then(res => {
        this.alertMessage(`${res.data.message}`)
        vm.getCart()
      })
    },
    // 訂單
    createOrder () {
      this.updateLoading(true)
      if (!this.carts.carts) {
        this.updateLoading(false)
        return
      }
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order`
      const vm = this
      const order = vm.form
      vm.axios.post(api, { data: order }).then(res => {
        this.alertMessage('目前購物車是空的唷')
        this.updateLoading(false)
        if (res.data.success) {
          this.alertMessage('訂單已送出')
          vm.$router.push(`/check/${res.data.orderId}`)
        }
      })
    },
    currency (num) {
      const n = Number(num)
      return `$${n.toFixed(0).replace(/./g, (c, i, a) => {
        const currency = (i && c !== '.' && ((a.length - i) % 3 === 0) ? `, ${c}`.replace(/\s/g, '') : c)
        return currency
      })}`
    },
    ...mapActions(['updateLoading', 'getCart', 'deleteCartItem', 'alertMessage'])
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
.calc{
  border: none;
  font-size: 0.5em;
  vertical-align: baseline;
}
</style>
