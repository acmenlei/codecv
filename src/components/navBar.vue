<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

defineProps<{ tabs: Array<string>; button?: string }>()
const emits = defineEmits(['tab-click']),
  tabIndex = ref(0),
  router = useRouter()

function queryList(index: number) {
  tabIndex.value = index
  emits('tab-click', index) // querylist event
}
</script>

<template>
  <div class="nav-bar flex flex-space-between">
    <ul class="tabs">
      <li
        :key="idx"
        :class="['mr-20', 'pointer', 'none', { checked: tab == tabs[tabIndex] }]"
        v-for="(tab, idx) in tabs"
        @click="queryList(idx)"
      >
        {{ tab }}
      </li>
    </ul>
    <a
      v-if="button"
      class="ripple-effect newtemplate-container"
      @click="router.push('/editor?type=create')"
    >
      <button class="primary cursor btn pointer newtemplate">
        <i class="iconfont icon-diy"></i> {{ button }}
      </button>
    </a>
  </div>
</template>

<style lang="scss" scoped>
.nav-bar {
  padding: 10px 0;
  margin-bottom: 20px;
  display: flex;
  white-space: nowrap;
  justify-content: space-between;

  .newtemplate-container {
    .newtemplate {
      border-radius: 3px;
      margin-right: 0;
      padding: 10px;
    }
  }

  .tabs {
    display: flex;
    align-items: center;

    li {
      padding-bottom: 5px;
    }
  }
}
</style>
