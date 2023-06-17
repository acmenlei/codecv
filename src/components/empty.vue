<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<template>
  <div class="empty content-card">
    <img width="150" src="@/assets/svg/empty.svg" alt="空占位符" />
    <p>{{ title }}</p>
  </div>
</template>

<style lang="scss" scoped>
.empty {
  text-align: center;
  color: var(--font-color);
  padding: 40px 0;
  img {
    user-select: none;
    -webkit-user-drag: none;
  }
  p {
    margin-top: 10px;
  }
}
</style>
