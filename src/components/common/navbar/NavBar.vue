<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style>
  .nav-bar{
    display: flex;
    /* 导航一般都是44,直接line-height不但可以撑起来也可以直接对齐,但是这样必须要有文字,这是针对字体的 */
    height: 44px;
    line-height: 44px;
    text-align: center;
    box-shadow:0 1px 1px rgba(100, 100, 100, 0.1);
  }
  .left{
    width: 60px;
    /* background-color: red; */
  }
  .center{
    /* 其他的全分给center */
    flex: 1;
    /* background: yellow; */
  }
  .right{
    width: 60px;
    /* background-color: brown; */
  }
</style>