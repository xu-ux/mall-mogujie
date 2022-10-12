<template>
    <div class="detail-info">
        <!-- 放产品简介 -->
        <header>
            <div class="top"></div>
            <div class="desc">{{detailInfo.desc}}</div>
            <div class="bottom"></div>
        </header>

        <!-- 具体详情 -->
        <main>

            <div v-for="detail in detailInfo.detailImage">
                <div class="info-key">{{detail.key}}</div>

                <section>
                    <img v-if="detail.list" v-for="(img,index) in detail.list" v-lazy="img" alt="" class="detail-info-img" @load="detailImgsLoad(index,totalImgSize)">
                </section>

            </div>

        </main>

    </div>
</template>

<script>
    import {DETAIL_IMG_LOAD} from '@/common/const'
    export default {
        name: 'DetailInfo',
        props:{
            detailInfo: {

                type: Object,
                default(){
                    return {}
                }
            }
        },
        data(){
            return {
                num: 0,
            }
        },
        computed: {

            totalImgSize() {
                // 警告这里有一些对象是没有图片的
                let newArr = this.detailInfo.detailImage.map(s => s.list).filter(s => s !== undefined ).flatMap(num => num)
                // console.log(newArr)
                return newArr.length;
            }

        },
        methods:{
            // 这个事件后面会放弃，因为在详情图片的后面还有更多的组件，包括推荐页图片等
            detailImgsLoad(index,length) {
                // 保证是最后一个加载的图片加载之后，再发送总线事件
                let num = (this.num += 1)
                // console.log(num)
                if(num >= length) {
                    console.log("send",DETAIL_IMG_LOAD)
                    this.$bus.$emit(DETAIL_IMG_LOAD)
                }
                
            }
        }
    }
</script>

<style lang="scss" scoped>

.detail-info {

    $padding-left: 1rem;
    $padding-right: 1rem;
    position: relative;

    $info-width: 30vw;

    .detail-info-img {

        width: 100vw;
    }

    .desc {
        padding: 1rem $padding-right 1rem $padding-left;
        font-size: 1rem;
    }

    .top {
        width: $info-width;
        height: 1px;
        background-color: #444;
        margin: 1rem $padding-right 0 $padding-left;
    }

    .bottom {
        width: $info-width;
        height: 1px;
        background-color: #444;
        // margin: 1rem $padding-right 0 $padding-left;
        position: absolute;
        right: 1rem;
    }

    .top::before {

        content: "";
        display: block;
        height: .5rem;
        width: .5rem;
        background-color: #444;
        position: relative;
        bottom: .25rem;
    }

    .bottom::after {
        content: "";
        display: block;
        height: .5rem;
        width: .5rem;
        background-color: #444;
        position: relative;
        bottom: .25rem;
        left: $info-width;
    }

    .info-key {
        font-size: 1rem;
        font-weight: 700;
        padding: 1rem $padding-right 1rem $padding-left;
    }
}


</style>