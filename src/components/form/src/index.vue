<template>
  <div>
    <el-form ref="form" v-if="model">
      <template v-for="(item, index) in options" :key="index">
        <el-form-item
          v-if="!item.children || !item.children!.length"
          :prop="item.prop"
          :label="item.label"
        >
          <component
            v-if="item.type !== 'upload' && item.type !== 'editor'"
            :placeholder="item.placeholder"
            v-bind="item.attrs"
            :is="`el-${item.type}`"
            v-model="model[item.prop!]"
          ></component>
        </el-form-item>
      </template>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { PropType, ref, onMounted, watch, nextTick } from "vue";
import { FormInstance, FormOptions } from "./types/types";

let model = ref<any>(null);
let rules = ref<any>(null)
let form = ref<FormInstance | null>()
let edit = ref()

let props = defineProps({
  // 表单的配置项
  options: {
    type: Array as PropType<FormOptions[]>,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
</style>