<template>
    <div class="home-recommend">
        <div v-for="item in itemList" :key="item.title" class="box">
            <a :href="item.link">
                <img :src="item.image" alt=""/>
            </a>
            <p>{{item.title}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HomeRecommend',
        props:{
            // 需要传入一个数组
            itemList:{
                type: Array,
            }
        },
    }
</script>

<style lang="scss" scoped>
    .home-recommend {

        display: flex;
        flex-wrap: wrap;
        text-align: center;
        padding: 0.8rem 0px  0.8rem;
        border-bottom: 1.5rem solid #eee;


        .box {
            width: 25vw;
            
            img {
                width: 22vw;
            }
        }

        p {
            font-size: .9rem;
        }
    }


</style>