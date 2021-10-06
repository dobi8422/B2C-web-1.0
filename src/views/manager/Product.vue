<template>
  <div>
    <div class="d-flex justify-content-around mx-5">
      <div></div>
      <h2 class="text-center mt-3">產品列表</h2>
      <button class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#productModal" @click="isNew = true, tempProduct = {}">新增產品</button>
    </div>
    <table class="table mt-4 container">
      <thead class="bg-dark text-light">
        <tr>
          <th width="50">啟用</th>
          <th width="120">產品名稱</th>
          <th width="60">分類</th>
          <th width="60">售價</th>
          <th class="text-muted" width="60">原價</th>
          <th width="30">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td>
            <input class="form-check-input" @click="tempProduct = Object.assign({}, item), enableProduct()" type="checkbox" v-model="item.is_enabled" :true-value="1" :false-value="0" id="is_enabled">
          </td>
          <td>{{ item.title }}</td>
          <td>{{ item.category }}</td>
          <td class="text-right">
            {{ currency(item.price) }}
          </td>
          <td class="text-right text-muted">
            {{ currency(item.origin_price) }}
          </td>
          <td>
            <div class="d-flex justify-content-center">
              <button class="btn btn-outline-primary btn-sm me-1" data-bs-toggle="modal" data-bs-target="#productModal" @click="tempProduct = Object.assign({}, item), isNew = false">編輯</button>
              <button class="btn btn-outline-danger btn-sm" data-bs-toggle="modal" data-bs-target="#deleteModal" @click="tempProduct = Object.assign({}, item)">刪除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <Pagination :pages="pagination" @emitProductPage="getProducts"></Pagination>
    <!-- Modal-新增/編輯產品 -->
    <div class="modal fade" id="productModal" tabindex="-1" aria-labelledby="productModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-dark text-light">
            <h5 class="modal-title" id="productModalLabel">
              <i class="fas fa-cog"></i>&ensp;{{ isNew ? '新增產品' : '編輯產品' }}
            </h5>
            <div class="form-check">
              <label class="form-check-label" for="is_enabled">啟用</label>
              <input class="form-check-input" type="checkbox" v-model="tempProduct.is_enabled" :true-value="1" :false-value="0" id="is_enabled">
            </div>
          </div>
          <div class="modal-body row g-3">
            <div class="col-sm-5">
              <label>圖片網址 or 上傳圖片</label>
              <input type="text" class="form-control" id="image" placeholder="請輸入圖片連結" v-model="tempProduct.imageUrl">
              <input type="file" id="customFile" class="form-control mt-2" ref="files" @change="uploadFile">
              <img img="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=1350&q=80"
                class="img-fluid mt-2" alt="" v-if="!status.fileUploading" :src="tempProduct.imageUrl">
              <div class="spinner-border my-5" role="status" v-if="status.fileUploading">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
            <div class="col-sm-7">
              <div class="row g-2">
                <div class="col-md-12">
                  <label>標題</label>
                  <input type="text" class="form-control" id="title" placeholder="請輸入標題" v-model="tempProduct.title">
                </div>
                <div class="col-md-6">
                  <label>分類</label>
                  <select class="form-control" id="category" v-model="tempProduct.category">
                    <option value="巧克力">巧克力</option>
                    <option value="乳酪愛好者">乳酪愛好者</option>
                    <option value="慶生系列">慶生系列</option>
                    <option value="卡通造型">卡通造型</option>
                    <option value="小點心">小點心</option>
                  </select>
                </div>
                <div class="col-md-6">
                  <label for="price">單位</label>
                  <input type="unit" class="form-control" id="unit" placeholder="請輸入單位" v-model="tempProduct.unit">
                </div>
                <div class="form-group col-md-6">
                  <label for="price">售價</label>
                  <input type="number" class="form-control" id="price" placeholder="請輸入售價" v-model="tempProduct.price">
                </div>
                <div class="form-group col-md-6">
                <label for="origin_price" class="text-muted">原價</label>
                  <input type="number" class="form-control text-muted" id="origin_price" placeholder="請輸入原價" v-model="tempProduct.origin_price">
                </div>
              </div>
            </div>
            <div class="col-md-12 row g-1 px-2">
              <label for="description">產品介紹</label>
              <textarea type="text" class="form-control" style="resize: none; height: 80px" id="description" placeholder="請輸入產品描述" v-model="tempProduct.description"></textarea>
              <label for="content">注意事項</label>
              <textarea type="text" class="form-control" style="resize: none; height: 80px" id="content" placeholder="請輸入產品說明內容" v-model="tempProduct.content"></textarea>
            </div>
            <div class="col-md-12">
              <button type="button" class="btn btn-outline-secondary me-1" data-bs-dismiss="modal">取消</button>
              <button type="button" class="btn btn-primary ms-1" data-bs-dismiss="modal" @click="updateProduct">{{ isNew ? '新增' : '編輯' }}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal-刪除產品 -->
    <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-dark text-light">
            <h5 class="modal-title" id="deleteModalLabel"><i class="fas fa-trash-alt"></i>&ensp;刪除產品</h5>
          </div>
          <div class="modal-body row g-3">
            <div class="col-12">
              是否刪除 <strong class="text-danger">{{ tempProduct.title }}</strong> 商品 (刪除後將無法恢復)。
            </div>
            <div class="col-12">
              <button type="button" class="btn btn-outline-secondary me-1" data-bs-dismiss="modal">取消</button>
              <button type="button" class="btn btn-danger ms-1" data-bs-dismiss="modal" @click="deleteProduct">確認刪除</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Pagination from '@/components/Pagination'

export default {
  data () {
    return {
      tempProduct: {},
      isNew: false,
      status: {
        fileUploading: false
      },
      action: ''
    }
  },
  components: {
    Pagination
  },
  methods: {
    getProducts (page = 1) {
      this.getProducts(page)
    },
    updateProduct () {
      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product`
      let httpMethod = 'post'
      if (!this.isNew) {
        api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${this.tempProduct.id}`
        httpMethod = 'put'
        this.action = '編輯'
      } else {
        this.action = '新增'
      }
      this.axios[httpMethod](api, { data: this.tempProduct }).then(res => {
        if (res.data.success) {
          this.alertMessage(`產品${this.action}成功`)
          this.getProducts()
          this.tempProduct = {}
        } else {
          this.alertMessage(`產品${this.action}失敗`)
        }
      })
    },
    deleteProduct () {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${this.tempProduct.id}`
      this.action = '刪除'
      this.axios.delete(api).then(res => {
        if (res.data.success) {
          this.alertMessage(`成功${this.action}產品：${this.tempProduct.title}`)
          this.getProducts()
        } else {
          this.alertMessage(`產品${this.action}失敗`)
        }
      })
    },
    enableProduct () {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${this.tempProduct.id}`
      if (this.tempProduct.is_enabled === 0) {
        this.action = '啟用'
        this.tempProduct.is_enabled = 1
      } else {
        this.action = '停用'
        this.tempProduct.is_enabled = 0
      }
      this.axios.put(api, { data: this.tempProduct }).then(res => {
        if (res.data.success) {
          this.getProducts()
          this.alertMessage(`產品${this.action}成功`)
        } else {
          this.alertMessage(`產品${this.action}失敗`)
        }
      })
    },
    uploadFile () {
      const uploadedFile = this.$refs.files.files[0]
      const formData = new FormData()
      formData.append('file-to-upload', uploadedFile)
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/upload`
      this.status.fileUploading = true
      this.axios.post(url, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      }).then(res => {
        this.status.fileUploading = false
        if (res.data.success) {
          this.tempProduct.imageUrl = res.data.imageUrl
        } else {
          this.alertMessage(`${res.data}`)
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
    ...mapActions(['updateLoading', 'getProducts', 'alertMessage'])
  },
  computed: {
    ...mapGetters(['products', 'pagination'])
  },
  created () {
    this.getProducts()
  }
}
</script>
