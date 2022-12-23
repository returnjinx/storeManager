<!--  -->
<template>
  <div>
    <banner />
    <div>
      <div class="title">最新动态</div>
      <div class="trends-box">
        <trendList />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Tabbar, TabbarItem } from 'vant';
import { reactive, toRefs, ref, onBeforeMount, onMounted } from 'vue';
import trendList from './trends/list.vue';
import banner from './trends/banner.vue';

import { http } from '@/utils/request';

const check = () => {
  http.get('/api/checkLogin').then((res) => {
    // if (res.status == 1) {
    // }
  });
};
onMounted(() => {
  check();
});
</script>
<style lang="scss" scoped>
.trends-box {
  width: 100%;
  height: 50vh;
}
.title {
  font-size: 14px;
  font-weight: bold;
  color: var(--van-primary-color);
  padding: 5px 10px;
}
</style>
