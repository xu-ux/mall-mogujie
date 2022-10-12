vuebase
<template>

        <div class="tabbar-item" @click="itemClick(item.path)" >
            <!-- 直接传递对象 -->
            <img v-show="!isActive" :src="item.img"/>
            <img v-show="isActive" :src="item.activeImg"/>
            <div class="title" :class="{active:isActive}" >{{item.title}}</div>
        </div>

</template>

<script>
    export default {
        name: "TabbarItem",
        data() {
            return {
                // isActive : false
            }
        },
        computed: {
            // 判断是否激活，就计算当前路由是否是本路由
            isActive(){
                //  console.log("调用computed isActive()",this.$route)
                return this.$route.path.includes(this.item.path)
            }
        },
        methods:{
            itemClick(path){
                // console.log("item被点击",path)
                if(path === this.$route.path){
                    return
                }
                this.$router.replace(path)
            }
        },
        // 接收父组件传递过来的title和imgUrl
        props: {
            item: {
                type: Object,
                required: true
            },
        }
    }
</script>

<style lang="scss" scoped>
 @import "@/assets/css/theme.scss";
.tabbar-item {
    height: $tab-bar-height;
    align-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    img {
        width: 21pt;
        height: 21pt;
    }

    .title {
        font-size: 8.5pt;
    }
}

.active {
    color: $active-color;
}
</style>