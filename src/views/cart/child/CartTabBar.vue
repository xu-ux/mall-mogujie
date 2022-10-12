<template>
    <div class="cart-tab-bar">

        <div class="left">
            <div class="choose-all">
                <i class="iconfont " :class="iclass" @click="chooseAll"></i>
                <span >全选</span>
            </div>
            <div class="choose-total">
                <span>
                    <span class="content">已选{{cartsChoseCount}}件，合计:</span>
                </span>
                <!-- 注意金额超长时的问题 -->
                <span class="price text-more"><i>￥</i>{{cartsChoseTotal | filterPrice}}</span>
            </div>
        </div>

        <div class="right">
            <span class="buy-button" @click="buy">去结算({{cartsChoseCount}})</span>
        </div>

    </div>
</template>

<script>
    import { mapActions, mapMutations, mapGetters } from 'vuex'
    import { UPDATE_CART_CHECKED_ALL } from '@/store/mutation-types'
    export default {
        name: 'CartTabBar',
        data(){
            return {
                // check: false
            }
        },
        methods: {

            ...mapMutations(
                [UPDATE_CART_CHECKED_ALL]
            ),
            chooseAll() {
                let checked = !this.check
                this.UPDATE_CART_CHECKED_ALL(checked)
            },
            buy() {
                if(this.cartsChoseCount === 0 ) {
                    this.$toast.show("请选择购买的商品",1000)
                } else {
                    this.$toast.show("结算功能暂未实现",800)
                }
            }
        },
        computed: {
            ...mapGetters(['cartsChose','cartsChoseCount','cartsChoseTotal']),
            iclass() {
                return this.check ? 'icon-roundcheckfill' : 'icon-round'
            },
            check() {
                return this.$store.getters.cartIsAllChose
            }
            
        }
    }
</script>

<style lang="scss" scoped>
@import "@/assets/css/theme.scss";
.cart-tab-bar {
    position:fixed;
    bottom: $tab-bar-height;
    left: 0;
    right: 0;

    height: 3rem;
    width: 100vw;
    background-color: white;
    box-shadow: 0px -1px 1px rgb(0 0 0 / 0.03);

    display: flex;
    align-items: center;


    .left {
        flex: 7;
        display: flex;
        justify-content: space-between;
        margin-left: .5rem;
        margin-right: .5rem;

        // 合计选择按钮和文字
        .choose-all {
            display: flex;
            align-items: center;
            gap: .5rem;
            

            i {
                font-size: 1.5rem;
                color: #ccc;
            }

            i.icon-roundcheckfill {
                color: var(--color-tint);
            }

            span {
                font-size: .7rem;
                width: 2rem;
            }
            
        }

        // 金额计算文字
        .choose-total {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            justify-content: flex-end;
            // 限制宽度，超长金额将会隐藏
            width: 47vw;

            .content {
                font-size: .7rem;
            }

            .price {
                
                font-size: 1.1rem;
                font-weight: 600;
                color: var(--color-high-text);
            }

            .price>i {
                font-size: .62rem;
                color: var(--color-high-text);
            }



        }

    }


    .right {
        flex: 3;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: white;

        .buy-button {
            padding: .5rem 1rem;
            font-size: 1rem;
            border-radius: 2rem;
            background-color: #FAACA8;
            background-image: linear-gradient(19deg, #FAACA8 0%, var(--color-tint) 100%);

            
        }
    }


}

</style>