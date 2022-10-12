<template>
    <div class="empty" :style="height" >
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Empty',
        props: {
            height:{
                type: String,
                default: 'height: 100%;'
            }
        }
    }
</script>

<style lang="scss" scoped>
.empty {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    .content {
        display: flex;
        gap:1rem;
        align-items: center;
        color: var(--color-l-text);
    }
}
</style>