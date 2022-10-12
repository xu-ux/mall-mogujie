<template>
    <scroller :refreshLayerColor="refreshLayerColor" 
        :refreshText="refreshText" :noDataText="noDataText"
        :style="setStyle" 
        :on-refresh="refresh" 
        :on-infinite="infinite" ref="vscroller"
        >
        <slot></slot>
    </scroller>
</template>

<script>
/**
 * 已封装为全局组件
 * import VueScroller from 'vue-scroller'
 * Vue.use(VueScroller)
 * 
 * vue-scroll属性介绍
 *  Attr. Name	Description	Required	Default Value
    onRefresh	下拉刷新	N	-
    onInfinite	上拉获取数据	N	-
    refreshText	pull-to-refresh的提示信息	N	下拉刷新
    noDataText	当全部数据加载完毕提示信息	N	没有更多数据
    width	scroller container width	N	100%
    height	scroller container height	N	100%
    snapping	enable snapping mode	N	false
    snappingWidth	snapping width	N	100 (stand for 100px)
    snappingHeight	snapping height	N	100
    refreshLayerColor	text color of pull-to-refresh layer	N	#AAA
    loadingLayerColor	text color of infinite-loading layer	N	#AAA
    minContentHeight	min content height (px) of scroll-content	N	0

    实例的某些方法
    resize() resize scroller content (已经废弃)
    triggerPullToRefresh() 触发下拉刷新
    finishPullToRefresh() 完成下拉刷新.可以手动调用
    finishInfinite(isNoMoreData :Boolean) 当参数为false时，上拉获取数据可以重新调用。当参数为true，上拉获取数据回调函数停止使用,下拉下部不再显示loading，会显示‘’暂无更多数据
    scrollTo(x:Integer, y:Integer, animate:Boolean) scroll to a position in scroller content
    scrollBy(x:Integer, y:Integer, animate:Boolean) scroll by a position in scroller content
    getPosition :Object get current position of scroller content


 */
export default {
    name: 'VScroll',
    props: {
        setStyle: {
            type: String,
            default: 'padding-top: 0'
        },
        refresh: {
            type: Function,
            default: function (done) {
                done()
            }
        },
        infinite: {
            type: Function,
            default: function (done) {
                done()
            }
        },
        refreshText: {
            type: String,
            default: '下拉刷新'
        },
        refreshLayerColor: {
            type: String,
            default: '#AAA'
        },
        noDataText: {
            type: String,
            default: '没有更多数据了'
        }

    },
    data() {
        return {
            // 保存当前x,y信息
            x: 0,
            y: 0,
            // position监听函数
            posListener: null
        }
    },
    updated() {
        // 解决切换路由无法读取 getPosition 问题
        // 该函数即时在非dom重新渲染更新期间，也会定期扫描position
        this.posListener = setInterval(() => {
            if (this.$refs.vscroller && this.$refs.vscroller.getPosition) {
                let { left, top } = this.$refs.vscroller.getPosition()
                this.x = left
                this.y = top
            }
        }, 200)
    },
    
    watch: {
        // 当y轴数据发生变化时，发送y轴信息
        y() {
            this.$emit('y-change', this.y)
        },
        // 当x轴数据发生变化时，发送x轴信息
        x() {
            this.$emit('x-change', this.x)
        }
    },
    // 注意：当路由使用 keep-alive，离开当前路由不会调用 beforeDestroy 和 destroyed 
    beforeDestroy() {
        this.posListener = null
    },
    // 继承vue-scroller组件的方法
    methods: {
        scrollTo(x, y, animate = true) {
            this.$refs.vscroller.scrollTo(x, y, animate)
        },
        scrollBy(x, y, animate = true) {
            this.$refs.vscroller.scrollBy(x, y, animate)
        },
        finishInfinite(isNoMoreData = false) {
            this.$refs.vscroller.finishInfinite(isNoMoreData)
        },
        resize() {
            this.$refs.vscroller.resize()
        },
        getPosition(){
            return this.$refs.vscroller.getPosition()
        }
    }
}
</script>

<style lang="scss" scoped>

</style>