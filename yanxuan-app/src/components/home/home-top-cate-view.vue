<template>
<div class="top-cate-view">
    <img :src="data.titlePicUrl" alt="">
    <div class='list-wrap' ref='wrap'>
        <ul ref="scroll">
            <li class="list-item" v-for="item in data.itemList" :key='item.id'>
              <img :src="item.listPicUrl" alt="">
              <h3 class="title">{{item.name}}</h3>
              <p class="price">
                  <span>¥{{item.retailPrice}}</span>
                  <span v-if = 'item.retailPrice != item.counterPrice'>¥{{item.counterPrice}}</span>
              </p>
              <p class="tip">
                  <span v-if="item.promTag">{{item.promTag}}</span>
              </p>
            </li>
            

            <li class="show-more">
                <span>查看更多</span>
                <van-icon name='arrow' />
            </li>   
        </ul>
    </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name:'top-cate-view',
    props : ['data'],
    mounted() {
        
        let width = 90 * this.data.itemList.length + 90;
        this.$refs.scroll.style.width = `${width}px`;
        let scroll = new BScroll(this.$refs.wrap,{
            scrollY:false,
            scrollX:true
        });
    },
}
</script>

<style lang='scss' scope>
.top-cate-view {
    img {
        width:100%;
        display: block;
    }
    .list-wrap {
        width:100%;
        padding: 8px;
        overflow: hidden;
        box-sizing: border-box;
        ul {
            overflow: hidden;
        }
        .list-item {
            width: 80px;
            float: left;
            padding: 0 5px;
            img {
                background: #f4f4f4;
            }
            .title {
                font-size: 14px;
                color: #333;
                line-height: 24px;
                white-space: nowrap;    //不换行
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .price {
                line-height: 26px;
                overflow: hidden;
                span:nth-child(1){
                    font-size: 14px;
                    float:left;
                    color: #b4282d;
                }
                span:nth-child(2){
                    font-size: 12px;
                    color: #b4282d;
                    text-decoration: line-through;
                    color: #999;
                    padding-left: 4px;
                    float: left;
                }
            }
            .tip {
                height: 20px;
                span {
                    font-size: 12px;
                    padding: 2px 4px;
                    border:1px solid #b4282d;
                    color: #b4282d;
                    border-radius: 4px;
                }
            }
        }
        .show-more {
            width: 80px;
            height: 80px;
            margin: 0 5px;
            background: #f4f4f4;
            text-align: center;
            line-height: 80px;
            font-size: 14px;
            color:#666;
            float: left;
        }
    }
}
</style>
