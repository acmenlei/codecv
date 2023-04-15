<script setup lang='ts'>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

defineProps<{ tabs: Array<string>; button?: string }>();
const emits = defineEmits(['tab-click']),
  tabIndex = ref(0),
  router = useRouter()

function queryList(index: number) {
  tabIndex.value = index;
  emits('tab-click', index); // querylist event
}
</script>

<template>
  <div class="nav-bar flex flex-space-between">
    <ul class="tabs">
      <li :class='["mr-20", "pointer", "none", { checked: tab == tabs[tabIndex] }]' v-for="(tab, idx) in tabs"
        @click="queryList(idx)">{{ tab }}</li>
    </ul>
    <a v-if="button" class="ripple-effect newtemplate-container" @click="router.push('/editor?type=create')"><button
        class="primary cursor btn pointer newtemplate">{{ button }}</button></a>
  </div>
</template>

<style lang='scss' scoped>
.nav-bar {
  padding: 10px 0;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;

  .newtemplate-container {
    margin-right: 40px;

    .newtemplate {
      border-radius: 3px;
      margin-right: 0;
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