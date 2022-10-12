<template>
    <div id="tab-bar-box" class="tab-bar-box">

        <!-- 该插槽应当放入 TabbarItemList -->
        <slot>默认插槽内容</slot>
   </div>
</template>

<script>
    
    //用到的icon https://www.iconfont.cn/collections/detail?spm=a313x.7781069.1998910419.dc64b3430&cid=28
    export default {
        name: 'Tabbar'
    }
</script>

<style lang="scss" scoped>
    @import "@/assets/css/theme.scss";

    .tab-bar-box {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: wrap;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 99;
    background-color: $background-color;
    -webkit-box-shadow: 0px -1px 2px 0px rgba(50, 50, 53, 0.1);
    -moz-box-shadow:    0px -1px 2px 0px rgba(50, 50, 53, 0.1);
    box-shadow:         0px -1px 2px 0px rgba(50, 50, 53, 0.1);
    }
</style>