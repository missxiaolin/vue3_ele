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
import * as lodash from 'lodash';
import E from "wangeditor"

let props = defineProps({
  // 表单的配置项
  options: {
    type: Array as PropType<FormOptions[]>,
    required: true,
  },
  // 用户自定义上传方法
  httpRequest: {
    type: Function
  }
});

let model = ref<any>(null);
let rules = ref<any>(null)
let form = ref<FormInstance | null>()
let edit = ref()

onMounted(() => {
  initForm()
})

// 监听父组件传递进来的options
watch(() => props.options, () => {
  initForm()
}, { deep: true })

/**
 * 初始化
 */
let initForm = () => {
    if (props.options && props.options.length) {
    let m: any = {}
    let r: any = {}
    props.options.map((item: FormOptions) => {
      m[item.prop!] = item.value
      r[item.prop!] = item.rules
      if (item.type === 'editor') {
        // 初始化富文本
        nextTick(() => {
          if (document.getElementById('editor')) {
            const editor = new E('#editor')
            editor.config.placeholder = item.placeholder!
            editor.create()
            // 初始化富文本的内容
            editor.txt.html(item.value)
            editor.config.onchange = (newHtml: string) => {
              model.value[item.prop!] = newHtml
            }
            edit.value = editor
          }
        })
      }
    })
    model.value = lodash.cloneDeep(m)
    rules.value = lodash.cloneDeep(r)
  }
}

</script>

<style lang="scss" scoped>
</style>