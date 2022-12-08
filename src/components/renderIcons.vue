<script setup lang='ts'>
import { successMessage } from "@/common/message";
import data from "@/assets/icon/iconfont.json"
import { ref } from "vue";

defineProps<{ toggle: boolean }>()

type Icon = typeof data.glyphs[0];

const clipborad = (item: Icon) => {
  successMessage('已复制到剪贴板，你可以直接粘贴')
  navigator.clipboard.writeText(`icon:${item.name} `)
}
const iconData = ref<Icon[]>(data.glyphs.slice(0, 20));
console.log(data.glyphs.length)
const pageChange = function (page: number) {
  const start = (page - 1) * 20, end = start + 20;
  iconData.value = data.glyphs.slice(start, end);
} 
</script>

<template>
  <div id="toolTip">
    <slot></slot>
    <div class="render-modal" v-if="toggle">
      <div class="render-modal-icons">
        <i :class="['iconfont', `icon-${item.name}`]" @click="clipborad(item)" v-for="item in iconData">
          <p>{{ item.name }}</p>
        </i>
      </div>
      <el-pagination :page-size="20" background
        layout="prev, pager, next" :total="data.glyphs.length" class="mt-4 page" @current-change="pageChange" />
    </div>
  </div>
</template>

<style lang='scss' scoped>
#toolTip {
  position: relative;
  z-index: 999;

  .render-modal {
    position: absolute;
    top: 70px;
    /* box-shadow: 0 0 5px #ccc; */
    border-radius: 5px;

    .render-modal-icons {
      line-height: 20px;
      padding: 10px;
      background: #fff;
      color: #333;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr;
    }

    i {
      font-size: 20px;
      padding: 10px;
      width: 100px;
      height: 60px;

      &:hover {
        opacity: .8;
      }

      p {
        text-align: center;
        font-size: 14px;
      }
    }
    .page {
      background: white;
      padding: 0 20px 20px 20px;
    }
  }

}
</style>