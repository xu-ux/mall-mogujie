<template>
    <div class="category-left">

        <scroll class="scroll" ref="scroller">
            <ul class="left-container">
                <li v-for="(item,index) in clist" :key="item.maitKey" @click="clickCategory(item,index)" :class="{ active: index === currentIndex }">{{item.title}}</li>
            </ul>
        </scroll>



    </div>
</template>

<script>
    import Scroll from '@/components/common/scroll/Scroll.vue'
    export default {
        name: 'CategoryLeft',
        components: {
            Scroll
        },
        data() {
            return {
                currentIndex: 0,
            }
        },
        props: {
            clist: {
                type: Array,
                default: []
            }
        },
        methods: {
            clickCategory(item,index) {
                this.currentIndex = index
                this.$emit('change',item.maitKey)
            },
            refresh() {
                this.$refs.scroller.refresh()
            }
        }
    }
</script>

<style lang="scss" scoped>

.category-left {
    border-right: .02rem solid #ddd;
    height: 100%;
    


    ul {

        width: 5.8rem;

        li {
            list-style: none;
            font-size: 1rem;
            padding: .8rem .8rem;
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
    }


    .active {
        color: var(--color-high-text);
        background-color: #f4f4f4;
        font-weight: 600;
    }

    .scroll {
        height: 100%;
        
    }
}

</style>