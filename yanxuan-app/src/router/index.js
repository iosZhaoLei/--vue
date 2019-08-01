import Vue from 'vue'
import Router from 'vue-router'
//引入项目中5个tab页面对应的路由配置项
import homeRouter from './homeRouter'
import categoRouter from './categoryRouter'
import discoverRouter from './discoverRouter'
import cartRouter from './cartRouter'
import mineRouter from './mineRouter'
import goodRoute from './goodRoute'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    homeRouter,
	categoRouter,
	discoverRouter,
	cartRouter,
	mineRouter,
	goodRoute,
	{
		path:'/login',
		component:()=>import('@pages/common/login')
	},
	//重定向
	{
		path:'/',
		redirect:'/home'
	}
  ]
})
