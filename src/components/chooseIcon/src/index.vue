<template>
  <div class="choose-icon-dialog-body-height">
    <el-button @click="handleClick" type="primary">
      <slot></slot>
    </el-button>
    <el-dialog :title="title" v-model="dialogVisible">
      <div class="container">
        <div
          class="item"
          @click="clickItem(item)"
          v-for="(item, index) in Object.keys(ElIcons)"
          :key="index"
        >
          <div class="text">
            <component :is="`el-icon-${toLine(item)}`"></component>
          </div>
          <div class="icon">{{ item }}</div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import * as ElIcons from '@element-plus/icons-vue'
import { toLine } from '../../../utils/index'
import { useCopy } from '../../../hooks/useCopy/index'
import { ref, watch } from 'vue'
let props = defineProps<{
  // 弹出框标题
  title: string,
  // 弹出框的显示和隐藏
  visible: boolean
}>();

let emits = defineEmits(['update:visible'])
// 拷贝一份父组件传递过来的参数
let dialogVisible = ref<boolean>(props.visible)

let handleClick = () => {
  emits('update:visible', !props.visible)
};

let clickItem = (item: string) => {
  let text: string = `<el-icon-${toLine(item)} />`
  useCopy(text)
  dialogVisible.value = false
}

// 监听数据变化
watch(() => props.visible, val => {
  dialogVisible.value = val
})
watch(() => dialogVisible.value, val => {
  emits('update:visible', val)
})
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
}
.item {
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  cursor: pointer;
  font-size: 12px;
  height: 70px;
}
.text {
  font-size: 12px;
}
.icon {
  flex: 1;
}
svg {
  width: 2em;
  height: 2em;
}
</style>