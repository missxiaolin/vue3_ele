<template>
  <el-container>
    <el-aside width="auto">
      <navSide :collapse="isCollapse"></navSide>
    </el-aside>
    <el-container>
      <el-header>
        <NavHeader v-model:collapse="isCollapse"></NavHeader>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>


<script lang="ts" setup>
import { ref } from "vue";
import NavHeader from './navHeader/index.vue'
import navSide from './navSide/index.vue'

let isCollapse = ref(false);


</script>

<style lang="scss" scoped>
.el-header {
    padding: 0;
    border-bottom: 1px solid #eee;
}
</style>