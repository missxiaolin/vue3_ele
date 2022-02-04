<template>
  <div>
    <el-button @click="handleClick" type="primary">
        <slot></slot>
    </el-button>
    <el-dialog :title="title" v-model="visible">
        1111
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { watch } from 'vue'
let props = defineProps<{
  // 弹出框标题
  title: string,
  // 弹出框的显示和隐藏
  visible: boolean
}>();

let emits = defineEmits(['update:visible'])

let handleClick = () => {
  emits('update:visible', !props.visible)
};

// 监听数据变化
watch(() => props.visible, val => {
  emits('update:visible', val)
})
</script>

<style lang="scss" scoped>
</style>