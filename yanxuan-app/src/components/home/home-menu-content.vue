<template>
	<scroller class="menu">
		<div class="banner">
			<img :src="categoryBanner" alt="">
		</div>

		<div class="categroy-list" 
			v-for="item in categoryList" 
			:key="item.info.title">
			<h3>{{item.info.title}}</h3>
			<h6>{{item.info.subTitle}}</h6>

			<item-list :list='item.items'></item-list>
		</div>
	</scroller>	
</template>

<script>
import {mapState} from 'vuex'
	export default {
		props:['id','name'],
		computed: {
			...mapState({
				categoryBanner:state=>state.home.categoryBanner,
				categoryList:state=>state.home.categoryList
			})
		},
		watch: {
			id:{
				//每一次id变化 重新请求分类列表数据
				handler(newVal){
					newVal && this.$store.dispatch('home/getCategoryList',newVal);
				},
				//自己执行一次
				immediate:true
			}
		},
		created() {
			
		}
	}
</script>

<style lang='scss' scoped>
.menu {
	.banner img {
		width: 100%;
		display: block;
	}
}
.categroy-list {
	border-top: 5px solid #fdfdfd;
	h3 {
		text-align: center;
		color:#333;
		font-size: 16px;
		line-height: 28px;
	}
	h6 {
		text-align: center;
		color: #999;
		font-size: 12px;
	}
}
</style>

