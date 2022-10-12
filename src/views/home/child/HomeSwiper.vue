<template>
    <div>
            <!-- 轮播图 -->
            <swiper class="swiper" :options="swiperOption" @swiper="onSwiper" @slideChange="onSlideChange">
                <swiper-slide v-for="(item,index) in banners" :key="index">
                    <img :src="item.image" class="banner">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
                <!-- <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div> -->
            </swiper>
    </div>
</template>

<script>

    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'
    export default {
        name: 'HomeSwiper',
        props:{
            banners:{
                type: Array,
                default() {
                    return []
                }
            }
        },
        components:{
            Swiper,
            SwiperSlide,
        },
        data() {
            return {
                swiperOption: {
                // 设置分页器
                pagination: {
                    el: '.swiper-pagination',
                    // 设置点击可切换
                    clickable: true
                },
                // 设置前进后退按钮
                // navigation: {
                //     nextEl: '.swiper-button-next',
                //     prevEl: '.swiper-button-prev'
                // },
                // 设置自动轮播
                autoplay: {
                    delay: 3000 // 3秒切换一次
                },
                // 设置轮播可循环
                loop: true
            },
            }
        },
        methods: {
            // 事件
            onSwiper() {

            },
            onSlideChange() {

            },
        }
    }
</script>

<style lang="scss" scoped>

img.banner {
    width: inherit;
}

</style>