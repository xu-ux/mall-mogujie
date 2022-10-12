<template>
    <div class="detail-recommend">
        <div class="title">更多推荐</div>
        <goods-list :goodsList="goodsList" class="detail-goods-list"/>
    </div>
</template>

<script>
// https://juejin.cn/post/6859316040061435912

    // 商品列表
    import GoodsList from '@/components/content/goods/GoodsList.vue';
    export default {
        name: 'DetailReconmmend',
        components: {
            GoodsList,
        },
        props: {
            goodsList: []
        }
        
    }
</script>

<style lang="scss" scoped>

    .detail-recommend {
        padding: 1rem 0;

        .title {
            font-weight: 500;
            text-align: center;
            padding-bottom: 1rem;
        }
    }

</style>