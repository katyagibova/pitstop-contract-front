import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/contract',
    name: 'Home',
    component: Home,
  },
  {
    path: "/contract-details/:contractID",
    component: () => import("@/components/ContractTable/ContractCard"),

    children: [
      {
        path: "/",
        component: () => import("@/components/ContractTable/ContractCard/ContractData"),
      },
      // {
      //   path: "/history",
      //   component: () => import("@/components/ProductDetails/Warehouses"),
      // },
      // {
      //   path: "/documents",
      //   component: () => import("@/components/ProductDetails/Log"),
      // },
      // {
      //   path: "/termination",
      //   component: () => import("@/components/ProductDetails/Vendors"),
      // },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
