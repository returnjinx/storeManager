<!--  -->
<template>
  <router-view class="app_view"></router-view>
  <van-tabbar v-model="active">
    <van-tabbar-item name="home" icon="home-o" to="/home">首页</van-tabbar-item>
    <van-tabbar-item name="sort" to="/sort" icon="points">分类</van-tabbar-item>
    <van-tabbar-item name="friends" icon="after-sale">金额</van-tabbar-item>
    <van-tabbar-item name="my" icon="user-o" to="/my">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts">
import { Tabbar, TabbarItem } from 'vant';
import { reactive, toRefs, ref, onBeforeMount, onMounted } from 'vue';
import router from '@/router';

const active = router.currentRoute.value.name;
</script>
<style lang="scss" scoped></style>
