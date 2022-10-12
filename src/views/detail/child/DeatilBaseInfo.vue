<template>
    <div class="goods-base-info">

        <div class="title">
            <h3>{{goods.title}}</h3>
        </div>

        <div class="price">
            <span class="low-price">{{goods.price}}</span>
            <span class="high-price">¥{{goods.highPrice}}</span>
            <span class="discount" v-if="goods.discountDesc">{{goods.discountDesc}}</span>

        </div>

        <div class="extra">
            <span v-for="s in goods.columns">{{s}}</span>
        </div>

        <div class="services">
            <div v-for="s in goods.services" class="services-item">
                <img :src="s.icon" alt="">
                <span>{{s.name}}</span>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name:'DetailBaseInfo',
        props:{
            goods:{
                type: Object,
                default() {
                    return {}
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
.goods-base-info {
    padding: .5rem 0 .5rem 0;

    $padding-left:.4rem;
    $padding-right:.4rem;
    $padding: .2rem .5rem .2rem .5rem;

    .title {
        color: var(--color-text);

        padding: 0 $padding-right 1rem $padding-left;

    }

    .price {

        padding: 0 $padding-right .3rem $padding-left;

        margin-bottom: .7rem;


        .low-price {
            font-size: 2.1rem;
            color: var(--color-high-text);
            padding-right: 1rem;
        }

        .high-price {
            color: var(--color-s-text);
            font-size: 1rem;
            text-decoration: line-through;
            padding-right: .2rem;
        }

        .discount {
            color: white;
            font-size: .9rem;
            background-color: var(--color-high-text);
            padding: 2px 6px;
            bottom: 0.5rem;
            position: relative;
            border-radius: 8px;
        }
    }

    .extra {
        padding: 0 $padding-right .5rem $padding-left;
        color: var(--color-l-text);
        display: flex;
        justify-content: space-around;
        border-bottom: 0.5rem solid rgb(242, 242, 242);
        font-size: .9rem;
    }

    .services {
        padding: 1rem $padding-right 1rem $padding-left;
        display: flex;
        display: flex;
        gap: .5rem;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: center;
        border-bottom: 0.5rem solid rgb(242, 242, 242);


        img {
            width: 1rem;
            height: 1rem;
            margin-right: .2rem;
        }

        .services-item {
            color: var(--color-s-text);
            display: inline-flex;
            font-size: .9rem;
        }
    }
}
</style>