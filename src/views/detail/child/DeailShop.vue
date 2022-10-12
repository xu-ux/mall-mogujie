<template>
    <div class="shop-info">
        <header>
            <img :src="shopInfo.logo" alt="">
            <span>{{shopInfo.name}}</span>
        </header>
        <main class="shop-middle">
            <div class="left">
                <div class="totalSell">
                    <p>{{shopInfo.cSells > 10000 ? (parseInt(shopInfo.cSells / 10000) + '万') : shopInfo.cSells}}</p>
                    <p>总销量</p>
                </div>
                <div class="totalGoods">
                    <p>{{shopInfo.cGoods}}</p>
                    <p>全部宝贝</p>
                </div>
            </div>
            <div class="right">

                <ul>
                    <li v-for="s in shopInfo.score">
                        <span style="flex:3">{{s.name}}</span>
                        <span style="flex:2" :style="{color: ( s.score >= 4.8 ) ? red : green}">{{s.score}}</span>
                        <span style="flex:1; color: white; border-radius: 2px; text-align: center; padding: 0 1px;" :style="{'background-color': ( s.isBetter ) ? red : green}">{{s.isBetter ? '高' : '低'}}</span>
                    </li>
                </ul>

            </div>
        </main>
        <footer>

            <div>进店逛逛</div>

        </footer>

    </div>
</template>

<script>
    export default {
        name:'DetailShop',
        data(){
            return {
                red: '#FF3333',
                green: '#33CC4D',
            }
        },
        props:{
            shopInfo: {
                type:Object,
                default() {
                    return {}
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

    .shop-info {

        $padding-left:.4rem;
        $padding-right:.4rem;

        padding: .3rem $padding-right .3rem $padding-left;
        border-bottom: 0.5rem solid rgb(242, 242, 242);

        header {

            img {
                width: 3.5rem;
                vertical-align: middle;
                border-radius: 50%;
                border: .05rem solid #ccc;
            }

            span {
                font-size: 1.2rem;
                margin-left: 1rem;
            }

        }


        main {
            display: flex;
            justify-content: space-evenly;
            align-items: center;

            font-size: .9rem;

            .left {

                flex: 1;
                display: flex;

                p {
                    height: 1.5rem;
                    line-height: 1.5rem;

                }

                .totalGoods,.totalSell {
                    flex: 1;
                    text-align: center;

                    p:nth-child(1) {
                        font-size: 1.4rem;
                    }
                }
            }

            .right::before {
                content: "";
                display: block;
                height: 3rem;
                width: .12rem;
                background-color: #f2f2f2;
                position: absolute;
                top: 1rem;
            }

            .right {
                flex: 1;
                position: relative;
            }

            .right ul {
                padding: 0 .5rem 0 1rem;
                height: 5rem;
                display: flex;
                flex-direction: column;
                justify-content: space-around;


                li {
                    list-style: none;
                    display: flex;
                    // justify-content: space-between;
                    // flex-wrap: nowrap;
                    // flex-direction: row;
                }
            }
        }


        footer {

            display: flex;
            justify-content: center;

            div {
                font-size: 1rem;
                color: #515151;
                background-color: #f1f5fb;
                width: 10rem;
                height: 2rem;
                text-align: center;
                line-height: 2rem;
                border-radius: .3rem;
                margin: 1rem 0;
            }

        }
    }

</style>