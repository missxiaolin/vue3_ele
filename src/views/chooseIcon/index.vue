<template>
    <div>
        <lChooseIcon :title="title" v-model:visible="visible">
            选择图标
        </lChooseIcon>
    </div>
</template>

<script lang="ts" setup>
import lChooseIcon from '../../components/chooseIcon/src/index.vue'
import { ref } from 'vue'
let title = ref('选择图标')
let visible = ref<boolean>(false)

</script>

<style lang="scss" scoped>
    
</style>