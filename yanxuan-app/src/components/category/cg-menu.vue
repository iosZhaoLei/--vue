<template>
<scroller class="category-menu border-right">
    <nav class="menu-wrap">
        <li class="category-item" 
        :class="{active : index == selectIndex}"
        v-for = '(item ,index) in categorydata' 
        :key="item.id" @click="selectMenu(index)">
            <span>{{item.name}}</span>
        </li>
    </nav>
</scroller>
</template>

<script>
import {mapState} from 'vuex'
export default {
    computed: {
        ...mapState({
            selectIndex:state=>state.category.selectMenuIndex,
            categorydata : state=>state.category.categorydata
        })
    },
    methods: {
        selectMenu(index){
            //修改id
            this.$store.commit('category/setMenuIndex',index);
        }
    },
    created() {
        this.$store.dispatch('category/getCateMenuData');
    }
}
</script>

<style lang="scss" scoped>
.category-item {
    padding: 10px 0;
    span {
        display: block;
        font-size: 14px;
        color: #333;
        text-align: center;
        line-height: 18px;
        padding: 5px 0;
        border: 3px solid transparent;  //透明的3像素边框
    }
    &.active span {
            border-left:3px solid #b4282b;
            color:#b4282b;
        }
}
</style>

