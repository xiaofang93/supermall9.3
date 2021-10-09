<template>
  <div id="tab-bar" >
    <slot id="sddsd"></slot>
  </div>
</template>

<script>

export default {
  name: "TabBar"
};


</script>

// 导入CSS样式文件,因为在<style></style>里面,所以有个固定方法@import
<style>
#tab-bar {
  display: flex;
  background-color: #f6f6f6;

  /* 位于浏览器窗口定位 */
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  border-top: 1px solid rgba(100, 100, 100, 0.1);
  box-shadow: 0 -3px 1px rgba(202, 138, 100, 0.1);
  
}
</style>
