<script setup lang="ts">
import { successMessage } from '@/common/message'
import data from '@/assets/icon/iconfont.json'
import { ref } from 'vue'

type Icon = (typeof data.glyphs)[0]

const clipborad = (item: Icon) => {
  successMessage('已复制到剪贴板，你可以直接粘贴')
  navigator.clipboard.writeText(`icon:${item.font_class} `)
}
const iconData = ref<Icon[]>(data.glyphs.slice(0, 20))
// console.log(data.glyphs.length)
const pageChange = function (page: number) {
  iconData.value = data.glyphs.slice((page - 1) * 20, page * 20)
}
</script>

<template>
  <div class="render-modal">
    <div class="render-modal-icons">
      <i
        v-for="(item, idx) in iconData"
        :key="idx"
        :class="['iconfont', `icon-${item.font_class}`]"
        @click="clipborad(item)"
      >
        <p>{{ item.font_class }}</p>
      </i>
    </div>
    <el-pagination
      :page-size="20"
      background
      layout="prev, pager, next"
      :total="data.glyphs.length"
      class="mt-4 page"
      @current-change="pageChange"
    />
  </div>
</template>

<style lang="scss" scoped>
.render-modal {
  .render-modal-icons {
    line-height: 20px;
    padding: 10px;
    background: var(--background);
    color: var(--font-color);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }

  i {
    font-size: 20px;
    height: 60px;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }

    p {
      text-align: center;
      font-size: 14px;
    }
  }

  .page {
    background: var(--background);
  }
}
</style>
