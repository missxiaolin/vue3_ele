<template>
  <template v-if="true">
    <router-view></router-view>
  </template>
  
</template>

<script lang="ts">
import { defineComponent, ref, computed, getCurrentInstance } from "vue";

export default defineComponent({
  setup() {
    const { proxy }: any = getCurrentInstance();
    
    console.log(proxy.$router.currentRoute.value)
  }
})
</script>


<style lang="scss">
@import './styles/ui.scss';
@import './styles/base.scss';
</style>
