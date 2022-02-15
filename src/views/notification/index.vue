<template>
  <div>
    <l-notification :value="50">
      <template #default>
        <l-list @clickItem="clickItem" @clickAction="clickAction" :list="list" :actions="actions"></l-list>
      </template>
    </l-notification>
  </div>
</template>

<script lang='ts' setup>
import { list, actions } from './data'

let clickItem = (val: any) => {
  console.log(val)
}
let clickAction = (val: any) => {
  console.log(val)
}
</script>

<style lang='scss' scoped>
</style>