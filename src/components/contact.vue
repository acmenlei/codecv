<script setup lang="ts">
import ToastModal from '@/components/toast-modal/toastModal.vue'

defineProps<{ open: boolean }>()
const emit = defineEmits(['toggle'])
</script>

<template>
  <toast-modal width="360px" v-if="open" :flag="open" @close="emit('toggle')">
    <img width="300" src="@/assets/img/wechat.jpg" alt="我的微信" />
  </toast-modal>
</template>
