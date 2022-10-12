<template>
    <div class="profile-main">

        
        <div class="more">
            <ul>
                <li class="main-item">
                    <i class="iconfont icon-deliver"></i>
                    <span>快递</span>
                </li>
                <li class="main-item">
                    <i class="iconfont icon-goods"></i>
                    <span>订单</span>
                </li>
                <li class="main-item">
                    <i class="iconfont icon-crownfill"></i>
                    <span>会员</span>
                </li>
                <li class="main-item" >
                    <i class="iconfont icon-selectionfill"></i>
                    <span>成就</span>
                </li>

            </ul>

        </div>
        <div class="about">
            <ul>
                <li class="main-item">
                    <i class="iconfont icon-service"></i>
                    <span>客服</span>
                </li>
                <li class="main-item" @click="clickAbout">
                    <i class="iconfont icon-hot"></i>
                    <span>关于</span>
                </li>
            </ul>
        </div>

        <div class="nomore">
            
        </div>
        
    </div>
</template>

<script>
    
    export default {
        name: 'ProfileMain',
        methods: {
            clickAbout() {
                this.$emit('about')
            }
        }

    }
</script>

<style lang="scss" scoped>

.profile-main {

    .more,.about {
        border-bottom: 1rem solid rgb(242, 242, 242);
    }

    .main-item {

        padding: .5rem .5rem;
        display: flex;
        border-bottom: 0.1rem solid rgb(242, 242, 242);
        align-items: center;
        gap: 1rem;


        i {
            color: var(--color-tint);
            font-size: 1.6rem;
        }

        span {
            font-size: 1rem;
        }

    }

}

</style>