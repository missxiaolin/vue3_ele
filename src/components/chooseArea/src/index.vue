<template>
    <div>
        <el-select clearable placeholder="请选择省份" v-model="province">
            <el-option v-for="item in areas" :key="item.code" :value="item.code" :label="item.name">{{item.name}}</el-option>
        </el-select>
        <el-select clearable :disabled="!province" style="margin: 0 10px;" placeholder="请选择城市" v-model="city">
            <el-option v-for="item in selectCity" :key="item.code" :value="item.code" :label="item.name">{{item.name}}</el-option>
        </el-select>
        <el-select clearable :disabled="!province || !city" placeholder="请选择区域" v-model="area">
            <el-option v-for="item in selectArea" :key="item.code" :value="item.code" :label="item.name">{{item.name}}</el-option>
        </el-select>
    </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import allArea from '../lib/pc-code.json'

let province = ref<string>('')
let city = ref<string>('')
let area = ref<string>('')
let areas = ref(allArea)

/**
 * 城市
 */
let selectCity = ref<any[]>([])
watch(() => province.value, val => {
    if (val) {
        let cities = areas.value.find((item) => item.code === province.value)!.children
        selectCity.value = cities
    }
    city.value = ''
    area.value = ''
})

/**
 * 区域
 */
let selectArea = ref<any>([])
watch(() => city.value, val => {
    if (val) {
        console.log(selectCity.value)
        let area = selectCity.value.find(item => item.code === city.value).children
        selectArea.value = area
    }
    area.value = ''
})

</script>

<style lang="scss" scoped>
    
</style>