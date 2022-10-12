<template>
    <div class="tab-control">
        <div v-for="(title,index) in titles" :key="title" class="box">
            <div class="item" 
                :class="{active:index === currentIndex}" 
                @click="itemClick(index)"
                >{{title}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TabControl",
        data() {
            return {
                currentIndex: 0
            }
        },
        methods:{

            itemClick(index){
                this.currentIndex = index
                // 发射事件出去
                this.$emit("tab-item-click", index)
            }

        },
        props:{
            titles:{
                type: Array,
                default() {
                    return []
                }
            }
        }
            
    }
</script>

<style lang="scss" scoped>

    .tab-control {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-around;
        margin-top: 1.5rem;
        background-color: #fff;
        z-index: 1;
       

        .box {
            padding: .5rem 1rem .5rem 1rem;
            height: 3rem;
            text-align: center;
            display: flex;
            align-items: center;

            .item {
                font-size: 1rem;
                height: 2rem;
                line-height: 2rem;
                padding: 0px 5px 0px 5px;
                
            }

            
        }
    }

    .tab-control .active {
        color: var(--color-high-text);
        border-bottom: 2px solid var(--color-tint);
    }

    

</style>