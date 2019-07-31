<template>
<div class="page">
    <app-header :title="name"/>

    <ly-tab
			v-model='selectIndex'
			:items='menu'
			:options='options'>
	</ly-tab>

    <item-list/>

    <!-- {{menu}} -->
</div>
</template>

<script>
import LyTab from 'ly-tab'
import {mapGetters,mapState} from 'vuex'
export default {
    props:['id'],
    components:{
		'ly-tab':LyTab.LyTab
    },
    computed:{
        ...mapGetters({
            name:'category/selectMenuTitle'
        }),
        ...mapState({
            cateMenuList:state=>state.category.menuList
        }),
        //根据cateMenuList,计算头部tab的数据
        menu(){
            // let categoryGroupList = this.cateMenuList.categoryGroupList;
            let {categoryGroupList} = this.cateMenuList;
            console.log(this.cateMenuList)
            if(!categoryGroupList) {
                return [];
            }
            let newdata = [];
            categoryGroupList.map(({categoryList})=>{
                let arr = categoryList.map(({name})=>({label:name}))
                newdata = [...newdata,...arr];
            })
            return newdata;
        }
    },
    data (){
        return {
            selectIndex:0,
            options: {
				activeColor: '#b4282d'
				// 可在这里指定labelKey为你数据里文字对应的字段
			},
        }
    }
}
</script>

<style>

</style>
