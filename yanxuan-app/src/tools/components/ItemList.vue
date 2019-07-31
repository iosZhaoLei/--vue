<template>
    <ul class="item-list">
        <li class="item" v-for="item in list" :key="item.id" @click="goDetailAciton(item)">
            <!-- <img :src="item.primaryPicUrl" alt=""> -->
            <img v-lazy="item.primaryPicUrl">
            <p class="desc">{{item.simpleDesc}}</p>
            <p class="name">{{item.name}}</p>
            <p>
                <span class="retailPrice">¥{{item.retailPrice}}</span>
                <span class="counterPrice" v-if="item.retailPrice != item.counterPrice">¥{{item.counterPrice}}</span>
            </p>
            <p class="tip">
                <span v-for="tag in item.itemTagList" :key="tag">{{tag}}</span>
            </p>
        </li>
    </ul>
</template>

<script>
export default {
    name:'item-list',
    props:{
        list:Array
    },
    methods: {
        goDetailAciton(item){
            console.log(item)
            this.$router.push(`/itemdetail/${item.id}/${item.name}`)
        }
    }
}
</script>

<style lang="scss" scoped>
.item-list {
    overflow: hidden;
    padding: 0 10px;
    .item {
        padding: 0 5px;
        width: 45%;
        float: left;
        height: 260px;
        img {
            width: 100%;
        }
        .desc {
            background: #F1ECE2;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            color: #9f8A60;
            letter-spacing: 0;
            font-size: 14px;
            height: 24px;
            line-height: 24px;
        }
        .name {
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            letter-spacing: 0;
            font-size: 14px;
            height: 24px;
            line-height: 24px;
        }
        .retailPrice {
            font-size: 14px;
            line-height: 20px;
            color: #b4282d;
        }
        .counterPrice {
            margin-left: .10667rem;
            font-size: 14px;
            line-height: 20px;
            color: #999;
            text-decoration: line-through;
            font-family: PingFangSC-Light;
            margin-left: 5px;
        }
        .tip {
            span {
                font-size: 12px;
                color: #b4282d;
                border: 1px solid #b4282d;
                border-radius: 4px;
            }
        }
    }
}
</style>

