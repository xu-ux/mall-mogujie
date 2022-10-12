<template>
    <div class="navbar">
        <!-- 导航 -->
        <nav-bar class="profile-nav-bar">
            <div slot="center">我的</div>
            <div slot="right" class="right-box">
                <i class="iconfont icon-settings" ></i>
            </div>
        </nav-bar>
    </div>
</template>

<script>
// 顶部栏
import NavBar from '@/components/common/navbar/NavBar.vue';
export default {
    name: 'ProfileNavBar',
    components: {
        NavBar,

    },

}
</script>

<style lang="scss" scoped>
.profile-nav-bar {

    background-color: var(--color-tint);
    color: white;
    box-shadow: none;


    .right-box {
        display: flex;
        justify-content: flex-end !important;
        width: 100%;
        // margin-right: 1rem;

        i {
            padding: 0 .8rem;
            font-size: 1.3rem;
        }
    }
}
</style>