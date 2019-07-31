<template>
<div class="page subpage" id="group">
    <app-header :title="name"/>

    <ly-tab
			v-model='selectIndex'
			:items='menu'
			:options='options'>
	</ly-tab>

    <scroller class="group-content">
        <item-list :list='groupData'/>
    </scroller>
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
            name:'category/selectMenuTitle',
            cateId:'category/selectMenuId'
        }),
        ...mapState({
            cateMenuList:state=>state.category.menuList,
            groupData:state=>state.category.groupData
        }),
        //根据cateMenuList,计算头部tab的数据
        menu(){
            let {categoryGroupList} = this.cateMenuList;
            
            if(!categoryGroupList) {
                return [];
            }
            let newdata = [];
            categoryGroupList.map(({categoryList})=>{
                let arr = categoryList.map(({name,id})=>({label:name,id}))
                newdata = [...newdata,...arr];
            })
            return newdata;
        }
    },
    watch:{
        selectIndex(newVal){

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
    },
    created(){
        this.$store.dispatch('category/getCateGroupItems',{
            categoryId:this.cateId,
            subCategoryId:this.id
        });

        //计算那个tab选中
        this.selectIndex = this.menu.findIndex(({id})=>{
            return id == this.id;
        })
    }
}
</script>

<style lang="scss" scoped>
.group-content {
    width: 100%;
    top:70px;
    bottom: 0;
    left: 0;
    position: absolute;
    overflow: hidden;
}
</style>


<style>
#group .ly-tab-list {
	padding: 7px 10px 7px 10px;
}
</style>
