<template>
<div class="page subpage">
    立即购买
</div>
</template>

<script>
export default {
    created(){

    },
    beforeRouteEnter(to,from,next){
        //路由守卫的方法

        //判断用户是否登录
        let userToken = localStorage.getItem('userToken');
        if(userToken) {
            //路由守卫通过
            next();
        }else {
            //去登录页面
            next('/login');
        }
    }
}
</script>

<style>

</style>
