<template>
  <div id="app">
	  <keep-alive>
		  <router-view></router-view>
	  </keep-alive>
	  
	  <Tabbar></Tabbar>
  </div>
</template>

<script>
	import Tabbar from './components/common/Tabbar.vue'
	
	export default {
		components:{
			Tabbar
		}
	}
</script>

<style lang="scss">

</style>
