<script setup lang='ts'>

</script>

<template>
  <div id="header">
   <RouterLink to="/editor">我的简历</RouterLink>
  </div>
</template>

<style lang='scss' scoped>
#header {
  background: #fff;
  min-width: 1124px;
  z-index: 1;
  transition: background .5s;
  box-shadow: 0 0 10px 0 #d0d3db;
  height: 60px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 70px;
  text-align: center;

  a {
        color: #555;
        text-decoration: none;
      }
}
</style>