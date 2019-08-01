export default {
    //商品详情数据
    path:'/itemdetail/:id/:name',
    // component:()=>import('@pages/common/goods-detail'),
    // props:true
    components:{
        detail:()=>import('@pages/common/goods-detail')
    },
    props:{
        detail:true
    },
    children:[
		{
			path:'buy',
			component:()=>import('@pages/common/handler-buy')
		}
	]
}


