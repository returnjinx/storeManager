<!--  -->
<template>
  <van-grid :column-num="3" :clickable="true">
    <van-grid-item :icon="i.icon" :text="i.text" :to="i.path" v-for="(i, index) in list" />
  </van-grid>
</template>

<script setup lang="ts">
import { reactive, toRefs, ref, onBeforeMount, onMounted } from 'vue';
const list = ref([
  {
    icon: 'cash-back-record',
    text: '原料',
    path: '/staple',
  },
  // {
  //   icon: 'after-sale',
  //   text: '流水',
  // },
  {
    icon: 'records',
    text: '入库',
    path: '/productIn',
  },
  {
    icon: 'logistics',
    text: '出库',
    path: '/staple',
  },
  {
    icon: 'friends-o',
    text: '人员',
    path: '/member',
  },
]);
</script>
<style lang="scss" scoped>
.sort-item {
  width: 100%;
  height: 1.3333rem;
}
body {
  background: var(--sm-mian-color);
  background: #f2f2f2;
}
</style>
