<template>
<scroller class="category-menu-list" ref='scroll'>
    <img class="banner" :src="cateMenuList.bannerUrl" alt="">
    <div class="group" v-for="group in cateMenuList.categoryGroupList" :key="group.id">
        <h3 class="group-title" v-if="group.name">{{group.name}}</h3>
        <ul class="group-list">
            <li class="group-item" v-for="item in group.categoryList" :key="item.id">
                <img :src="item.bannerUrl" alt="">
                <p>{{item.name}}</p>
            </li>
        </ul>
    </div>
</scroller>
</template>

<script>
import{mapState} from 'vuex'
export default {
    computed: {
        ...mapState({
            menuId:state=>state.category.selectMenuId,
            cateMenuList:state=>state.category.menuList
        })
    },
    watch: {
        menuId(){
            //请求数据
            this.$store.commit('category/setcateMenuList',{});
            this.$store.dispatch('category/getCategoryMenuList',this.menuId).then(()=>{
                //滚动视图滚动到最顶部
                let scroll = this.$refs.scroll;
                scroll.scrollTo(0, 0);
            });
            
        }
    },
    created() {
        this.$store.dispatch('category/getCategoryMenuList');
    },
}
</script>

<style lang="scss" scoped>
.category-menu-list {
    padding: 10px;
    box-sizing: border-box;
    .banner {
        width: 100%;
        display: block;
    }
    .group {
        .group-title {
            font-size: 14px;
            font-weight: bold;
            padding: 8px 0;
        }
        .group-list {
            overflow: hidden;
            padding: 10px 0;
            .group-item {
                width: 33.33%;
                float: left;
                img {
                    width: 90%;
                    margin: 0 auto;
                    display:  block;
                }
            }
        }
    }
}
</style>

