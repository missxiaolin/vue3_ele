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
            <el-option
              v-for="item in options"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-col>
      </el-row>
      <template v-if="radioValue === '按城市'">
        <div class="city">
          <!--  <div v-for="(value, key) in cities">{{key}}</div> -->
          <!-- 字母区域 -->
          <div
            class="city-item"
            @click="clickChat(item)"
            v-for="(item, index) in Object.keys(cities)"
            :key="index"
          >
            {{ item }}
          </div>
          <el-scrollbar max-height="300px">
            <template v-for="(value, key) in cities" :key="key">
              <el-row style="margin-bottom: 10px" :id="key">
                <el-col :span="2">{{ key }}:</el-col>
                <el-col :span="22" class="city-name">
                  <div
                    @click="clickItem(item)"
                    class="city-name-item"
                    v-for="item in value"
                    :key="item.id"
                  >
                    <div>{{ item.name }}</div>
                  </div>
                </el-col>
              </el-row>
            </template>
          </el-scrollbar>
        </div>
      </template>
      <template v-else>
        <div class="province">
          <div
            class="province-item"
            v-for="(item, index) in Object.keys(provinces)"
            :key="index"
            @click="clickChat(item)"
          >
            {{ item }}
          </div>
        </div>
        <el-scrollbar max-height="300px">
          <template
            v-for="(item, index) in Object.values(provinces)"
            :key="index"
          >
            <template v-for="(item1, index1) in item" :key="index1">
              <el-row style="margin-bottom: 10px" :id="item1.id">
                <el-col :span="3">{{ item1.name }}:</el-col>
                <el-col :span="21" class="province-name">
                  <div
                    class="province-name-item"
                    v-for="(item2, index2) in item1.data"
                    :key="index2"
                  >
                    <div @click="clickProvince(item2)">{{ item2 }}</div>
                  </div>
                </el-col>
              </el-row>
            </template>
          </template>
        </el-scrollbar>
      </template>
    </div>
  </el-popover>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import city from "../lib/city";
import { City } from "./types";
import province from "../lib/province.json";

// 最终选择的结果
let result = ref<string>("请选择");
// 控制弹出层的显示
let visible = ref<boolean>(false);
// 单选框的值 按城市还是按省份选择
let radioValue = ref<string>("按城市");
// 下拉框的值 搜索下拉框
let selectValue = ref<string>("");
// 下拉框显示城市的数据
let options = ref<City[]>([]);
// 所有的城市数据
let cities = ref(city.cities);
// 所有省份的数据
let provinces = ref(province);
// 所有的城市数据
let allCity = ref<City[]>([]);

let changeSelect = (val: number) => {};

// 自定义搜索过滤
let filterMethod = (val: string) => {};

let clickChat = (item: string) => {};

let clickItem = (item: City) => {};

let clickProvince = (item: string) => {
  
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