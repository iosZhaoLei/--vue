<template>
<div class="scroller-wrap" ref="wrap">
    <div class="scroller">
        <slot/>
    </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name:'scroller',
    methods: {
        scrollTo(y,duration){
            this.scroll && this.scroll.scrollTo(0,y,duration);
        }
    },
    mounted() {
        //组件的dom结构 挂载完成
        //创建滚动视图
        let scroll = new BScroll(this.$refs.wrap,{
            click:true,
            tap:true
        });

        //挂载在this、上  不然外面访问不到methods
        this.scroll = scroll;

        //在用户每一次需要滚动前,刷新滚动图，识别滚动视图高度   
        scroll.on('beforeScrollStart',()=>{
            scroll.refresh();
        })
    },
}
</script>

<style>

</style>
