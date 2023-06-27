<script setup lang="ts">
import ToastModal from '@/components/toast-modal/toastModal.vue'

defineProps<{ open: boolean }>()
const emit = defineEmits(['toggle'])
</script>

<template>
  <toast-modal width="260px" v-if="open" :flag="open" @close="emit('toggle')">
    <img width="200" src="@/assets/img/wechat.jpg" alt="我的微信" />
    <h6>有任何问题都可以通过微信联系我</h6>
  </toast-modal>
</template>

<style lang="scss" scoped>
h6 {
  color: var(--strong-color);
}
</style>
