<script setup lang='ts'>
import { timeLine } from "./constant";

</script>

<template>
  <div class="time-line" data-aos="fade-right">
    <h3>历史版本</h3>
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
  max-width: 1200px;
  margin: 30px auto;
  background: #fff;
  padding: 30px;

  h3 {
    margin-bottom: 20px;
  }
}
</style>