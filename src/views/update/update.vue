<script setup lang="ts">
import { timeLine } from './constant'
</script>

<template>
  <div class="time-line noto-sans-sc" data-aos="fade-right">
    <h3>历史版本</h3>
    <el-timeline>
      <el-timeline-item
        type="primary"
        v-for="(line, index) in timeLine"
        :key="index"
        :timestamp="line.timestamp"
      >
        <p>{{ line.version }}</p>
        <p>{{ line.content }}</p>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<style lang="scss" scoped>
.time-line {
  border-radius: 10px;
  max-width: var(--max-width);
  margin: 20px auto;
  background: var(--background);
  color: var(--font-color);
  padding: 30px;

  h3 {
    margin-bottom: 20px;
  }
}
</style>
