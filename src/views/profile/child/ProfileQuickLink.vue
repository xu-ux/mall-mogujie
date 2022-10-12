<template>
    <div class="profile-quick-link">

        <div>
            <i class="iconfont icon-moneybag"></i>
            <div class="link-box">
                <span class="desc">余额:</span><span class="number">{{userInfo.money}}</span>
                <span>元</span>
            </div>
        </div>
        <div>
            <i class="iconfont icon-redpacket"></i>
            <div class="link-box">
                <span class="desc">红包:</span><span class="number">{{userInfo.redpacket}}</span>
                <span>元</span>
            </div>
        </div>
        <div>
            <i class="iconfont icon-vipcard"></i>
            <div class="link-box">
                <span class="desc">卡包:</span><span class="number">{{userInfo.cardCount}}</span>
                <span>张</span>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'ProfileQuickLink',
        props: {
            userInfo: {
                type: Object,
                default: {}
            }
        }
    }
</script>

<style lang="scss" scoped>
.profile-quick-link {
    height: 8rem;
    background-color: white;
    border-bottom: 1rem solid rgb(242, 242, 242);

    display: flex;
    align-items: center;

    >div {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;

        i {
            font-size: 3rem;
            color: var(--color-tint);
        }
        


        .link-box {
            display: flex;
            align-items: center;
            font-size: .6rem;
            gap:.3rem;


            .number {
                font-weight: 600;
                font-size: 1.08rem;
                color:coral;
            }
        }
    }
}
</style>