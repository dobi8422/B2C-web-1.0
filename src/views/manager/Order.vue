<template>
  <div>
    <!-- 訂單列表 -->
    <h2 class="text-center mt-3">訂單列表</h2>
    <table class="table mt-4 container">
      <thead class="bg-dark text-light">
        <tr>
          <th>訂貨日期</th>
          <th width="80">姓名</th>
          <th width="80">Email</th>
          <th width="80">電話</th>
          <th>寄送地址</th>
          <th width="100">寄送資料</th>
          <th width="130">訂單資料</th>
          <th width="115">付款方式</th>
          <th width="100">是否付款</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in orderList" :key="item.id">
          <td>{{ dateConversion(item.create_at) }}</td>
          <td>{{ item.user.name }}</td>
          <td>{{ item.user.email }}</td>
          <td>{{ item.user.tel }}</td>
          <td>{{ item.user.address }}</td>
          <td><button class="btn btn-outline-primary btn-sm mr-1" data-bs-toggle="modal" data-bs-target="#orderSenderModal" @click="tempOrder = Object.assign({}, item)">編輯</button></td>
          <td><button class="btn btn-outline-primary btn-sm mr-1" data-bs-toggle="modal" data-bs-target="#orderProductModal" @click="tempOrder = Object.assign({}, item)">訂單內容</button></td>
          <td>{{ item.payment_method }}</td>
          <td><span :class="{'text-success':item.is_paid}">{{ item.is_paid ?  '已付款' : '未付款'}}</span></td>
        </tr>
      </tbody>
    </table>
    <Pagination :pages="pagination" @emitProductPage="getOrder"></Pagination>
    <!-- Modal-收件人資料 -->
    <div class="modal fade" id="orderSenderModal" tabindex="-1" role="dialog" aria-labelledby="orderSenderLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="orderSenderLabel">
              <span>修改訂單</span>
            </h5>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-8 mx-auto">
                <label for="name">訂購姓名</label>
                <input type="text" class="form-control" id="name" v-model="tempOrder.user.name"/>
                <div class="col-md-8 mx-auto">
                  <label for="tel">電話</label>
                  <input type="tel" class="form-control" id="tel" v-model="tempOrder.user.tel"/>
                </div>
                <div class="col-md-8 mx-auto">
                  <label for="address">寄送地址</label>
                  <input type="text" class="form-control" id="address" v-model="tempOrder.user.address"/>
                </div>
                <hr />
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="updateOrder">確認</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal-訂單內容 -->
    <div class="modal fade" id="orderProductModal" tabindex="-1" aria-labelledby="orderProductLabel" aria-hidden="true">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header bg-dark text-light">
            <h5 class="modal-title" id="orderProductLabel">
              <span>訂單內容</span>
            </h5>
          </div>
          <div class="modal-body row g-3">
            <!-- 使用table製作 待處理 -->
            <h5>訂單編號: {{ tempOrder.id }}</h5>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">品名</th>
                  <th scope="col">數量</th>
                  <th scope="col">原價</th>
                  <th scope="col">售價</th>
                  <th scope="col">優惠碼</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in tempOrder.products" :key="item.id">
                  <td>{{ item.product.title }}</td>
                  <td>{{ item.qty }} / {{ item.product.unit }}</td>
                  <td>{{ currency(item.product.price) }}</td>
                  <td v-if="item.final_total">
                    {{ currency(Math.round(item.final_total)) }}
                  </td>
                  <td v-if="item.coupon">{{ item.coupon.title }}</td>
                  <td v-else>無</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="col-md-12">
            <button type="button" class="btn btn-outline-secondary me-1" data-bs-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary ms-1" data-bs-dismiss="modal" @click="updateOrder">確認</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Pagination from '@/components/Pagination'

export default {
  name: 'OrderList',
  data () {
    return {
      orderList: [
        {
          create_at: '',
          is_paid: false,
          products: { product: { final_total: '' }, final_total: '' },
          total: 0,
          user: { address: '', email: '', name: '', tel: '' }
        }
      ],
      tempOrder: {
        final_total: '',
        // coupon: {
        //   code: ''
        // },
        products: [],
        user: {}
      },
      products: [],
      pagination: {},
      deletearray: ''
    }
  },
  components: {
    Pagination
  },
  methods: {
    getOrder (page = 1) {
      const api = `https:vue-course-api.hexschool.io/api/zxz189/orders?page=${page}`
      this.updateLoading(true)
      this.axios.get(api).then(res => {
        this.orderList = res.data.orders
        this.pagination = res.data.pagination
        this.updateLoading(false)
      })
    },
    updateOrder () {
      const api = `https:vue-course-api.hexschool.io/api/zxz189/admin/order/${this.tempOrder.id}`
      this.axios.put(api, { data: this.tempOrder }).then(res => {
        if (res.data.success) {
          this.alertMessage('成功修改')
          this.getOrder()
        } else {
          this.alertMessage('修改失敗')
        }
      })
    },
    dateConversion (num) {
      const date = new Date(num)
      return `${date.getFullYear()}-${(date.getMonth() + 1)}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`
    },
    currency (num) {
      const n = Number(num)
      return `$${n.toFixed(0).replace(/./g, (c, i, a) => {
        const currency = (i && c !== '.' && ((a.length - i) % 3 === 0) ? `, ${c}`.replace(/\s/g, '') : c)
        return currency
      })}`
    },
    ...mapActions(['updateLoading', 'alertMessage'])
  },
  created () {
    this.getOrder()
  }
}
</script>
