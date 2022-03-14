import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '麵屋號'
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      title: '麵屋號 | 品牌介紹'
    }
  },
  {
    path: '/shop',
    name: 'Shop',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "shop" */ '../views/Shop.vue'),
    meta: {
      title: '麵屋號 | 網路商城'
    }
  },
  {
    path: '/product/:id',
    name: 'Product',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "product" */ '../views/Product.vue'),
    meta: {
      title: '麵屋號 | 商品'
    }
  },
  {
    path: '/menu',
    name: 'Menu',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "menu" */ '../views/Menu.vue'),
    meta: {
      title: '麵屋號 | 菜單'
    }
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    meta: {
      title: '麵屋號 | 登入'
    }
  },
  {
    path: '/register',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue'),
    meta: {
      title: '麵屋號 | 註冊'
    }
  },
  {
    path: '/cart',
    name: 'Cart',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "cart" */ '../views/Cart.vue'),
    meta: {
      title: '麵屋號 | 購物車'
    }
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import(/* webpackChunkName: "admin" */ '../views/Admin.vue'),
    children: [
      {
        path: '', // 空白代表admin根目錄
        name: 'AdminHome',
        // webpackChunkName: "admin" 子路由打包會放一起，名字一樣
        component: () => import(/* webpackChunkName: "admin" */ '../views/AdminHome.vue'),
        meta: {
          login: true,
          admin: true,
          title: '管理 | 購物網'
        }
      },
      {
        path: 'products',
        name: 'AdminProducts',
        component: () => import(/* webpackChunkName: "admin" */ '../views/AdminProducts.vue'),
        meta: {
          login: true,
          admin: true,
          title: '商品管理 | 購物網'
        }
      },
      {
        path: 'orders',
        name: 'AdminOrders',
        component: () => import(/* webpackChunkName: "admin" */ '../views/AdminOrders.vue'),
        meta: {
          login: true,
          admin: true,
          title: '訂單管理 | 購物網'
        }
      }
    ]
  },
  {
    path: '*',
    name: 'NotFound',
    redirect: '/'
  }
]

const router = new VueRouter({
  routes
})

// 進到每頁之前，路由守衛
router.beforeEach((to, from, next) => {
  const user = store.getters['user/user']
  // 如果去的那頁需要登入，然後沒登入的話，導向登入頁
  if (to.meta.login && !user.isLogin) {
    next('/login')
    // 如果去的那頁需要管理者權限，然後不是管理者的話，導向首頁
  } else if (to.meta.admin && !user.isAdmin) {
    next('/')
  } else {
    // 都不檔，直接過
    next()
  }
})

router.afterEach((to, from) => {
  document.title = to.meta.title
})

export default router
