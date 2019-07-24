<template>
	<scroller class="main">
		<van-swipe :autoplay='3000' indicator-color='white'>
			<van-swipe-item v-for='item in bannerlist' :key='item.id'>
				<img :src="item.picUrl" alt="">
			</van-swipe-item>
		</van-swipe>

		<ul class="policy-list">
			<li class="policy-item" v-for="item in policy" :key='item.desc'>
				<img :src="item.icon" alt="">
				<span>{{item.desc}}</span>
			</li>
		</ul>
	</scroller>
</template>

<script>
import {mapState} from 'vuex'
import {Swipe,SwipeItem} from 'vant'

export default {
	components:{
		[Swipe.name]:Swipe,
		[SwipeItem.name]:SwipeItem,
	},
	computed: {
		...mapState({
			bannerlist:state=>state.home.bannerlist,
			policy:state=>state.home.policy
		})
	},
	created(){
		//请求推荐界面的数据
		//轮播图
		this.$store.dispatch('home/getBannerData');
		
		//请求网易严选的协议接口
		this.$store.dispatch('home/getpolicyData');
	}
}
</script>

<style lang='scss' scoped>
.main {
	.policy-list {
		padding: 6px 2px;
		display: flex;
		background: #ffecdd;
		.policy-item {
			flex:1;
			overflow: hidden;
			img {
				width: 14px;
				height: 14px;
				float: left;
			}
			span {
				font-size: 12px;
				color:#b4282d;	
				line-height: 14px;
				float: left;
			}
		}
	}
}
</style>


<style>
.van-swipe-item img {
	width : 100%;
	display: block;
}
.van-swipe__indicator {
	width: 16px;
    height: 3px;
    border-radius: 0;
}
</style>
