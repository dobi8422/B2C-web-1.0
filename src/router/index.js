import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/:catchAll(.*)', redirect: '/' }, // 未定義路徑，重定向至Home
  { path: '/', name: 'Home', component: () => import('@/views/Home.vue') },
  { path: '/about', name: 'About', component: () => import('@/views/About.vue') },
  { path: '/login', name: 'Login', component: () => import('@/views/Login.vue') },
  { path: '/product', name: 'Product', component: () => import('@/views/Product.vue') },
  { path: '/promotion', name: 'Promotion', component: () => import('@/views/Promotion.vue') },
  { path: '/cart', name: 'Cart', component: () => import('@/views/CustomerCart.vue') },
  { path: '/check/:orderId', name: 'Check', component: () => import('@/views/CustomerCheck.vue') },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('@/views/manager/Admin.vue'),
    meta: { requiresAuth: true },
    children: [
      { path: '/admin/order', name: 'MOrder', component: () => import('@/views/manager/Order.vue'), meta: { requiresAuth: true } },
      { path: '/admin/product', name: 'MProduct', component: () => import('@/views/manager/Product.vue'), meta: { requiresAuth: true } },
      { path: '/admin/coupon', name: 'Mcoupon', component: () => import('@/views/manager/Coupon.vue'), meta: { requiresAuth: true } },
      { path: 'promotion', name: 'MPromotion', component: () => import('@/views/manager/Promotion.vue'), meta: { requiresAuth: true } }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
