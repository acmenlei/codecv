<script setup lang="ts">
import outNav from '@/common/nav/outNav'
</script>

<template>
  <ul class="nav">
    <li
      v-for="(navItem, idx) in outNav"
      :key="idx"
      data-aos="slide-left"
      :class="{ checked: $route.path.startsWith(navItem.path) }"
    >
      <router-link v-if="!navItem.tooltip" :to="navItem.path">{{ navItem.name }}</router-link>
      <span v-else>{{ navItem.name }}</span>
    </li>
  </ul>
</template>
