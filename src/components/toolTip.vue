<script setup lang='ts'>
import data from "../common/icon/iconfont.json"

defineProps<{ toggle: boolean }>()

type Icon = typeof data.glyphs[0];

const clipborad = (item: Icon) => {
  navigator.clipboard.writeText(`icon:${item.name} `)
}
</script>

<template>
  <div id="toolTip">
    <slot></slot>
    <div v-show="toggle" class="render">
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

  .arrow {
    position: absolute;
    content: "";
    border: 10px solid transparent;
    border-bottom-color: white;
    top: 14px;
    left: 50%;
  }

  .render {
    position: absolute;
    background: white;
    padding: 10px;
    color: #333;
    border: 1px solid #ccc;
    border-radius: 5px;
    top: 30px;
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