import Vue from 'vue'
import Router from 'vue-router'
//引入项目中5个tab页面对应的路由配置项
import homeRouter from './homeRouter'
import categoRouter from './categoryRouter'
import discoverRouter from './discoverRouter'
import cartRouter from './cartRouter'
import mineRouter from './mineRouter'

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
	//商品详情数据
	{
		path:'/itemdetail/:id/:name',
		component:()=>import('@pages/common/goods-detail'),
		props:true
	},
	//重定向
	{
		path:'/',
		redirect:'/home'
	}
  ]
})
