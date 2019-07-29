<template>
<scroller class="category-menu-list">
    <img class="banner" :src="cateMenuList.bannerUrl" alt="">
    <!-- {{cateMenuList.bannerUrl}} -->
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
            this.$store.dispatch('category/getCategoryMenuList',this.menuId);
        }
    },
    created() {
        this.$store.dispatch('category/getCategoryMenuList');
    },
}
</script>

<style lang="scss" scoped>
.category-menu-list {
    .banner {
        width: 100%;
        display: block;
    }
}
</style>

