<template>
    <div class="back-top">
        <img src="~assets/img/common/top.png" alt="">
    </div>
</template>

<script>
export default {
    name: 'BackTop',
    method: {

    },
    mounted() {

    },
    destroyed() {
    },
}
</script>

<style lang="scss" scoped>
.back-top {
    position: fixed;
    right: .5rem;
    bottom: 43pt;
    z-index: 100;

    img {
        width: 3.2rem;
        height: 3.2rem;
    }


}


</style>