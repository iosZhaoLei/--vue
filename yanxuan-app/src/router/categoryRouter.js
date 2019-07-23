export default {
	path:'/category',
	component:()=>import('@pages/category/index'),
	children:[
		{
			path:'group/:id/:index',
			component:()=>import('@pages/category/category-group'),
			props:true
		}
	]
}