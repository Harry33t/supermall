<template>
  <div class="tab-contrl">
    <!-- 如果只是文字不一样就没必要搞插槽了 -->
    <div v-for="(item, index) in titles" :key="index" class="tab-contrl-item" :class="{active : index===currentIndex}" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>

  </div>
</template>

<script>
export default {
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {
      currentIndex:0
    }
  },
  methods: {
    itemClick(index){
      this.currentIndex = index;
      this.$emit('tabClick',index)
    }
  },
  name:'TabControl'
}
</script>

<style>
.tab-contrl{
  display: flex;
  text-align: center;
  font-size: 15px;
}
.tab-contrl-item{
  flex: 1;
  height: 40px;
  line-height: 40px;
}
.tab-contrl-item span{
  padding: 5px;
}
/* 添加颜色 */
.active{
  color: var(--color-high-text);
}
.active span{
  border-bottom: 3px solid goldenrod;
}
</style>