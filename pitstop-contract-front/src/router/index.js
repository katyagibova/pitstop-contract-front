import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ContractsPage from '../views/ContractsPage.vue'
import AllContractsHistory from '../components/AllContractsHistory'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/contract',
    name: 'ContractsPage',
    component: ContractsPage,
  },
  {
    path: '/contract-history',
    name: 'AllContractsHistory',
    component: AllContractsHistory,
  },
  {
    path: "/contract-details/:contractID",
    name: 'ContractCard',
    component: () => import("@/components/ContractTable/ContractCard"),

    children: [
      {
        path: "",
        name: 'ContractData',
        component: () => import("@/components/ContractTable/ContractCard/ContractData"),
      },
      {
        path: "history",
        name: 'ContractHistory',
        component: () => import("@/components/ContractTable/ContractCard/ContractHistory"),
      },
      {
        path: "documents",
        name: 'ContractDocuments',
        component: () => import("@/components/ContractTable/ContractCard/ContractDocuments"),
      },
      {
        path: "termination",
        name: 'ContractTermination',
        component: () => import("@/components/ContractTable/ContractCard/ContractTermination"),
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
