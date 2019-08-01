<template>
    <header class="sub-header boder-bottom">
		<van-icon name='arrow-left' @click="backAction"></van-icon>
		<h1 class="title">{{title}}</h1>
	</header>
</template>

<script>
export default {
    name:'app-header',
    props:{
        title:String
    },
    methods: {
        backAction(){
            this.$router.back();
        }
    }
}
</script>

<style lang='scss' scope>
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
</style>
