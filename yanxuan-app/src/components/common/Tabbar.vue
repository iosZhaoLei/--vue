<template>
	<nav class="tab-bar border-top">
		<template v-for="tabItem in tabList">
			<router-link :key='tabItem.path' :to='tabItem.path' class='tab-item'>
				<span class="icon"></span>
				<span class="text">{{tabItem.name}}</span>
			</router-link>
		</template>
	</nav>
</template>

<script>
	export default {
		data(){
			return {
				tabList : [
					{name:'首页',path:'/home'},
					{name:'分类',path:'/category'},
					{name:'识物',path:'/discover'},
					{name:'购物车',path:'/cart'},
					{name:'我的',path:'/mine'}
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.tab-bar {
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 49px;
		display: flex;
		
		.tab-item {
			flex:1;
			padding-top: 4px;
			
			&.router-link-active .text{
				color: #e43929;
			}
			
			span {
				display: block;
				&.icon {
					width: 20px;
					height: 20px;
					margin: 0 auto;
					background-size: 100%;
					background-image: url(/images/tabs.png);
					background-repeat: no-repeat;
				}
				&.text {
					padding-top: 2px;
					font-size: 12px;
					color: #333;
					text-align: center;
				}
			}
		}
	}
	
	.tab-item:nth-of-type(1) {
		.icon {
			background-position: 0 -122.5px;
		}
	}
	.tab-item:nth-of-type(1).router-link-active {
		.icon {
			background-position: 0 -98px;
		}
	}
	
	.tab-item:nth-of-type(2) {
		.icon {
			background-position: 0 -73.5px;
		}
	}
	.tab-item:nth-of-type(2).router-link-active {
		.icon {
			background-position: 0 -49px;
		}
	}
	
	.tab-item:nth-of-type(3) {
		.icon {
			background-position: 0 -171.5px;
		}
	}
	.tab-item:nth-of-type(3).router-link-active {
		.icon {
			background-position: 0 -147px;
		}
	}
	
	.tab-item:nth-of-type(4) {
		.icon {
			background-position: 0 -24.5px;
		}
	}
	.tab-item:nth-of-type(4).router-link-active {
		.icon {
			background-position: 0 0px;
		}
	}
	
	.tab-item:nth-of-type(5) {
		.icon {
			background-position: 0 -220.5px;
		}
	}
	.tab-item:nth-of-type(5).router-link-active {
		.icon {
			background-position: 0 -196px;
		}
	}
	
</style>
