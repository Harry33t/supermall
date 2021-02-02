<template>
  <tab-bar>
    <!-- 动态传入颜色,这就是封装 -->
    <tab-bar-item path="/home"  activeColor="blue">
      <template #icon>
        <img src="~assets/img/tabbar/home.svg" alt="" />
      </template>
      <template #icon-active>
        <img src="~assets/img/tabbar/home_active.svg" alt="">
      </template>
      <template #text> <div>首页</div> </template>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="blue">
      <template #icon>
        <img src="~assets/img/tabbar/home.svg" alt="" />
      </template>
       <template #icon-active>
        <img src="~assets/img/tabbar/home_active.svg" alt="">
      </template>
      <template #text> <div>分类</div> </template>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="blue">
      <template #icon>
        <img src="~assets/img/tabbar/home.svg" alt="" />
      </template>
       <template #icon-active>
        <img src="~assets/img/tabbar/home_active.svg" alt="">
      </template>
      <template #text> <div>购物车</div> </template>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="blue">
      <template #icon>
        <img src="~assets/img/tabbar/home.svg" alt="" />
      </template>
       <template #icon-active>
        <img src="~assets/img/tabbar/home_active.svg" alt="">
      </template>
      <template #text> <div>我的</div> </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "../../common/tabbar/TabBar";
import TabBarItem from "../../common/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
</style>