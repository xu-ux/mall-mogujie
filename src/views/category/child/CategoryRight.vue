<template>
    <div class="category-right">

        <scroll class="scroll" ref="scroller">

            <ul class="right-container">
                <li v-for="(item,index) in sList" :key="item.acm" @click="clickItem(item,index)" >
                    <img v-lazy="item.image" alt="">
                    <p>{{item.title}}</p>
                </li>
            </ul>
        
        </scroll>

    </div>
</template>

<script>
    import Scroll from '@/components/common/scroll/Scroll.vue'
    export default {
        name: 'CategoryRight',
        components: {
            Scroll
        },
        props: {
            sList: {
                type: Array,
                default: []
            }
        },
        methods: {
            clickItem(item,index) {
                console.log(index)
            },
            refresh() {
                this.$refs.scroller.refresh()
            }
        }
    }
</script>

<style lang="scss" scoped>


.category-right {
    width: 100%;
    .right-container {
        display: grid;
        grid-template-columns: 33.33% 33.33% 33.33%;

        li {
            text-align: center;
            padding: 1rem .5rem;

            img {
                width: 3.2rem;
             }

             p {
                font-size: .9rem;
             }
        }


    }

    .scroll {
        width: 100%;
        height: 100%;
    }
}


</style>