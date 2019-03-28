import Vue from 'vue'
import App from './App.vue'
// import style from './assets/site/css/style.css'
import './assets/site/css/style.css'
//饿了么ui导入
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 导入axios 抽取全局
//这样其他的页面需要axios就不需要引入了，直接this.$axios使用
import axios from 'axios';
Vue.prototype.$axios=axios;

//抽取基地址 全局
axios.defaults.baseURL='http://111.230.232.110:8899'//设置地址

//抽取全局过滤器，需要在Vue实例之前
//导入moment 格式化日期
import moment from'moment';
Vue.filter('globalFormatTime',function(value,fmtTemplate) { //如果传参 就用传递的模板
      if(fmtTemplate){
          return moment(value).format(fmtTemplate) //例如'YYYY年MM月DD日'
      }else{
        return moment(value).format('YYYY-MM-DD')
      }
  })


// 导入路由
//这两步不可缺少！！！！
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//导入组件
import index from './components/index.vue'
import cart from './components/cart.vue'
import detail from './components/detail.vue'
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
  }
]
//实例化路由对象
let router=new VueRouter({
  routes
})


Vue.config.productionTip = false



//设置到顶级对象中路由
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
