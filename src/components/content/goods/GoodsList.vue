<template>
  <div class="goods">
    <goods-list-item v-for="(item, index) in goods" :key="index" :goods-item="item"></goods-list-item>

    {{goods}}
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  },
  name:'GoodsList',
  components:{
    GoodsListItem
  }
}
</script>

<style>
  .goods{
    display: flex;
    flex-wrap: wrap;
    /* 两边对齐 */
    justify-content: space-around;

    /* 微调 */
    padding: 2px;
  }
</style>