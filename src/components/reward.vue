<script setup lang="ts">
import { ref } from 'vue'
import ToastModal from '@/components/toast-modal/toastModal.vue'

const reward = ref(false)
function toggle() {
  reward.value = !reward.value
}
</script>

<template>
  <button class="reward btn" @click="toggle"><i class="iconfont icon-moneybagfill"></i>打赏</button>
  <ToastModal v-if="reward" :flag="reward" @close="toggle">
    <h5>PS：该项目作为免费的开源项目使用，</h5>
    <h5>
      如果你觉得对你有帮助，可以请作者喝杯奶茶支持一下，非常感谢
      <i class="iconfont icon-emoji"></i>
    </h5>
    <div class="reward-item wechat">
      <img src="/docs/wechat.jpg" alt="微信收款码" />
      <h4>微信收款码</h4>
    </div>
    <div class="reward-item alipay">
      <img src="/docs/alipay.jpg" alt="支付宝收款码" />
      <h4>支付宝收款码</h4>
    </div>
  </ToastModal>
</template>

<style lang="scss" scoped>
.reward {
  display: inline-flex;
  align-items: center;
  padding: 8px 10px;
  justify-content: center;
  background: var(--strong-color);
  color: #fffff8;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  margin-right: 10px;
  i {
    margin-right: 5px;
  }
  &:hover {
    opacity: 0.8;
  }
}

h5 {
  color: orangered;
}
.reward-item {
  display: inline-block;
  &.alipay {
    img {
      transform: scale(0.9) translateY(10px);
    }
  }
  img {
    width: 200px;
  }
}
</style>
