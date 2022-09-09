<!--  -->
<template>
  <router-view class="app_view"></router-view>
  <van-tabbar v-model="active">
    <van-tabbar-item v-for="(i, index) in list" :name="i.name" :icon="i.icon" :to="i.path">{{ i.text }}</van-tabbar-item>
    <!-- <van-tabbar-item name="sort" to="/sort" icon="points">分类</van-tabbar-item>
    <van-tabbar-item name="friends" icon="after-sale">金额</van-tabbar-item>
    <van-tabbar-item name="my" icon="user-o" to="/my">我的</van-tabbar-item> -->
  </van-tabbar>
</template>

<script setup lang="ts">
import { reactive, toRefs, ref, onBeforeMount, onMounted } from 'vue';
import router from '@/router';
const active = router.currentRoute.value.name;
const list = ref([
  {
    icon: 'home-o',
    text: '首页',
    name: 'home',
    path: '/main/home',
  },
  {
    icon: 'points',
    text: '分类',
    name: 'sort',
    path: '/main/sort',
  },
  // {
  //   icon: 'chart-trending-o',
  //   text: '流水',
  //   name: 'money',
  //   path: '/money',
  // },
  {
    icon: 'user-o',
    text: '我的',
    name: 'my',
    path: '/main/my',
  },
]);
</script>
<style lang="scss" scoped></style>
