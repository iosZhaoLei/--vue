export default {
	path:'/home',
	component:()=>import('@pages/home/index'),
	children:[
		{
			alias:'',
			path:'main',
			component:()=>import('@components/home/home-main-content')
		},
		{
			path:'menu/:id/:name',
			component:()=>import('@components/home/home-menu-content'),
			props:true
		},
		{
			path:'categorylist/:id/:name',
			components:{
				'default':()=>import('@components/home/home-main-content'),		//没名字时显示的页面（右滑进入界面会造成白界面）
				'subpage':()=>import('@pages/home/category-list')
			},	
			props:{
				subpage:true
				// default:true
			}
		}
	]
}