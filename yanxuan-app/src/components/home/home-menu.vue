<template>
	<div class="home-menu-wrap">
		<nav class="home-menu">
			<li v-for='item in menuList' :key='item.id'>
				{{item.name}}
			</li>
		</nav>
	</div>
</template>

<script>

import {mapState} from 'vuex'

export default {
	computed: {
		...mapState({
			menuList:state=>state.home.menuList
		})
	},
	created(){
		//获取数据
		this.$store.dispatch('home/getMenuData')
	}
}
</script>

<style lang="scss" scoped>
	.home-menu-wrap {
		width: 100%;
		height: 30px;
		background: yellow;
		position: absolute;
		left: 0;
		top: 44px;
		
		li {
			float: left;
		}
	}
	
</style>
