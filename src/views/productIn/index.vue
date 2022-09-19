<!--  -->
<template>
  <div>
    <navHeader title="入库列表" @onClickRight="onClickRight" v-bind="headerOptions" />
    <van-card num="2" price="2.00" desc="描述信息" title="商品标题" thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg">
      <template #tags>
        <van-tag plain type="danger">标签</van-tag>
        <van-tag plain type="danger">标签</van-tag>
      </template>
      <template #footer>
        <van-button size="mini">按钮</van-button>
        <van-button size="mini">按钮</van-button>
      </template>
    </van-card>
  </div>
</template>

<script setup>
import { reactive, ref, toRefs, onBeforeMount, onMounted } from 'vue';
import navHeader from '@/components/Header/index.vue';

const headerOptions = ref({
  showRight: true,
});
</script>
<style lang="scss" scoped></style>
