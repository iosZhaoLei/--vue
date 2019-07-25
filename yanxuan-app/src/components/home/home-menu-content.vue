<template>
	<scroller>
		{{name}}

	</scroller>	
</template>

<script>
	export default {
		props:['id','name'],
		watch: {
			id:{
				handler(newVal){
					console.log(1);
					this.$store.dispatch('home/getCategoryList',newVal);
				},
				immediate:true
			}
		},
		created() {
			
		},
	}
</script>

<style>
</style>
