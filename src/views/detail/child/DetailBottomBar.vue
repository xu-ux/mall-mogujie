<template>
    <div class="detail-bottom-bar">
        <div class="left">

            <div>
                <i class="iconfont icon-shop" ></i>
                <span class="text">店铺</span>
            </div>
            <div>
                <i class="iconfont icon-service" style="color: burlywood;"></i>
                <span class="text">客服</span>
            </div>
            <div>
                <i class="iconfont icon-favor"></i>
                <span class="text">收藏</span>
            </div>

        </div>
        <div class="right">
            <div>
                <span class="cart-button" @click="addCart">加入购物车</span>
            </div>
            <div>
                <span class="buy-button" @click="buy">立即购买</span>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'DetailBottomBar',
        methods: {
            addCart() {
                this.$emit('add-cart')
            },
            buy() {
                this.$toast.show("暂未实现")
            }
        }
    }
</script>

<style lang="scss" scoped>
.detail-bottom-bar {
    display: flex;
    height: 3.2rem;
    background-color:  white;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0px -1px 1px rgb(0 0 0 / 0.03);
    .left {
        height: 100%;
        display: flex;
        flex: 4;
        justify-content: space-around;

        >div {
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: space-evenly;

            i {
                font-size: 1.5rem;

            }

            span {
                font-size: .62rem;
            }
        }
    }

    .right {
        color: white;
        font-size: .9rem;
        font-weight: 500;
        height: 100%;
        display: flex;
        flex: 6;
        justify-content: space-evenly;

        >div {
            height: 100%;
            display: flex;
            align-items: center;
        }

        .cart-button {
            background-color: #FAACA8;
            background-image: linear-gradient(19deg, #FAACA8 0%, var(--color-tint) 100%);
        }

        .buy-button {
            background-color: #FAACA8;
            background-image: linear-gradient(19deg, #FAACA8 0%, var(--color-tint) 100%);
        }

        .cart-button,.buy-button {
            
            // height: 2rem;
            padding: .7rem .75rem;
            border-radius: 2rem;
        }
    }
    

}
</style>