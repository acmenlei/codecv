<script setup lang='ts'>
import { timeLine } from "./constant";

</script>

<template>
  <div class="time-line" data-aos="fade-right">
    <el-timeline>
      <el-timeline-item type="primary" v-for="(line, index) in timeLine" :key="index" :timestamp="line.timestamp">
        <p>{{ line.version }}</p>
        <p>{{ line.content }}</p>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<style lang='scss' scoped>
.time-line {
  width: 1123px;
  margin: 20px auto;
  padding: 40px;
}
</style>