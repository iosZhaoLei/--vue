<template>
	<div>
		<div id="cart" class="page">
			<homeHeader/>
			<homeMenu/>
			
			<keep-alive>
				<router-view/>
			</keep-alive>
		</div>
		<router-view name='subpage'/>
	</div>
</template>

<script>
	import homeHeader from '../../components/home/home-header'
	import homeMenu from '../../components/home/home-menu'
	
	export default {
		components:{
			homeHeader,
			homeMenu
		}
	}
</script>

<style lang="scss" scoped>
	.home-content {
		width: 100%;
		position: absolute;
		top: 74px;
		left: 0;
		bottom: 0px;
	}
</style>
