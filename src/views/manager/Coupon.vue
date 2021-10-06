<template>
  <div>
    <div class="d-flex justify-content-around mx-5">
      <div></div>
      <h2 class="text-center mt-3">優惠卷</h2>
      <button class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#couponModal" @click="isNew = true, tempCoupon = {}">新增優惠卷</button>
    </div>
    <div class="d-flex justify-content-end mx-5">
    </div>
    <table class="table mt-4 container">
      <thead class="bg-dark text-light">
        <tr>
          <th width="50">啟用</th>
          <th width="120">優惠卷名稱</th>
          <th width="60">到期日</th>
          <th width="60">折扣(%)</th>
          <th width="60">折扣碼</th>
          <th width="30">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in coupons" :key="item.code">
          <td>
            <input class="form-check-input" @click="tempCoupon = Object.assign({}, item), enableCoupon()" type="checkbox" v-model="item.is_enabled" :true-value="1" :false-value="0" id="is_enabled">
          </td>
          <td>{{ item.title }}</td>
          <td>{{ item.due_date }}</td>
          <td>{{ item.percent }}</td>
          <td>{{ item.code }}</td>
          <td>
            <div class="d-flex justify-content-center">
              <button class="btn btn-outline-primary btn-sm me-1" data-bs-toggle="modal" data-bs-target="#couponModal" @click="tempCoupon = Object.assign({}, item), isNew = false">編輯</button>
              <button class="btn btn-outline-danger btn-sm" data-bs-toggle="modal" data-bs-target="#deleteModal" @click="tempCoupon = Object.assign({}, item), couponId = item.id">刪除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <Pagination :pages="pagination" @emitProductPage="getCoupons"></Pagination>
    <!-- Modal-新增/編輯優惠卷 -->
    <div class="modal fade" id="couponModal" tabindex="-1" aria-labelledby="couponModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-dark text-light">
            <h5 class="modal-title" id="couponModalLabel">
              <i class="fas fa-gift"></i>&ensp;{{ isNew ? '新增優惠卷' : '編輯優惠卷' }}
            </h5>
            <div class="form-check">
              <label class="form-check-label" for="is_enabled">啟用</label>
              <input class="form-check-input" type="checkbox" v-model="tempCoupon.is_enabled" :true-value="1" :false-value="0" id="is_enabled">
            </div>
          </div>
          <div class="modal-body">
            <div class="row g-3">
                <div class="form-group col-md-6">
                  <label for="title">優惠券名稱</label>
                  <input type="text" class="form-control" id="title" placeholder="請輸入標題" v-model="tempCoupon.title">
                </div>
                <div class="form-group col-md-6">
                  <label for="date">到期日</label>
                  <input type="date" class="form-control" id="date" placeholder="請輸入到期日" v-model="tempCoupon.due_date">
                </div>
                <div class="form-group col-md-6">
                  <label for="percent">折扣百分比 <span class="text-muted">(80% -> 輸入 80)</span></label>
                  <input type="text" class="form-control" id="percent" placeholder="請輸入折扣百分比" v-model="tempCoupon.percent">
                </div>
                <div class="form-group col-md-6">
                  <label for="折扣碼">折扣碼</label>
                  <input type="text" class="form-control" id="折扣碼" placeholder="請輸入折扣碼" v-model="tempCoupon.code">
                </div>
              <div class="col-md-12">
                <button type="button" class="btn btn-outline-secondary me-1" data-bs-dismiss="modal">取消</button>
                <button type="button" class="btn btn-primary ms-1" data-bs-dismiss="modal" @click="updateCoupon">{{ isNew ? '新增' : '編輯' }}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal-刪除優惠卷 -->
    <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-dark text-light">
            <h5 class="modal-title" id="deleteModalLabel"><i class="fas fa-trash-alt"></i>&ensp;刪除優惠卷</h5>
          </div>
          <div class="modal-body row g-3">
            <div class="col-12">
              是否刪除 <strong class="text-danger">{{ tempCoupon.title }}</strong> 優惠卷 (刪除後將無法恢復)。
            </div>
            <div class="col-12">
              <button type="button" class="btn btn-outline-secondary me-1" data-bs-dismiss="modal">取消</button>
              <button type="button" class="btn btn-danger ms-1" data-bs-dismiss="modal" @click="deleteCoupon">確認刪除</button>
            </div>
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
  name: 'coupon',
  data () {
    return {
      coupons: {},
      pagination: {},
      tempCoupon: {},
      isNew: false,
      couponId: '',
      action: ''
    }
  },
  components: {
    Pagination
  },
  methods: {
    updateCoupon () {
      let api = 'https:vue-course-api.hexschool.io/api/zxz189/admin/coupon'
      let httpMethod = 'post'
      if (!this.isNew) {
        api = `https:vue-course-api.hexschool.io/api/zxz189/admin/coupon/${this.tempCoupon.id}`
        httpMethod = 'put'
        this.action = '編輯'
      } else {
        this.action = '新增'
      }
      this.checkCoupon()
      this.axios[httpMethod](api, { data: this.tempCoupon }).then(res => {
        if (res.data.success) {
          this.getCoupons()
          this.alertMessage(`優惠卷${this.action}成功`)
        } else {
          this.alertMessage(`優惠卷${this.action}失敗`)
        }
      })
    },
    deleteCoupon () {
      const api = `https:vue-course-api.hexschool.io/api/zxz189/admin/coupon/${this.couponId}`
      this.axios.delete(api).then(res => {
        if (res.data.success) {
          this.getCoupons()
          this.alertMessage(`成功刪除優惠卷：${this.tempCoupon.title}`)
        } else {
          this.alertMessage('刪除優惠卷失敗')
        }
      })
    },
    enableCoupon () {
      const api = `https:vue-course-api.hexschool.io/api/zxz189/admin/coupon/${this.tempCoupon.id}`
      if (this.tempCoupon.is_enabled === 0) {
        this.action = '啟用'
        this.tempCoupon.is_enabled = 1
        this.tempCoupon.is_enable = 1
      } else {
        this.action = '停用'
        this.tempCoupon.is_enabled = 0
        this.tempCoupon.is_enable = 0
      }
      this.axios.put(api, { data: this.tempCoupon }).then(res => {
        if (res.data.success) {
          this.getCoupons()
          this.alertMessage(`優惠卷${this.action}成功`)
        } else {
          this.alertMessage(`優惠卷${this.action}失敗`)
        }
      })
    },
    checkCoupon () {
      const filterCoupon = this.coupons.some(item => {
        return this.tempCoupon.code === item.code && this.tempCoupon.id !== item.id
      })
      if (filterCoupon) {
        alert('此優惠碼已存在，請更換')
        throw new Error()
      }
    },
    getCoupons (page = 1) {
      this.tempCoupon = {}
      const api = `https:vue-course-api.hexschool.io/api/zxz189/admin/coupons?page=${page}`
      this.updateLoading(true)
      this.axios.get(api).then(res => {
        this.coupons = res.data.coupons
        this.pagination = res.data.pagination
        this.updateLoading(false)
      })
    },
    ...mapActions(['updateLoading', 'alertMessage'])
  },
  created () {
    this.getCoupons()
  }
}
</script>
