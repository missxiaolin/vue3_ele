<template>
  <el-popover v-model:visible="visible" placement="bottom-start" :width="430">
    <div class="content">
        内容
    </div>
    <template #reference>
      <div class="result" @click="visible = true">
        <div>{{ result }}</div>
        <div>{{ result }}</div>
        <div>
          <el-icon-arrowdown :class="{ 'rotate': visible }"></el-icon-arrowdown>
        </div>
      </div>
    </template>
  </el-popover>
</template>

<script lang="ts" setup>
import { ref } from "vue";

// 最终选择的结果
let result = ref<string>("请选择");
// 控制弹出层的显示
let visible = ref<boolean>(false);

</script>

<style lang="scss" scoped>
.result {
  display: flex;
  align-content: center;
  width: fit-content;
  cursor: pointer;
  svg {
    width: 1em;
    height: 1em;
  }
}
.rotate {
  transform: rotate(180deg);
}

.content {
    padding: 6px;
}
</style>