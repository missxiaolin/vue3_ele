<template>
  <div>
    <l-form :options="options"></l-form>
  </div>
</template>

<script lang="ts" setup>
import { FormOptions } from "../../components/form/src/types/types";

let options: FormOptions[] = [
  {
    type: "input",
    value: "",
    label: "用户名",
    prop: "username",
    placeholder: "请输入用户名",
    rules: [
      {
        required: true,
        message: "用户名不能为空",
        trigger: "blur",
      },
      {
        min: 2,
        max: 6,
        message: "用户名在2-6位之间",
        trigger: "blur",
      },
    ],
    attrs: {
      clearable: true,
    },
  },
];
</script>

<style lang="scss" scoped>
</style>