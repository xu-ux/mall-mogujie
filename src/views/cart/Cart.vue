<template>
    <div id="cart">
        <cart-nav-bar :count="length" @cart-delete="cartDel"/>

        <scroll v-if="length > 0" :probe-type="3" :scroll-listen="scroller" ref="scroll"
            class="bscroll-container" :style="setStyle">

                <!-- 商品列表 -->
                 <cart-list class="cart-list-box"/>

        </scroll>

        <empty v-else class="empty-container">
            <i class="iconfont icon-cart"></i>
            <span>购物车是空的哦！</span>
        </empty>

        <cart-tab-bar v-if="length > 0"/>


        <back-top @click.native="scrollBackTopByBscroll" v-show="backTopShow" />

        <Modal :show="showModal" @hideModal="hideModal" @submit="submit">
			<div>是否删除勾选的{{cartsChoseCount}}件商品</div>
		</Modal>

    </div>
</template>

<script>
    // https://vuex.vuejs.org/zh/guide/state.html#mapstate-%E8%BE%85%E5%8A%A9%E5%87%BD%E6%95%B0
    // https://vuex.vuejs.org/zh/guide/getters.html#mapgetters-%E8%BE%85%E5%8A%A9%E5%87%BD%E6%95%B0
    import { mapGetters,mapMutations } from 'vuex'
    import { DELETE_CART } from '@/store/mutation-types'

    import Scroll from '@/components/common/scroll/Scroll.vue'

    // 混入
    import { backTopMixin,ModalMixin } from '@/common/mixin'

    import CartNavBar from './child/CartNavBar.vue'

    // 商品基本信息列表
    import CartList from './child/CartList.vue'
    // 空数据容器
    import Empty from '@/components/content/empty/Empty.vue';
    // 购物车底部tab
    import CartTabBar from './child/CartTabBar.vue';

    export default {
        name:"Cart",
        components: {
            CartNavBar,
            CartList,
            Scroll,
            Empty,
            CartTabBar,
        },
        mixins: [backTopMixin,ModalMixin],
        data() {
            return {
                tmpY: 0,
                setStyle: 'height: calc(100% - 3rem);',
                showModal: false,
            }
        },
        methods: {
            ...mapMutations([DELETE_CART]),
            // 滚动中事件
            scroller(positon) {
                this.tmpY = -parseInt(positon.y)
                this.judgeBackTopShow(this.tmpY,1000)
            },
            // 监听删除事件
            cartDel() {
                if ( this.cartsChoseCount > 0) {
                    this.showModal = true
                } else {
                    this.$toast.show("请选择删除的商品",1000)
                }

            },
            // 取消
            hideModal() {
                this.showModal = false
            },
            // 确认
            submit() {
                // 删除选中的iidList商品
                this.DELETE_CART(Array.from(this.cartsChoseIds))
                this.showModal = false
            }
        },
        computed: {
            
            ...mapGetters(['cartsChoseCount','cartsChoseIds']),
            ...mapGetters(
                {
                    length:'cartsCount',
                    carts:'cartsValues',
                }
            ),

        }
    }
</script>

<style lang="scss" scoped>

@import "@/assets/css/theme.scss";

#cart {
    padding-top: $nav-bar-height;
    padding-bottom: $tab-bar-height;
    overflow-y: scroll;
    height: 100vh;

    .empty-container {
        i {
            font-size: 3rem;
        }
        span {
            font-size: 1.5rem;
        }
    }
}

.cart-list-box {
    padding-bottom: $tab-bar-height;
}



</style>