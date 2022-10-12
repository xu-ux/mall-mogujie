<template>
    <div class="tabbar-list">
        
            <tabbar-item :item="item" v-for="item in itemList" :key="item.title" />
 
    </div>
</template>

<script>
    import TabbarItem from './TabbarItem.vue'
    export default {
        name:"TabbarItemList",
        props:{
            itemList:{
                type: Array,
                required: true
            }
        },
        components:{
            TabbarItem
        }
    }
</script>

<style lang="scss" scoped>
.tabbar-list {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
}
</style>