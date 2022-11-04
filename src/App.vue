<template>
  <router-view v-slot="{ Component }">
    <keep-alive :max="10" include="editor">
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