<template>
	<div class="home-menu-wrap">
		<nav class="home-menu">
			<li v-for='item in list' :key='item.id'>
				{{item.name}}
			</li>
		</nav>
	</div>
</template>

<script>
import {fetchGet} from '../../api/fetch'
import api from '../../api'
export default {
	data(){
		return {
			list:[]
		}
	},
	created(){
		fetchGet(api.CATE_LIST_URL).then((data)=>{
			//如果使用this.list 会有好多废数据（set方法，get方法等）
			this.list = data.map(item=>{
				return {
					id:item.id,
					name:item.name
				}
			})
			console.log(this.list);
		})
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
