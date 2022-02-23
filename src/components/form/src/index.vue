<template>
    <div>
        <el-form ref="form" v-if="model">
            <template v-for="(item, index) in options" :key="index">
                <el-form-item v-if="!item.children || !item.children!.length">
                    
                </el-form-item>
            </template>
        </el-form>
    </div>
</template>

<script lang="ts" setup>
import { PropType, ref, onMounted, watch, nextTick } from 'vue'
import { FormOptions } from './types/types'

let model = ref<any>(null)

let props = defineProps({
    // 表单的配置项
  options: {
    type: Array as PropType<FormOptions[]>,
    required: true
  },
})

</script>

<style lang="scss" scoped>
    
</style>