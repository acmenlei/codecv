<script setup lang="ts">
import { getExportCount } from '@/api/modules/resume'
import { onActivated, ref } from 'vue'

const total = ref(0)
onActivated(() => {
  ;(async () => {
    total.value = parseInt((await getExportCount()) as string)
  })()
})
</script>

<template>
  <div class="export-total" v-show="total">
    累计导出 <strong>{{ total }}</strong> 份
  </div>
</template>

<style lang="scss" scoped>
.export-total {
  font-size: 0.7rem;
  margin: 0 20px;

  strong {
    color: var(--strong-color);
  }
}
</style>
