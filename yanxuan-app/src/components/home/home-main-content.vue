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

		<div class="icon-list">
			<div class="icon" v-for="item in iconlist" :key="item.text" @click="getCateListPage(item.text)">
				<!-- <a href=""> -->
					<img :src="item.picUrl" alt="">
					<p>{{item.text}}</p>
				<!-- </a> -->
			</div>
		</div>


		<template v-for="cateData in topcatelist">
			<top-cate-view :key="cateData.titlePicUrl" :data = 'cateData'>

			</top-cate-view>
		</template>
	</scroller>
</template>

<script>
import {mapState} from 'vuex'
import {Swipe,SwipeItem, ContactList} from 'vant'
import TopCateView from './home-top-cate-view'

export default {
	components:{
		[Swipe.name]:Swipe,
		[SwipeItem.name]:SwipeItem,
		[TopCateView.name]:TopCateView
	},
	computed: {
		...mapState({
			bannerlist:state=>state.home.bannerlist,
			policy:state=>state.home.policy,
			iconlist:state=>state.home.iconList,
			topcatelist:state=>state.home.topcatelist,
			menuList:state=>state.home.menuList
		})
	},
	methods: {
		getCateListPage(text) {
			let {id,label} = this.menuList.find((item)=>{
				return item.label == text;
			})
			this.$router.push(`/home/categorylist/${id}/${label}`)
		}
	},
	created(){
		//请求推荐界面的数据
		//轮播图
		this.$store.dispatch('home/getBannerData');
		
		//请求网易严选的协议接口
		this.$store.dispatch('home/getpolicyData');
		
		//请求icon列表数据
		this.$store.dispatch('home/getIconListData');

		//请求推荐底部列表数据
		this.$store.dispatch('home/getTopCateList');
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
	.icon-list {
		.icon {
			float: left;
			width: 20%;
			img {
				width: 80%;
				display: block;
				margin: 0 auto;
			}
			p {
				font-size: 12px;
				line-height: 20px;
				text-align: center;
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
