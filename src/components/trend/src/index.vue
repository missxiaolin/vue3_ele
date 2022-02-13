<template>
  <div class="trend">
    <div class="text">
      {{ text }}
    </div>
    <div class="icon">
      <el-icon-arrowup
        :style="{ color: upIconColor }"
        v-if="type == 'up'"
      ></el-icon-arrowup>
      <el-icon-arrowdown
        :style="{ color: downIconColor }"
        v-else
      ></el-icon-arrowdown>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

let props = defineProps({
  // 上升（up）还是下降(down)
  type: {
    type: String,
    default: "up",
  },
  // 趋势显示的文字
  text: {
    type: String,
    default: "文字",
  },
  upIconColor: {
    type: String,
    default: "#f5222d",
  },
  downIconColor: {
    type: String,
    default: "#f5222d",
  },
});
</script>

<style lang="scss" scoped>
.trend {
  display: flex;
  align-items: center;
  .text {
    font-size: 12px;
    margin-trim: 4px;
  }
  .icon {
    svg {
      width: 0.8em;
      height: 0.8em;
    }
  }
}
</style>