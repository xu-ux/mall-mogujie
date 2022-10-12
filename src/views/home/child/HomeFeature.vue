<template>
    <div class="home-feature">
        <img src="@/assets/img/home/recommend_bg.jpg" alt="">
    </div>
</template>

<script>
    export default {
        name:"HomeFeature",
        mounted(){
            
        },
        methods:{
            // imageLoad() {
            //     this.$bus.$emit("img-load")
            // }
        }
    }
</script>

<style lang="scss" scoped>

    .home-feature {

        width: 100vw;


        img {
            width: inherit;
        }

    }

</style>