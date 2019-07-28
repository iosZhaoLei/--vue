<template>
    <ul class="item-list">
        <li class="item" v-for="item in list" :key="item.id">
            <!-- <img :src="item.primaryPicUrl" alt=""> -->
            <img v-lazy="item.primaryPicUrl">
        </li>
    </ul>
</template>

<script>
export default {
    name:'item-list',
    props:{
        list:Array
    }
}
</script>

<style lang="scss" scoped>
.item-list {
    overflow: hidden;
    .item {
        width: 50%;
        float: left;
        img {
            width: 100%;
        }
    }
}
</style>

