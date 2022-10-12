<template>
    <div class="goods-list">

        <goods-item :goodsItem="item" v-for="(item,index) in goodsList" :key="item.iid" ></goods-item>

    </div>
</template>

<script>
import GoodsItem from './GoodsItem.vue';
export default {
    name: "GoodsList",
    components: {
        GoodsItem
    },
    props: {
        goodsList: {
            type: Array,
            default() {
                return []
            }
        }
    },




}
</script>

<style lang="scss" scoped>
.goods-list {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-evenly;
    
    // display: grid;
    // grid-template-columns: repeat(2, 1fr);  // 指定两列，自动宽度
    // grid-gap: 0.2rem; // 横向，纵向间隔
    // grid-auto-flow: row dense;  // 是否自动补齐空白
    // grid-auto-rows: 20;  // base高度，grid-row基于此运算
    // justify-items: center;

    // --item-span-1: 1;
    // --item-span-2: 1;

    // .goods-item:nth-of-type(2n+1) {
    //     grid-row: auto / span var(--item-span-1);
    // }

    // .goods-item:nth-of-type(2n+2) {
    //     grid-row: auto / span var(--item-span-2);
    // }



}

// .recycle-scroller {
//   height: 100%;
// }
</style>