<script setup lang="ts">
import RichEditor from './rich-editor/editor.vue'
import MDEditor from './md-editor/editor.vue'
import { useResumeType, useAvatar } from '../../hook'
import { reactiveWritable, useMoveLayout, injectWritableModeAvatarEvent } from './hook'

const { resumeType } = useResumeType()
const { left, down } = useMoveLayout()

const { setAvatar } = useAvatar(resumeType.value)
const { writable } = reactiveWritable(resumeType.value)

injectWritableModeAvatarEvent(writable, setAvatar)
</script>

<template>
  <div class="markdown-edit noto-sans-sc">
    <RichEditor :left="left" v-if="writable" />
    <MDEditor :left="left" v-if="!writable" />

    <div class="move absolute" @mousedown="down">
      <span>.</span>
      <span>.</span>
      <span>.</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.markdown-edit {
  position: relative;
  border: none;
  outline: none;
  font-size: 15px;
  margin: 0 0 10px 10px;
  border-radius: 10px;
}
.move {
  width: 10px;
  height: 100%;
  top: 0;
  right: -10px;
  z-index: 2;
  border-radius: 10px;
  background: var(--body-background);
  cursor: col-resize;

  &:hover {
    background: var(--theme);
  }

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  span {
    font-weight: bold;
    opacity: 0.7;
    margin-top: -10px;
  }
}
</style>
