<template>
	<div class="home-menu-wrap">
		<ly-tab
			v-if='menuList.length>1'
			v-model='selectedIndex'
			:items='menuList'
			:options='options'>
		</ly-tab>
		<div class="control" @click='showAction'>
			<span class="box"></span>
			<van-icon name='arrow-down' :class='{active : isShow}'></van-icon>
		</div>
		<van-popup v-model='isShow'></van-popup>
		<div v-show="isShow" class="wrap border-top">
			<div class="title">全部频道</div>
			<ul class="menu-list">
				<li v-for='(item,index) in menuList' class="menu-item" 
				:class="{active:selectedIndex==index}" 
				@click="selectAction(index)" :key='item.id'>
					{{item.label}}
				</li>
			</ul>
		</div>
	</div>
</template>

<script>

import {mapState} from 'vuex'
import LyTab from 'ly-tab'
import {Popup} from 'vant'

export default {
	data () {
		return {
			isShow:false,
			selectedIndex: 0,
			options: {
				activeColor: '#b4282d'
				// 可在这里指定labelKey为你数据里文字对应的字段
			},
		}
	},
	components:{
		'ly-tab':LyTab.LyTab,
		[Popup.name]:Popup
	},
	computed: {
		...mapState({
			menuList:state=>state.home.menuList
		})
	},
	watch: {
		selectedIndex (newVal){
			if (newVal == 0) {
				this.$router.push('/home/main')
			}else {
				let {id,label} = this.menuList[newVal];
				this.$router.push(`/home/menu/${id}/${label}`)
			}
		}
	},
	methods: {
		//控制遮罩层菜单栏的显示
		showAction() {
			this.isShow = !this.isShow;
		},
		selectAction(index) {
			this.selectedIndex = index;
			this.showAction();
		}
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
		position: absolute;
		left: 0;
		top: 44px;

		.control {
			position: absolute;
			top:0;
			right: 0;
			width: 40px;
			height: 100%;
			background: #fff;
			z-index: 3001;
			.van-icon {
				width: 40px;
				line-height: 26px;
				text-align: center;
				color: #999;
				transition: 280ms;
				&.active{
					transform: rotate(180deg)
				}
			}
			.box {
				width: 20px;
				height: 100%;
				position: absolute;
				left:-20px;
				top: 0;
				background: linear-gradient(to right,rgba(255,255,255,0.5),rgba(255,255,255,1))
			}
		}
	}
	.wrap{
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 3000;
		background: #fff;
		.title{
			height: 26px;
			line-height: 26px;
			padding-left: 10px;
			font-size: 12px;
			color: #333;
		}
		.menu-list {
			overflow: hidden;
			.menu-item {
				width: 25%;
				float: left;
				line-height: 26px;
				text-align: center;
				color: #333;
				font-size: 12px;
				&.active {
					color: #b4282d;
				}
			}
		}
	}
</style>

<style>
.ly-tabbar {
	background-color: rgba(255, 255, 255, 1);
	border-bottom: none;
	-webkit-box-shadow:none;
	box-shadow: none;
}
.ly-tab-list {
	padding: 7px 60px 7px 10px;
}
.ly-tab-list a {
	color: #333;
	font-size: 12px
}
.van-overlay {
	top:44px;
}
</style>
