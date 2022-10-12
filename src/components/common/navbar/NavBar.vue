<template>
    <div class="nav-bar">
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="center">
            <slot name="center"></slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style lang="scss" scoped>

    .nav-bar {
        height: 3rem;
        line-height: 3rem;
        display: flex;
        text-align: center;
        box-shadow: 0 1px 1px rgba($color: #000000, $alpha: 0.09);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;

        .left, .right {
            display: flex;
            flex: 2;
            align-items: center;
        }

        .right {
            justify-content: flex-end;
        }

        .center {
            flex: 6;
        }
    }



</style>