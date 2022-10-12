<template>
    <div class="bscroll" ref="bscroll">
        <div class="bscroll-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import { DETAIL_BSCROLL_REFRESH, BSCROLL_INIT } from '@/common/const'
// 滚动
import BScroll from '@better-scroll/core'
// https://better-scroll.github.io/docs/zh-CN/guide/base-scroll-api.html#%E4%BA%8B%E4%BB%B6
export default {
    name: 'Scroll',
    props: {
        probeType: {
            type: Number,
            default: 0
        },
        pullUpLoad: {
            type: Boolean,
            default: false
        },
        scrollStart:{
            type: Function,
            default: function() {}
        },
        scrollListen: {
            type: Function,
            default: function (positon) {
                // console.log(positon)
            }
        },
        scrollEnd: {
            type: Function,
            default: function() {}
        },
        pullingUpListen: {
            type: Function,
            default: function () {
                console.log('pullingUp')
            }
        }

    },
    data() {
        return {
            scroll: null,
        }
    },
    mounted() {

        // 0.接收总线事件创建BScroll对象
        // this.$bus.$on(BSCROLL_INIT,()=> {
        //     console.log("开始初始化better-scroll")
        //     this.initScroll()
        // })

        // 创建BScroll对象
        this.scroll = new BScroll(this.$refs.bscroll, {
            click: true,
            probeType: this.probeType,
            pullUpLoad: this.pullUpLoad
        });
        // 监听滚动开始
        this.scroll.on('scrollStart', this.scrollStart)

        // 监听滚动 需要配置probeType 可选值 1|2|3 默认值为0 不派发scroll事件
        if (this.probeType === 2 || this.probeType === 3) {

            this.scroll.on('scroll', this.scrollListen)
        }
        // 监听上拉事件
        if (this.pullUpLoad) {

            this.scroll.on("pullingUp", this.pullingUpListen)
        }
        // 监听滚动结束
        this.scroll.on('scrollEnd', this.scrollEnd)

        // 接收总线事件刷新scroll
        this.$bus.$on(DETAIL_BSCROLL_REFRESH, this.refresh)

    },
    methods: {
        scrollTo(x, y, time = 300) {
            this.scroll && this.scroll.scrollTo(x, y, time)
        },
        finishPullUp() {
            this.scroll && this.scroll.finishPullUp()
        },
        getY() {
            return this.scroll ? this.scroll.y : 0
        },
        refresh() {
            this.scroll && this.scroll.refresh()
        }
    }
}
</script>

<style lang="scss" scoped>
.bscroll {
    width: 100%;
    // height: calc(100% -  3.2rem);
    // height: 100%;
    overflow: hidden;
    z-index: 100;
}
</style>