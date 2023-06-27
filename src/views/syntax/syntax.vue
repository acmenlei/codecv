<script setup lang="ts">
import MenuBar from '@/components/menu-bar/menu-bar/MenuBar.vue'
import { onMounted, ref } from 'vue'
import '@/assets/highlight.css'
import resumeHelper from './sources/help'

const helper = ref()

onMounted(() => {
  helper.value.innerHTML = resumeHelper
})
</script>

<template>
  <div id="syntax" class="flex" data-aos="fade-right">
    <div class="syntax-helper" ref="helper"></div>
    <menu-bar class="slider" body=".syntax-helper" :style="{ width: '300px' }" />
  </div>
</template>

<style lang="scss" scoped>
#syntax {
  max-width: 1200px;
  margin: 20px auto;
  .slider {
    position: sticky;
    top: 65px;
    border-radius: 10px;
    margin-left: 20px;
  }
  .syntax-helper {
    border-radius: 10px;
    padding: 20px;
    max-width: 800px;
    background: var(--background);
    color: var(--font-color);
  }
}
@media screen and (max-width: 800px) {
  .slider {
    display: none;
  }
}
</style>
