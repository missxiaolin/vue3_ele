<template>
  <div>table</div>
</template>

<script lang="ts" setup>
import { PropType, ref } from "vue";

let props = defineProps({
  // 表格配置选项
  options: {
    type: Array as PropType<TableOptions[]>,
    required: true,
  },
  // 表格数据
  data: {
    type: Array,
    required: true,
  },
  // 加载文案
  elementLoadingText: {
    type: String,
  },
  // 加载图标名
  elementLoadingSpinner: {
    type: String,
  },
  // 加载背景颜色
  elementLoadingBackground: {
    type: String,
  },
  // 加载图标是svg
  elementLoadingSvg: {
    type: String,
  },
  // 加载团是svg的配置
  elementLoadingSvgViewBox: {
    type: String,
  },
  // 编辑显示的图标
  editIcon: {
    type: String,
    default: "Edit",
  },
  // 是否可以编辑行
  isEditRow: {
    type: Boolean,
    default: false,
  },
  // 编辑行按钮的标识
  editRowIndex: {
    type: String,
    default: "",
  },
  // 是否显示分页
  pagination: {
    type: Boolean,
    default: false,
  },
  // 显示分页的对齐方式
  paginationAlign: {
    type: String as PropType<"left" | "center" | "right">,
    default: "left",
  },
  // 当前是第几页
  currentPage: {
    type: Number,
    default: 1,
  },
  // 当前一页多少条数据
  pageSize: {
    type: Number,
    default: 10,
  },
  // 显示分页数据多少条的选项
  pageSizes: {
    type: Array,
    default: () => [10, 20, 30, 40],
  },
  // 数据总条数
  total: {
    type: Number,
    default: 0,
  },
});
</script>

<style lang="scss" scoped>
</style>