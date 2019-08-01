<template>
	<div class="page subpage">
		<app-header :title='this.name'/>

		<div class="bottom border-top">
			<van-icon name='service-o'/>
			<div class="buy" @click="buyAction">立即购买</div>
			<div class="join" @click="joinAction">加入购物车</div>
		</div>
	</div>
</template>

<script>
	export default {
		props:['id','name'],
		methods: {
			buyAction(){
				console.log('购买');
			},
			joinAction(){
				console.log('加入购物车');
			}
		},
	}
</script>

<style lang="scss" scoped>
.bottom {
	width: 100%;
	display: flex;
	position: absolute;
	left: 0;
	bottom: 0;
	height: 50px;
	.van-icon {
		width: 80px;
		font-size: 25px;
		line-height: 50px;
		text-align: center;
	}
	.buy {
		flex: 1;
		font-size: 14px;
		line-height: 50px;
		text-align: center;
	}
	.join {
		flex: 1;
		font-size: 14px;
		line-height: 50px;
		text-align: center;
		background: #b4284d;
		color: #fff;
	}
}
</style>

