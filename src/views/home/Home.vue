<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template #center>
        <div>
          购物车
         </div>
      </template>
    </nav-bar>

   <!-- 购物车 -->
   <home-swiper :banners="banners"></home-swiper>
   <!--  -->
   <recommend-view :recommends="recommends"></recommend-view>

  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'

// 网络请求
import {getHomeMultidata} from "network/home"

// 直接引用文件，非常方便


export default {
  name:'Home',
  components:{
    NavBar,
    HomeSwiper,
    RecommendView
  },
  data() {
    return {
      // 防止函数调用完以后会被回收，及时函数执行完也不会被垃圾回收
      banners:[],
      recommends:[]
    }
  },
  created() {
    getHomeMultidata().then(res=>{
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })
    // 不能在下面打印测试，因为Promise是异步操作，他们同时执行的
  },
}
</script>

<style>
  .home-nav{
    background-color: var(--color-text);
    color: white;
  }
</style>