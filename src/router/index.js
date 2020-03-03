import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/Index.vue'
import Sort from '@/views/Sort.vue'
import Cart from '@/views/ShopCart.vue'
import Personal from '@/views/Personal.vue'
import Search from '@/views/Search.vue'
import More from '@/views/More.vue'
import Detailed from '@/views/Detailed.vue'
import Order from '@/views/Order.vue'
import Promo from '@/views/Promotion.vue'
import Collect from '@/views/Collect.vue'
import AddressInfo from '@/views/AddressInfo.vue'
import Addnew from '@/views/Addnew.vue'
import Buying from '@/views/BuyingDetailed.vue'
import Account from '@/views/Account.vue'
import AddShopCart from '@/views/AddShopCart.vue'
import Member from '@/views/Member.vue'
import Coupon from '@/views/Coupon.vue'
import Osp from '@/views/OrderShipped.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Index
  },
  {
    path: '/Sort',
    component: Sort,
  },
  {
    path: '/Cart',
    component: Cart
  },
  {
    path: '/Personal',
    component: Personal
  },
  {
    path: '/Search',
    component: Search
  }, 
  {
    path: '/More',
    component: More
  }, 
  {
    path: '/Detailed',
    component: Detailed
  }, 
  {
    path: '/Order',
    component: Order
  },
  {
    path: '/Promo',
    component: Promo
  },
  {
    path: '/Collect',
    component: Collect
  },
  {
    path: '/AddressInfo',
    component: AddressInfo
  },
  {
    path: '/Addnew',
    component: Addnew
  },
  {
    path: '/Buying',
    component: Buying
  },
  {
    path: '/Account',
    component: Account
  },
  {
    path: '/AddShopCart',
    component: AddShopCart
  },
  {
    path: '/Member',
    component: Member
  },
  {
    path: '/Coupon',
    component: Coupon
  },
  {
    path: '/Osp',
    component: Osp
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,              
  routes
})

export default router
