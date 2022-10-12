<template>
    <div id="detail">

        <DetailNavbar @click-navbar="clickNavTitle" ref="navbar" />


        <scroll :probe-type="3" :scroll-listen="scroller" :scroll-end="scrollEnd" ref="scroll"
            class="bscroll-container" :style="'height: calc(100% -  3.2rem);'">

            <DetailSwiper :top-images="topImages" />

            <DeatilBaseInfo :goods="goods" />

            <DetailSku :sku-props="skuInfo.props" :expressage="itemInfo.extra" />

            <DeailShop :shop-info="shopInfo" />

            <DetailInfo :detail-info="detailInfo" />

            <DetailParams :params-info="itemParams" ref="params" />

            <DeatilComment :comment="comment" ref="comment" />

            <DetailRecommend :goods-list="recommends" ref="recommend" />

        </scroll>

        <back-top @click.native="scrollBackTopByBscroll" v-show="backTopShow" />
        
        <DetailBottomBar @add-cart="addCart"/>


        <Modal :show="showModal" :title="'提示'" @hideModal="hideModal" @submit="submit">
			<div>是否加入购物车</div>
		</Modal>


    </div>
</template>

<script>
import { debounce } from '@/common/utils'
import { DETAIL_IMG_LOAD } from '@/common/const'

import { getGoodsDetail, Goods, Shop, getRecommend } from '@/network/detail';
import DetailNavbar from './child/DetailNavbar.vue';

// 轮播
import DetailSwiper from './child/DetailSwiper.vue';

// 基础信息
import DeatilBaseInfo from './child/DeatilBaseInfo.vue';

// 店铺信息
import DeailShop from './child/DeailShop.vue';

// sku基础信息
import DetailSku from './child/DetailSku.vue';

// 滚动，better-scroll封装
import Scroll from "@/components/common/scroll/Scroll.vue"

// 详情图片模块
import DetailInfo from './child/DetailInfo.vue';

// 商品参数模块
import DetailParams from './child/DetailParams.vue';

// 评论模块
import DeatilComment from './child/DeatilComment.vue';

// 推荐模块
import DetailRecommend from './child/DetailRecommend.vue';

// 混入
import { detailImgLoadWithRefresh,backTopMixin,ModalMixin } from '@/common/mixin'

// 底部按钮
import DetailBottomBar from './child/DetailBottomBar.vue';

// vuex语法糖
import {ADD_CART,ADD_CART_ASYNC} from '@/store/mutation-types'
import { mapActions, mapMutations } from 'vuex'

export default {
    name: "Detail",
    data() {
        return {
            itemInfo: {},
            topImages: [],
            goods: {},
            shopInfo: {},
            skuInfo: {},
            detailInfo: {},
            itemParams: {},
            comment: null,
            recommends: [],
            // 记录当前滚动位置，因为是better-scoll是负数计算，所以这里取反
            tmpY: 0,
            // 标记顶部四个tab的offsetTop位置
            setNavPosition: null,
            navPosition: [],
            // 记录当前点击位置
            navIndex: 0,

            showModal: false,
        }
    },
    mixins: [detailImgLoadWithRefresh,backTopMixin,ModalMixin],
    components: {
        DetailNavbar,
        DetailSwiper,
        DeatilBaseInfo,
        DeailShop,
        DetailInfo,
        Scroll,
        DetailParams,
        DetailSku,
        DeatilComment,
        DetailRecommend,
        DetailBottomBar,
    },
    computed: {

        iid() {
            return this.$route.params.iid;
        }
    },
    created() {
        /**
         * 获取详情数据
         */
        getGoodsDetail(this.iid).then(res => {
            // console.log('详情数据',res)
            let result = res.result
            // 商品基础信息
            this.goods = new Goods(result.itemInfo, result.columns, result.shopInfo.services)
            // 轮播图
            this.itemInfo = result.itemInfo
            this.topImages = result.itemInfo.topImages
            // 店铺信息
            this.shopInfo = new Shop(result.shopInfo)
            // SKU信息
            this.skuInfo = result.skuInfo
            // 商品详情
            this.detailInfo = result.detailInfo
            // 参数信息
            this.itemParams = result.itemParams
            // 评论信息
            this.comment = result.rate.list ? result.rate.list[0] : null

        }),
        /**
         * 获取推荐数据
         */
        getRecommend().then(res => {
            // console.log('推荐数据',res)
            this.recommends = res.data.list
        })

    },
    mounted() {

        // 只会创建一次函数
        this.setNavPosition = debounce(() => {

            this.navPosition = [],
                this.navPosition.push(0) // 商品主体模块，默认0
            this.navPosition.push(this.$refs.params.$el.offsetTop) // 参数模块
            this.navPosition.push(this.$refs.comment.$el.offsetTop) // 评论模块
            this.navPosition.push(this.$refs.recommend.$el.offsetTop) // 推荐模块 
            console.log(this.navPosition)

        }, 500)

        // 监听事件总线中的，图片是否已经加载好了，加载完成则对navPosition赋值
        this.$bus.$on(DETAIL_IMG_LOAD, () => {
            // 因为图片加载只发送一次时间，所以混入代码被注释了
            // this.$refs.scroll.refresh()
            this.setNavPosition()
        })


    },
    methods: {
        // 滚动中事件
        scroller(positon) {

            this.tmpY = -parseInt(positon.y)

            this.judgeBackTopShow(this.tmpY,1000)

        },
        // 滚动结束事件
        scrollEnd() {

            let y = -parseInt(this.$refs.scroll.getY())
            // 滚动发生时，计算当前tabNavbar应该高亮哪一个元素
            let length = this.navPosition.length;
            for (let i = 0; i < length; i++) {
                let h = (this.navPosition[i] - 44) < 0 ? 0 : this.navPosition[i]
                if (this.navIndex != i && (i < length - 1 && y >= h && y < (this.navPosition[i + 1] - 44) || (i == (length - 1) && y >= h))) {
                    this.navIndex = i;
                    this.$refs.navbar.currentIndex = this.navIndex
                }
            }
        },
        // 点击nav标题时，内容跳转到指定位置
        clickNavTitle(index) {
            this.navIndex = index;
            this.$refs.scroll.scrollTo(0, -this.navPosition[index] + 44)
        },
        // vuex语法糖
        ...mapMutations(
            [ADD_CART]
        ),
        ...mapActions(
            [ADD_CART_ASYNC]
        ),
        // 添加至购物车
        addCart() {
            
            this.showModal = true
            
        },
        hideModal() {
            console.log("取消")
            this.showModal = false
        },
        submit() {
            console.log("提交")

            // 获取商品在购物车需要展示的信息
            const product = {}
            product.image = this.topImages[0]
            product.iid = this.iid
            product.title = this.goods.title
            product.desc = this.goods.desc
            product.price = this.goods.lowPrice
            product.realPrice = this.goods.lowNowPrice
            product.num = 1
            product.checked = false
            // console.log(product)

            // this.ADD_CART(product)  // 等同于 this.$store.commit(ADD_CART,product)
            // 等同于 this.$store.dispatch(ADD_CART,product)
            this.ADD_CART_ASYNC(product).then(()=> {
                
                this.$toast.show('加入购物车成功！')
            }).catch((e) => {
                console.error(e)
            })

            this.showModal = false
        }
    }

}
</script>

<style lang="scss" scoped>


@import "@/assets/css/theme.scss";

#detail {

    touch-action: pan-y;
    padding-top: $nav-bar-height;
    // padding-bottom: 41pt;
    position: relative;
    z-index: 100;
    background-color: white;
    height: 100vh;


}
</style>