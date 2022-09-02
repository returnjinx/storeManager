<!--  -->
<template>
  <van-row>
    <van-col span="8"><div class="sort-item"></div></van-col>
    <van-col span="8">span: 8</van-col>
    <van-col span="8">span: 8</van-col>
  </van-row>
</template>

<script setup lang="ts">
import { Tabbar, TabbarItem } from 'vant';
import { reactive, toRefs, ref, onBeforeMount, onMounted } from 'vue';
</script>
<style lang="scss" scoped>
.sort-item {
  width: 100%;
  height: 1.3333rem;
  
}
</style>
