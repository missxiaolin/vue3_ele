<template>
  <div>
    <el-divider>正常趋势</el-divider>
    <div class="flex">
      <div>
        <l-trend text="营业额"></l-trend>
      </div>
      <div>
        <l-trend text="销售额" type="down"></l-trend>
      </div>
    </div>
    <br />
    <el-divider>颜色翻转</el-divider>
    <div class="flex">
      <div><l-trend text="销售额" reverseColor></l-trend></div>
      <div><l-trend text="营业额" type="down" reverseColor></l-trend></div>
    </div>
    <br />
    <el-divider>自定义图标颜色</el-divider>
    <div class="flex">
      <div>
        <l-trend text="营业额" upIconColor="blue"></l-trend>
      </div>
      <div>
        <l-trend text="销售额" type="down" downIconColor="#123456"></l-trend>
      </div>
    </div>

    <br />
    <el-divider>自定义文字颜色</el-divider>
    <div class="flex">
      <div><l-trend text="营业额" upTextColor="blue"></l-trend></div>
      <div>
        <l-trend text="销售额" type="down" downTextColor="yellow"></l-trend>
      </div>
    </div>
    <br />
    <el-divider>自定义图标</el-divider>
    <div class="flex">
      <div><l-trend upIcon="CaretTop">营业额</l-trend></div>
      <div><l-trend type="down" downIcon="CaretBottom">销售额</l-trend></div>
    </div>
  </div>
</template>

<script lang='ts' setup>
</script>

<style lang='scss' scoped>
.flex {
  display: flex;
  div {
    margin-right: 10px;
  }
}
</style>