<template>
<div class="category-menu-list">
    {{menuId}}
</div>
</template>

<script>
import{mapState} from 'vuex'
export default {
    computed: {
        ...mapState({
            menuId:state=>state.category.selectMenuId
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

<style>

</style>
