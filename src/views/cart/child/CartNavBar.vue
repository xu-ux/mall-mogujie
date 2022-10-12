<template>
    <div>
        <!-- 导航 -->
        <nav-bar class="cart-nav-bar">
            <div slot="center">购物车({{count}})</div>
            <div slot="right" class="right-box">
                <i class="iconfont icon-delete" @click="clickDelete"></i>
            </div>
        </nav-bar>
    </div>
</template>

<script>
    // 顶部栏
    import NavBar from '@/components/common/navbar/NavBar.vue';
    export default {
        name: 'CartNavBar',
        components: {
            NavBar
        },
        props: {
            count: {
                type: Number,
                default: 0,
            }
        },
        methods: {
            clickDelete() {
                this.$emit('cart-delete')
            }
        }


        
    }
</script>

<style lang="scss" scoped>

.cart-nav-bar {

    background-color: var(--color-tint);
    color: white;


    .right-box {
        display: flex;
        justify-content: flex-end !important;
        width: 100%;
        // margin-right: 1rem;

        i {
            padding: 0 .8rem;
            font-size: 1.3rem;
        }
    }


}

</style>