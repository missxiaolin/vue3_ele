<template>
    <div id="calendar"></div>
</template>

<script lang="ts" setup>
// 在vite里面使用fullcalendar 需要引入一个包
import '@fullcalendar/core/vdom'
import { Calendar, EventClickArg, EventContentArg } from '@fullcalendar/core'
import daygridPlugin from '@fullcalendar/daygrid'
import interactionPlugin , {DateClickArg} from '@fullcalendar/interaction'
import { ref, onMounted, PropType, watch } from 'vue';
import {EventItem} from './types'

let props = defineProps({
  // 日历显示的语言
  local: {
    type: String,
    default: 'zh-cn'
  },
  // 视图模式
  initialView: {
    type: String,
    default: 'dayGridMonth'
  },
  // 按钮文字
  buttonText: {
    type: Object,
    default: () => {
      return {
        today: '今天',
        month: '月',
        week: '周',
        day: '日',
        prevYear: '上一年',
        nextYear: '下一年',
        prev: '上一月',
        next: '下一月'
      }
    }
  },
  // 头部工具栏
  headerToolbar: {
    type: Object,
    default: () => {
      return {
        start: 'title',
        center: '',
        end: 'prev today next'
      }
    }
  },
  // 底部工具栏
  footerToolbar: {
    type: Object
  },
  // 日历事件
  events: {
    type: Array as PropType<EventItem[]>,
    default: () => []
  },
  // 自定义渲染内容方法
  eventContent: {
    type: Function
  }
})

let emits = defineEmits(['date-click', 'event-click'])

// 日历对象
let calendar = ref<Calendar>()

let renderCalendar = () => {
    
}

onMounted(() => {
    renderCalendar()
})

</script>

<style lang="scss" scoped>
    
</style>