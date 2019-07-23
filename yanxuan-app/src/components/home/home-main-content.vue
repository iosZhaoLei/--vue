<template>
	<div class="home-content">
		<!-- <ul>
			<li v-for = 'item in bannerlist' :key='item.id'>
				<img :src="item.picUrl" alt="" width="100%">
			</li>
		</ul> -->
	</div>
</template>

<script>
import {mapState} from 'vuex'

export default {
	computed: {
		...mapState({
			bannerlist:state=>state.home.bannerlist
		})
	},
	created(){
		//请求推荐界面的数据
		//轮播图
		this.$store.dispatch('home/getBannerData');
	}
}
</script>

<style>

</style>
