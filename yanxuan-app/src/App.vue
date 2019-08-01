<template>
  <div id="app">
	  <keep-alive>
		  <router-view></router-view>
	  </keep-alive>
	  <router-view name='detail'></router-view>
	  <tab-bar></tab-bar>
  </div>
</template>

<script>
	export default {

	}
</script>

<style lang="scss">

</style>
