<template>
<div class="page subpage">
	<app-header :title="name"></app-header>
	<home-menu-content class="cate-content" :id='id' :name='name'/>
</div>
</template>

<script>
import menuContent from '@components/home/home-menu-content'
	export default {
		props:['id','name'],
		components:{
			'home-menu-content' : menuContent
		},
		methods: {
			backAction(){
				this.$router.back();
			}
		},
		created() {
			
		}
	}
	
</script>

<style lang="scss" scoped>
.cate-content {
	position: absolute;
	top: 44px;
	bottom: 0;
	left: 0;
	width: 100%;
	overflow: hidden;
}
</style>

