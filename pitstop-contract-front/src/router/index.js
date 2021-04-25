import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ContractTable from '../components/ContractTable.vue'
import ContractArchive from '../components/ContractArchive.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/contract',
    name: 'Home',
    component: Home,
    children: [
      {
        path: "/search",
        component: ContractTable,
      },
      {
        path: "/archive",
        component: ContractArchive,
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
