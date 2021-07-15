<template>
  <div>
    <router-view></router-view>
    <tab-bar :tabNav="tabNav"></tab-bar>
  </div>
</template>
<script>
import home_hig from "@/assets/img/tabbar/home.svg"
import home_nor from "@/assets/img/tabbar/home_active.svg"
import menu_hig from "@/assets/img/tabbar/category.svg"
import menu_nor from "@/assets/img/tabbar/category_active.svg"

import tabBar from "@/components/tabbar"
export default {
  data() {
    return {
      tabNav: [
        {
          path: "/index/tuijian",
          text: "推荐",
          selectImg: home_hig,
          noSelect: home_nor,
        },
        {
          path: "/index/top",
          text: "排行榜",
          selectImg: menu_hig,
          noSelect: menu_nor,
        }
      ],
    };
  },
  components:{
    tabBar
  }
};
</script>
<style lang='stylus' scoped>
@import '~@/stylus/index.styl';
</style>