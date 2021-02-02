<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:"TabBar"
}
</script>

<style>
   #tab-bar{
    display: flex;
    background-color: #f6f6f6;
    position: fixed;
    /* left和 right保证全部占据 */
    left: 0;
    right: 0;  
    bottom: 0;
  }
</style>