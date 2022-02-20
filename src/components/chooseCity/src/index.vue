<template>
  <el-popover v-model:visible="visible" placement="bottom-start" :width="430">
    <template #reference>
      <div class="result" @click="visible = true">
        <div>{{ result }}</div>
        <div>
          <el-icon-arrowdown :class="{ rotate: visible }"></el-icon-arrowdown>
        </div>
      </div>
    </template>
    <div class="content">
      <el-row>
        <el-col :span="8">
          <el-radio-group v-model="radioValue" size="small">
            <el-radio-button label="按城市"></el-radio-button>
            <el-radio-button label="按省份"></el-radio-button>
          </el-radio-group>
        </el-col>
        <el-col :offset="1" :span="15">
          <el-select
            @change="changeSelect"
            placeholder="请搜索城市"
            size="small"
            v-model="selectValue"
            filterable
            :filter-method="filterMethod"
          >
            <el-option v-for="item in options" :key="item.id" :label="item.name" :value="item.id"></el-option>
          </el-select>
        </el-col>
      </el-row>
    </div>
  </el-popover>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import city from '../lib/city'
import { City } from './types'
import province from '../lib/province.json'

// 最终选择的结果
let result = ref<string>("请选择");
// 控制弹出层的显示
let visible = ref<boolean>(false);
// 单选框的值 按城市还是按省份选择
let radioValue = ref<string>('按城市')
// 下拉框的值 搜索下拉框
let selectValue = ref<string>('')
// 下拉框显示城市的数据
let options = ref<City[]>([])

let changeSelect = (val: number) => {

}

// 自定义搜索过滤
let filterMethod = (val: string) => {

}
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
.city,
.province {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 10px;
  margin-bottom: 10px;
  &-item {
    padding: 3px 6px;
    margin-right: 8px;
    border: 1px solid #eee;
    margin-bottom: 8px;
    cursor: pointer;
  }
}
.city-name,
.province-name {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  .city-name-item,
  .province-name-item {
    margin-right: 6px;
    margin-bottom: 6px;
    cursor: pointer;
  }
}
</style>