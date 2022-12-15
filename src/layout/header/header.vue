<script setup lang='ts'>
import Logo from "@/components/logo.vue";
import User from "./components/user.vue";
import Nav from "./components/nav.vue";
import NavMoblie from "./components/navMoblie.vue";
</script>

<template>
  <div class="header-out">
    <div class="header">
      <Logo />
      <Nav />
      <User />
    </div>
    <div class="header-800">
      <NavMoblie />
    </div>
  </div>
</template>

<style lang='scss' scoped>
.header-out {
  width: 100%;
  background: white;
  box-shadow: 0 0 10px 0 #d0d3db;
  height: 60px;
  z-index: 9;
  position: sticky;
  top: 0;

  .header {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
  }
  .header-800 {
    display: none;
  }
}
@media screen and (max-width: 800px) {
  .header-out .header {
    display: none;
  }
  .header-out .header-800 {
    display: block;
  }
}
</style>