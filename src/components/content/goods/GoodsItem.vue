<template>
    <div class="goods-item" @click="clickGoods(goodsItem.iid)" >
        <img :src="goodsItem.show ? goodsItem.show.img : goodsItem.image" alt="" class="goods-image" @load="goodsImgLoad()">
        <div class="goods-content">
            <p>{{goodsItem.title}}</p>
            <div class="goods-detail">
                <div class="goods-price">{{goodsItem.price}}</div>
                <div class="goods-like">
                    <!-- <img src="@/assets/img/home/star.png" alt=""> -->
                    <i class="iconfont icon-favorfill"></i>
                    <span>{{goodsItem.cfav}}</span>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import { GOODS_IMG_LOAD } from '@/common/const'
    export default {
        name:'GoodsItem',
        props: {
            goodsItem :{
                type: Object
            }
        },
        methods:{
            clickGoods(iid){
                console.log(iid)
                // 点击后跳转路由
                this.$router.push({ path: `/detail/${iid}` }).catch(e => console.log(e))
            },
            goodsImgLoad(){
                this.$bus.$emit(GOODS_IMG_LOAD)
            }
        }

    }
</script>

<style lang="scss" scoped>

    .goods-item {
        width: 48vw;
        min-height: 38vh;
        margin-bottom: .3rem;

        // 主图
        img {
            width: 47vw;
            border-radius: 5px;
        }


        // 内容
        .goods-content {

            color: var(--color-text);
            font-size: .85rem;

            // 标题
            p {
                // 超过长度的标题隐藏，并截取
                
                padding: .2rem;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            // 价格和点赞
            .goods-detail {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 10px;
                

                .goods-price {
                    color: var(--color-high-text);
                }

                .goods-like {
                    display: flex;
                    gap: .1rem;
                    align-items: baseline;
                    
                    // img {
                    //     width: 1rem;
                    // }
                    i { 
                        color: var(--color-high-text);
                        font-size: .85rem;
                    }
                }
            }

        }
    }

</style>