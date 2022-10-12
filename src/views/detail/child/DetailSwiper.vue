<template>
    <div>
        <!-- 轮播图 -->
        <swiper class="swiper" :options="swiperOption">
            <swiper-slide v-for="(item,index) in topImages" :key="index">
                <img :src="item" class="top-image">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>

// 轮播
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
    name: 'DetailSwiper',
    components: {
        Swiper,
        SwiperSlide,
    },
    props: {
        topImages: {
            type: Array
        }
    },
    data() {
        return {
            swiperOption: {
                // 设置分页器
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                // 设置自动轮播
                autoplay: {
                    delay: 3000 // 3秒切换一次
                },
                loop: true
            },
        }
    }
}
</script>

<style lang="scss" scoped>
.swiper {
    width: 100vw;


    .swiper-slide {
        height: 40vh;
        overflow: hidden;
    }

}



img.top-image {
    // 等比例缩放
    // width: auto;
    // height: auto;

    // max-width: 100%;  
    // max-height: 100%; 

    width: inherit;

}
</style>