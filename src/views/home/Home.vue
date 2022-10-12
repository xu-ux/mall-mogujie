<template>
    <div id="home">

        <!-- 导航 -->
        <nav-bar class="home-nav-bar">
            <div slot="center">蘑菇街</div>
        </nav-bar>

        <tab-control class="home-tab-control" :titles="titles" @tab-item-click="tabControlClick" ref="tabControlfixed"
            v-show="tabControlShow" style="padding-top: 20px;position: fixed;width: 100vw;" />


        <v-scroll :refresh="refresh" :infinite="infinite" :set-style="vscrollStyle" @y-change="yChange"
            ref="myscroller">

            <home-swiper :banners="banners" />

            <!-- 推荐 -->
            <home-recommend :item-list="recommends" />


            <home-feature />

            <tab-control class="home-tab-control" :titles="titles" @tab-item-click="tabControlClick" ref="tabControl" />


            <goods-list :goods-list="showGoods" ref="goodsList" />

        </v-scroll>

        <back-top @click.native="clickBackTop" v-show="backTopShow" />


    </div>
</template>

<script>
// 工具
import { debounce } from '@/common/utils';
// 接口
import { getHomeMultidata, getHomeData } from '@/network/home.js'

// 顶部栏
import NavBar from '@/components/common/navbar/NavBar.vue';

// 轮播
import HomeSwiper from './child/HomeSwiper.vue';

// 推荐
import HomeRecommend from './child/HomeRecommend.vue';

// 周流行
import HomeFeature from './child/HomeFeature.vue';

// 滚动,vue-scroller封装
import VScroll from '@/components/common/scroll/VScroll.vue'

// tab栏
import TabControl from '@/components/content/tabControl/TabControl.vue'

// 商品列表
import GoodsList from '@/components/content/goods/GoodsList.vue';

import {backTopMixin} from '@/common/mixin'

export default {
    name: "Home",
    components: {
        NavBar,
        HomeSwiper,
        HomeRecommend,
        HomeFeature,
        TabControl,
        GoodsList,
        VScroll,
    },
    mixins: [backTopMixin],
    // 创建data
    data() {
        return {
            banners: [],
            recommends: [],

            titles: ['流行', '新款', '精选'],

            gType: 'pop',
            // 商品tab分栏存储
            goods: {
                "pop": { "page": 0, "list": [] },
                "new": { "page": 0, "list": [] },
                "sell": { "page": 0, "list": [] },
            },
            // tabControl距离顶部的距离
            tabOffsetTop: 0,
            // 是否显示另一个tabControl
            tabControlShow: false,
            // vscroll的样式，因为顶部tap栏高度为44px
            vscrollStyle: 'padding-top: 44px;height: 100vh;',
            // vscroll的y轴位移，最终记录
            posY: null,
            // vscroll的y轴位移缓存
            tmpY: 0,

        }
    },
    updated() {
        
    },
    created() {

        this.getHomeMultidata() // 因为名字一样
        // 初始化获取
        // this.getHomeGoods('pop')
        this.getHomeGoods('new')
        this.getHomeGoods('sell')

    },
    activated() {
        // console.log("home activated")
        // 局部更新dom
        this.$nextTick(() => {
            this.$refs.myscroller.resize()
            this.$refs.myscroller.scrollTo(0, this.posY, false)
            this.$refs.myscroller.resize()
        })

    },
    deactivated() {
        // console.log(this.$refs.myscroller.getPosition())
        // this.posY = this.tmpY
        let {left,top} = this.$refs.myscroller.getPosition()
        this.posY = parseInt(top)
    },
    mounted() {

        /**
         * 让鼠标滚轮也可以控制页面上下滑动
         */
        let _this = this;  //此this指向的是vue
        window.onmousewheel = function (e) {  // 滚轮事件
            let vscrollerCmp = _this.$refs.myscroller // 获取滚动组件
            if (e.wheelDelta < 0) {
                vscrollerCmp && (vscrollerCmp.scrollBy(0, 30, false))
            } else {
                vscrollerCmp && (vscrollerCmp.scrollBy(0, -30, false))
            }
        }

        // 触摸操作
        // window.ontouchmove = function (e) {
        // }


    },
    computed: {
        showGoods() {
            return this.goods[this.gType].list
        }
    },
    methods: {
        // 监听vscroll组件y轴移动数据
        yChange(y) {
            // console.log(y)
            this.tmpY = parseInt(y)
            this.positionMove(this.tmpY) 
            // posY不能放在这里赋值，一旦切换组件时，这里会被重新赋值为0
            
        },
        // 位置判断
        positionMove(y) {
            let gTop = this.$refs.goodsList.$el.offsetTop
            let tTop = this.$refs.tabControl.$el.offsetTop

            // console.log(gTop,tTop)
            // 保证滚动足够远时，才显示置顶按钮
            // this.backTopShow = (gTop <= (y - 500))
            this.judgeBackTopShow((y - 500),gTop)
            this.tabControlShow =  (tTop <= (y + 60))

        },
        getHomeMultidata() {
            // 请求多个数据
            getHomeMultidata().then(res => {
                // console.log(res)
                // 获取首页banner信息
                this.banners = res.data.banner.list
                // 获取首页推荐信息
                this.recommends = res.data.recommend.list

            })
        },
        getHomeGoods(type) {
            // 页数从模型里面获取当前页面+1的数据
            let page = this.goods[type].page + 1
            return getHomeData(type, page).then(res => {
                // 将当前页面存储到模型
                this.goods[type].page = page;
                // 这个地方要保留旧的数据，数数组构再放入之前的数组
                this.goods[type].list.push(...res.data.list);
                return res.data.list;
            });

        },
        // 接收子组件传递的事件
        tabControlClick(index) {
            this.gType = ['pop', 'new', 'sell'][index]
            this.$refs.tabControlfixed.currentIndex = index
            this.$refs.tabControl.currentIndex = index

        },
        // 初始化数据获取
        initData() {
            this.goods = {
                "pop": { "page": 0, "list": [] },
                "new": { "page": 0, "list": [] },
                "sell": { "page": 0, "list": [] },
            }
            this.getHomeGoods('pop')
            this.getHomeGoods('new')
            this.getHomeGoods('sell')

        },
        // vue-scroll下拉刷新
        refresh(done) {
            
            // 停止下拉刷新
            setTimeout(() => {
                this.initData()
                done()
            }, 1000);
        },
        // vue-scroll上拉获取
        infinite(done) {

            setTimeout(() => {
                this.getHomeGoods(this.gType).then((list) => {

                    // 如果数据还有很多，则表示可以继续上拉获取
                    if (list.length > 0) {
                        this.$refs.myscroller.$refs.vscroller.finishInfinite(false)
                    } else {
                        // 当参数为true，上拉获取数据回调函数停止使用,下拉下部不再显示loading，会显示 暂无更多数据
                        this.$refs.myscroller.$refs.vscroller.finishInfinite(true)
                    }
                    done();

                })
            }, 500);

        },
        // 点击置顶，返回顶部
        clickBackTop() {
            this.scrollBackTop( ()=> {
                this.$refs.myscroller.scrollTo(0, 0, true)
                // vue-scroller需要执行两次
                setTimeout(() => {
                    this.$refs.myscroller.scrollTo(0, 0)
                }, 10)
                this.tabControlShow = false
            })           
        },
        // 设置
        setOffsetTop() {
            this.tabOffsetTop = this.$refs.tabControl && this.$refs.tabControl.$el.offsetTop
        },



    },
}
</script>

<style lang="scss" scoped>

@import "@/assets/css/theme.scss";

#home {
    padding-top: $nav-bar-height;
    padding-bottom: $tab-bar-height;
    overflow-y: scroll;
    height: 100vh;
}

.home-nav-bar {

    background-color: var(--color-tint);
    color: white;
}


//吸顶效果，装完scroll后失效
div.home-tab-control {
    position: relative;
    top: 0;
    z-index: 1;
}
</style>