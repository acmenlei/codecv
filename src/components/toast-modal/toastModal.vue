<script setup lang="ts">
withDefaults(defineProps<{ width?: string; flag: boolean }>(), { width: '500px' })
defineEmits(['close'])
</script>

<template>
  <div class="toast-modal-container center" :style="{ width }">
    <div class="toast-modal" v-if="flag" data-aos="zoom-in">
      <slot></slot>
    </div>
  </div>
  <div class="mask" v-if="flag" @click="$emit('close')"></div>
</template>

<style lang="scss" scoped>
.toast-modal-container {
  z-index: 999;
  position: fixed;

  .toast-modal {
    width: 100%;
    padding: 20px 30px;
    border-radius: 10px;
    background: var(--background);
    color: var(--font-color);
  }
}

.mask {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
}
</style>
