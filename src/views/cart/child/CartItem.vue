<template>
    <div class="cart-item">

        <div class="check" >
            <i class="iconfont " :class="iclass" @click="choose"></i>
        </div>
        <div class="image">
            <img :src="product.image" alt="">
        </div>
        <div class="info text-more">
            <div class="title  text-more">{{product.title}}</div>
            <div class="desc  text-more">{{product.desc}}</div>
            <div class="price">
                <!-- 此处见main.js的全局过滤器 -->
                <div class="real-price"><i>￥</i><b>{{product.realPrice | filterPrice}}</b></div>
                <div class="num">

                    <button class="button" @click="productNumDecr()">-</button>
                    <span>x{{productNum.num}}</span>
                    <button class="button" @click="productNumIncr()">+</button>
                </div>

            </div>
        </div>

    </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import {UPDATE_CART_NUM,UPDATE_CART_CHECKED} from '@/store/mutation-types'
export default {
    name: 'CartItem',
    data(){
        return {
            // check: false
        }
    },
    props: {
        product: {
            type: Object,
            default: {}
        }
    },
    computed: {
        productNum: {
            get: function () {
                return {
                    num: this.product.num,
                    iid: this.product.iid,
                }
            },
            set: function (newValue) {
                console.log('需要触发vuex',newValue)
            }
        },
        iclass() {
            return this.check ? 'icon-roundcheckfill' : 'icon-round'
        },
        check() {
            return this.$store.getters.cartsIsChose(this.product.iid)
        }
    },
    mounted() {
        // this.check = this.product.checked // 因为选中状态会变化，接收传递过来的props已经不起效果了
    },
    methods: {
        // vuex语法糖
        ...mapMutations(
            [UPDATE_CART_NUM,UPDATE_CART_CHECKED]
        ),
        // 减少
        productNumDecr(){
            let num = this.productNum.num - 1
            if (num === 0) {
                this.$toast.show('该宝贝不能在减少了哦~',800)
                return
            }
            let iid =  this.productNum.iid
            this.UPDATE_CART_NUM({num,iid})
        },
        // 增加
        productNumIncr(){
            let num = this.productNum.num + 1
            let iid =  this.productNum.iid
            this.UPDATE_CART_NUM({num,iid})
        },
        // 选中
        choose() {
            let checked = !this.check
            let iid =  this.product.iid
            this.UPDATE_CART_CHECKED({checked,iid})
        }
    }
}
</script>

<style lang="scss" scoped>
.button {
    background-color: #e7e7e7;
    border: none;
    // color: white;
    color: var(--color-text);
    // padding: .3rem .3rem;
    width: 1.3rem;
    height: 1.3rem;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 1rem;
    cursor: pointer;
}

.cart-item {
    display: flex;
    gap: .6rem;
    padding: .8rem .5rem;
    max-height: 8rem;

    .check {
        flex: 1;
        display: flex;
        align-items: center;

        i {
            font-size: 1.5rem;
            color: #ccc;
        }

        i.icon-roundcheckfill {
            color: var(--color-tint);
        }
    }

    .image {
        flex: 3;
        max-width: 6rem;
        border-radius: 1rem;
        overflow: hidden;

        img {
            width: 100%;

        }
    }


    .info {
        display: flex;
        flex: 7;
        flex-direction: column;
        justify-content: space-around;

        .title {
            font-size: 1rem;
            color: #444;
        }

        .desc {
            font-size: .9rem;
        }

        .price {
            display: flex;
            justify-content: space-between;

            .real-price {
                color: var(--color-high-text);

                i {
                    font-size: .62rem;
                }

                b {
                    font-size: 1.1rem;
                }
            }

            .num {
                display: flex;
                border-style: solid;
                border-width: 1px;
                border: beige;
                gap: .1rem;
                align-items: center;


            }


        }
    }
}
</style>