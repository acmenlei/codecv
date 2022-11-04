<script setup lang='ts'>
import { successMessage } from "@/common/message";
import data from "../common/icon/iconfont.json"

defineProps<{ toggle: boolean }>()

type Icon = typeof data.glyphs[0];

const clipborad = (item: Icon) => {
  successMessage('已复制到剪贴板，你可以直接粘贴')
  navigator.clipboard.writeText(`icon:${item.name} `)
}
</script>

<template>
  <div id="toolTip">
    <slot></slot>
    <div v-show="toggle" class="render-modal">
      <i :class="['iconfont', `icon-${item.name}`]" @click="clipborad(item)" v-for="item in data.glyphs">
        <p>{{ item.name }}</p>
      </i>
    </div>
    <div v-show="toggle" class="arrow"></div>
  </div>
</template>

<style lang='scss' scoped>
#toolTip {
  position: relative;
  z-index: 999;

  .arrow {
    position: absolute;
    content: "";
    border: 10px solid transparent;
    border-bottom-color: #fff;
    top: 32px;
    left: 50%;
  }

  .render-modal {
    line-height: 20px;
    position: absolute;
    background: #fff;
    padding: 10px;
    color: #333;
    box-shadow: 0 0 5px #ccc;
    border-radius: 5px;
    top: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }

  i {
    font-size: 20px;
    padding: 10px;

    &:hover {
      opacity: .8;
    }

    p {
      font-size: 14px;
    }
  }
}
</style>