<template>
  <div>
    <l-progress isAnimate :percentage="60"></l-progress>
    <br />
    <l-progress isAnimate status="success" :stroke-width="20" :percentage="60"></l-progress>
    <br />
    <l-progress :time="5000" type="circle" isAnimate :percentage="60"></l-progress>
  </div>
</template>

<script lang='ts' setup>
</script>

<style lang='scss' scoped>
</style>