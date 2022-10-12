<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <tabbar>
      <tabbar-item-list :item-list="itemList" />
    </tabbar>

  </div>
</template>

<script>
import Tabbar from 'components/common/tabbar/Tabbar'
import TabbarItemList from 'components/common/tabbar/TabbarItemList.vue'
export default {
  name: "app",
  data() {
    return {
      itemList: [
        {
          img: require("@/assets/img/tabbar/home.svg"),
          activeImg: require("@/assets/img/tabbar/home_active.svg"),
          path: "/home",
          title: "首页"
        },
        {
          img: require("@/assets/img/tabbar/category.svg"),
          activeImg: require("@/assets/img/tabbar/category_active.svg"),
          path: "/category",
          title: "分类"
        },
        {
          img: require("@/assets/img/tabbar/cart.svg"),
          activeImg: require("@/assets/img/tabbar/cart_active.svg"),
          path: "/cart",
          title: "购物车"
        },
        {
          img: require("@/assets/img/tabbar/profile.svg"),
          activeImg: require("@/assets/img/tabbar/profile_active.svg"),
          path: "/profile",
          title: "我的"
        }
      ]
    }
  },
  components: {
    Tabbar,
    TabbarItemList
  },
  created() {

    if (window.sessionStorage) {
      //在页面加载时读取sessionStorage里的状态信息
      if (sessionStorage.getItem('store')) {
        this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem('store'))));
      }

      //在页面刷新时将vuex里的信息保存到sessionStorage里
      window.addEventListener('beforeunload', () => {
        sessionStorage.setItem('store', JSON.stringify(this.$store.state));
      });
    } else {
      console.error('不支持 sessionStorage')
    }


  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/base.css"
</style>