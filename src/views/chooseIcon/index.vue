<template>
    <l-choose-icon :title="title" v-model:visible="visible">选择图标</l-choose-icon>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
let title = ref('选择图标')
let visible = ref<boolean>(false)

</script>

<style lang="scss" scoped>
</style>