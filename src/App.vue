<template>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
</style>