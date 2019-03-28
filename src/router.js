// 导入路由
import Vue from 'vue'
//这两步不可缺少！！！！
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//导入组件
import index from './components/index.vue'
import cart from './components/cart.vue'
import detail from './components/detail.vue'
import userContainer from './components/userContainer.vue'
import userIndex from './components/userIndex.vue'
import userOrder from './components/userOrder.vue'
import userDetail from './components/userDetail.vue'
import usermound from './components/usermound.vue'




//规则
let routes=[
  {
    path:'/',
    component:index
  },
  {
    path:'/index',
    component:index
  },
  {
    path:'/cart',
    component:cart
  },
  {
    path:'/detail/:id',
    naem:detail,
    component:detail
  },
  {
    path:'/user',
    naem:userContainer,
    component:userContainer,
    children:[
      {
        path:'Index',
        component:userIndex
      },
      {
        path:'Order',
        component:userOrder
      },
      {
        path:'Detail',
        component:userDetail
      },
      {
        path:'mound',
        component:usermound
      }
    ]
  }
]
//实例化路由对象
let router=new VueRouter({
  routes
})

//暴露出去 ！！！
export default router
