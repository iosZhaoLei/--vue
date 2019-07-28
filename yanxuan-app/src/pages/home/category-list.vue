<template>
<div class="page subpage">
	<header class="sub-header boder-bottom">
		<van-icon name='arrow-left' @click="backAction"></van-icon>
		<h1 class="title">{{name}}</h1>
	</header>
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
			console.log(this.id)
			console.log(this.name)
		}
	}
	
</script>

<style lang="scss" scoped>
.sub-header {
	width: 100%;
	height: 44px;
	.title {
		width: 100%;
		height: 100%;
		text-align: center;
		line-height: 44px;
		font-size: 16px;
		font-weight: bold;
		color: #333;
	}
	.van-icon {
		position: absolute;
		top: 0;
		left: 0;
		padding: 13px;
	}

}
.cate-content {
	position: absolute;
	top: 44px;
	bottom: 0;
	left: 0;
	width: 100%;
	overflow: hidden;
}
</style>

