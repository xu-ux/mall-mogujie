import { debounce } from './utils';
import { GOODS_IMG_LOAD, DETAIL_IMG_LOAD,DETAIL_BSCROLL_REFRESH } from '@/common/const'

/**
 * 接收到列表商品图片加载完成后，刷新bscroll
 * （适用于bscroll）
 */
export const goodsImgLoadMixin = {
    data() {
        return {
            bscrollRefesh: null
        }
    },
    mounted() {
        // 保证这个函数对象只会赋值一次
        this.bscrollRefesh = debounce(this.$refs.scroll.refresh, 500);
        this.$bus.$on(GOODS_IMG_LOAD, () => {
            bscrollRefesh()
        });
    }

}

/**
 * 接收到详情页图片加载完成后，初始化bscroll
 * （适用于bscroll）
 */
export const detailImgLoadWithInit = {
    mounted() {
        // 只会创建一次函数
        const initScroll = debounce(() => { this.$bus.$emit(BSCROLL_INIT) }, 500)

        // 监听事件总线中的，图片是否已经加载好了，加载完成则初始化better-scroll
        this.$bus.$on(DETAIL_IMG_LOAD, () => {
            console.log('send initScroll event')
            initScroll()

        })
    },
}

/**
 * 接收到详情页图片加载完成后，刷新bscroll
 * （适用于bscroll）
 */
 export const detailImgLoadWithRefresh = {
    mounted() {
        // 只会创建一次函数
        const refreshScroll = debounce(() => { this.$bus.$emit(DETAIL_BSCROLL_REFRESH) },100)

        // 监听事件总线中的，图片是否已经加载好了，加载完成则刷新better-scroll
        this.$bus.$on(DETAIL_IMG_LOAD, () => {
            console.log('send refreshScroll event')
            refreshScroll()
        })
    },
}

// 置顶
import BackTop from '@/components/content/backtop/BackTop.vue';

export const backTopMixin = {
    components: {
        BackTop
    },
    data() {
        return {
            // 置顶组件是否显示
            backTopShow: false,
        }
    },
    methods: {
        /**
         * 点击置顶，返回顶部，通用的方法
         * @param { Function } scrollTop  需要传入滚动组件置顶的函数
         */
        scrollBackTop(scrollTop = () => {}) {
            scrollTop()
            // 滚动函数执行时，该组件隐藏
            this.backTopShow = false
        },
        // 注意，这个只能给bettter-scroll使用，detail页面使用了bettter-scroll
        scrollBackTopByBscroll() {
            this.$refs.scroll.scrollTo(0, 0)
            // 滚动函数执行时，该组件隐藏
            this.backTopShow = false
        },
        // 注意，这个只能给vue-scroller使用，home页面使用了vue-scroller
        scrollBackTopByVscroll() {
            this.$refs.myscroller.scrollTo(0, 0, true)
            // vue-scroller需要执行两次
            setTimeout(() => {
                this.$refs.myscroller.scrollTo(0, 0)
            }, 10)
            // 滚动函数执行时，该组件隐藏
            this.backTopShow = false
        },

        /**
         * 判断是否可以显示，top > standard显示；top <= tandard不显示
         * @param {*} top 当前高度 
         * @param {*} standard 标准
         */
        judgeBackTopShow(top,standard) {
            this.backTopShow = top > standard
        }
    },
}



/**
 * 弹窗混合
 */

// 弹窗
import Modal from "@/components/common/popup/Modal.vue"

export const ModalMixin = {
    components: {Modal},
    data() {
        return {
            showModal: false,
        }
    },
    methods: {
        
    }

}