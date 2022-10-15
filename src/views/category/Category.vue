<template>
    <div id="category">

        <!-- 导航 -->
        <nav-bar class="category-nav-bar">
            <div slot="center">分类</div>
        </nav-bar>

        <div v-if="categoryList" class="container" >

            <category-left :clist="categoryList" @change="changeCategory" ref="mainCategory"/>
            <category-right :sList="categoryItem" ref="subCategory" />

        </div>

        <empty v-else class="empty-container">
            <i class="iconfont icon-cart"></i>
            <span>分类是空的哦！</span>
        </empty>

    </div>
</template>

<script>
// 顶部栏
import NavBar from '@/components/common/navbar/NavBar.vue';
// 空数据
import Empty from '@/components/content/empty/Empty.vue';

// 分类左部分类目
import CategoryLeft from './child/CategoryLeft.vue';

// 分类右部分类目商品条目
import CategoryRight from './child/CategoryRight.vue';

// 接口
import { getCategory, getCategoryItem } from '@/network/category.js'

export default {
    name: "Category",
    data() {
        return {
            categoryList: null,
            categoryItem: null,
            maitKey: null,
        }
    },
    components: {
        NavBar,
        Empty,
        CategoryLeft,
        CategoryRight
    },
    created() {

        getCategory().then(res => {
            
            this.categoryList = res.data.category.list

            if ( this.categoryList && this.categoryList.length > 0) {
                this.maitKey = this.categoryList[0].maitKey

                this.getSubCategory(this.maitKey)

                setTimeout(()=>{this.$refs.mainCategory.refresh()},500)
                setTimeout(()=>{this.$refs.subCategory.refresh()},1000)
            }
            

        })

    },

    methods: {
        // 获取类目的商品条目
        async getSubCategory(maitKey) {
            return await getCategoryItem(maitKey).then(res => {

                this.categoryItem = res.data.list
                
                return res.data.list
            })

        },
        // 变更分类
        changeCategory(maitKey){
            this.maitKey = maitKey

            this.getSubCategory(maitKey).then( () => {
                this.$refs.subCategory.refresh()
            })

        }
    }

} 
</script>

<style lang="scss" scoped>
@import "@/assets/css/theme.scss";

#category {
    padding-top: $nav-bar-height;
    padding-bottom: $tab-bar-height;
    overflow-y: scroll;
    height: 100vh;

    
    .category-nav-bar {

        background-color: var(--color-tint);
        color: white;
    }



    .container {
        display: flex;
        height: 100%;
    }
}

.empty-container {


    i {
        font-size: 3rem;
    }

    span {
        font-size: 1.5rem;
    }

}
</style>