<template>
  <el-container>
    <el-aside width="200px">
      <el-menu
        :collapse="isCollapse"
        default-active="2"
        class="el-menu-vertical-demo"
      >
        <el-menu-item index="1">
          <el-icon-menu />
          <span>导航1</span>
        </el-menu-item>
        <el-menu-item index="2">
           <el-icon-menu />
          <span>导航2</span>
        </el-menu-item>
        <el-menu-item index="3">
           <el-icon-menu />
          <span>导航3</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>


<script lang="ts" setup>
</script>

<style lang="scss" scoped>
</style>