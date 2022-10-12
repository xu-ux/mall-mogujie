<template>
    <div class="profile-login">

        <div class="logo">
            <img :src="userInfo.logo ? userInfo.logo : require('@/assets/img/profile/avatar.jpg')" />
        </div>
        <div class="info" >
            <div>{{userInfo.nickname}}</div>
            <div>账号：{{userInfo.username}}</div>
        </div>
        <div class="more">
            <i class="iconfont icon-right"></i>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'ProfileLogin',
        props: {
            userInfo: {
                type: Object,
                default: {}
            }
        }

    }
</script>

<style lang="scss" scoped>
.profile-login {

    width: 100vw;
    height: 5rem;
    padding: 0 .5rem;
    color: white;
    background-color: var(--color-tint);

    display: flex;
    align-items: center;

    .logo {

        flex: 2;

        img {
            width: 3rem;
            height: 3rem;
            border-radius: 3rem;
        }

    }

    .info {
        flex: 6;
        display: flex;
        flex-direction: column;
        gap: .5rem;

        div:nth-child(1) {
            font-size: 1.2rem;
            font-weight: 500;
        }

        div:nth-child(2) {
            font-size: .9rem;
        }
    }


    .more {
        flex: 2;
        display: flex;
        justify-content: flex-end;

        i {
            font-size: 2rem;
        }
    }
}
</style>