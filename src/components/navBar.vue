<script setup lang='ts'>
import { ref } from 'vue';

defineProps<{ tabs: Array<string> }>();
const emits = defineEmits(['tab-click'])
const tabIndex = ref(0);

function queryList(index: number) {
  tabIndex.value = index;
  emits('tab-click', index); // querylist event
}
</script>

<template>
  <div class="nav-bar">
    <ul class="tabs">
      <li :class='["mr-20", "pointer", "none", { checked: tab == tabs[tabIndex] }]' v-for="(tab, idx) in tabs"
        @click="queryList(idx)">{{ tab }}</li>
    </ul>
  </div>
</template>

<style lang='scss' scoped>
.nav-bar {
  padding: 10px 0;
  margin-bottom: 20px;

  .tabs {
    display: flex;
    align-items: center;

    li {
      padding-bottom: 5px;
    }
  }
}
</style>