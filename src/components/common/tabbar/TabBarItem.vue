<template>
<!-- 写在这个地方就不用四个地方都监听了 -->
  <div class="tab-bar-item" @click="itemClick"> 
    <div v-if="!isActive">
      <slot name="icon"></slot>
    </div>
    <div v-else>
      <slot name="icon-active"></slot>
    </div>
    <!-- <div :class="{active:isActive}">
      <slot name="text"></slot>
    </div> -->
    <!-- 修改版本动态绑定样式就方便了改css不显示-->
    <div :style="activeStyle">
      <slot name="text"></slot>
    </div>

  </div>
</template>

<script>
export default {
  name:'TabBarItem',
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  data() {
    return {
      // isActive:false,
    }
  },
  // 动态搞颜色
  computed:{
    isActive(){
      // == -1是没有找到
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      // 卧槽666写法
      return this.isActive ? {color : this.activeColor} : {}
    }
  },
  methods: {
    itemClick(){
      // 跳转路由
      this.$router.replace(this.path)
    }
  },
}
</script>

<style>
  .tab-bar-item{
    /* 等分 */
    flex: 1; 
    text-align: center;
    /* 大家都规定的这个49px 移动端里都是这样*/
    /* 撑起父元素 */
    height: 49px;
    
  }
  .tab-bar-item img{
    width: 24px;
    margin-top: 3px;
    vertical-align: middle;
  }
  .active{
    color: red;
  }
</style>