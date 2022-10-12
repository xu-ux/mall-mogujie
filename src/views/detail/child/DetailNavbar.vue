<template>
    <div class="detail-navbar">
        <nav-bar class="detail-navbar-box">
            <div slot="left" class="back" @click="backLast">
                <img src="@/assets/img/common/back.svg" alt="">
            </div>
            <div slot="center" class="title">
                <span v-for="(title , index) in titles" @click="clickNavTitle(index)" :class="{active: index === currentIndex }">{{title}}</span>
            </div>
        </nav-bar>

    </div>
</template>

<script>
    // 顶部栏
    import NavBar from '@/components/common/navbar/NavBar.vue';
    export default {
        name:'DetailNavbar',
        components:{
            NavBar
        },
        data(){
            return {
                titles: ['商品','参数','评论','推荐'],
                currentIndex: 0,
            }
        },
        methods:{
            clickNavTitle(index) {
                this.currentIndex = index
                this.$emit('click-navbar',index)
            },

            backLast(){
                this.$router.back()
            }
        }
    }
</script>

<style lang="scss" scoped>
    .detail-navbar {

        .detail-navbar-box {
            z-index: 100;
            background-color: white;
        }

        .back {

            display: flex;

            //占用全部高度，最后方便点击
            height: 100%;

            img {
                width: 1rem;
                margin-left: 1rem;
            }
           
        }

        .title {
            display: flex;
            flex-wrap: nowrap;
            flex-direction: row;
            align-items: center;
            justify-content: space-evenly;

            font-size: .9rem;
        }
    }

    .detail-navbar .active {
        color: var(--color-high-text);
        transition: color .5s;

    }
</style>