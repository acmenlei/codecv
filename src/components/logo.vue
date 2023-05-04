<script setup lang="ts">
import { useDark } from '@vueuse/core'
import { computed } from 'vue'

const isDark = useDark()
const logo = computed(() => (isDark.value ? '/logo-dark.svg' : '/logo.svg'))
</script>

<template>
  <div class="logo" @click="$router.replace('/home')" data-aos="slide-right">
    <img :src="logo" height="60" alt="logo" />
  </div>
</template>

<style lang="scss" socped>
.logo {
  line-height: 0;
  img {
    transform: scale(1.5);
  }
}
</style>
