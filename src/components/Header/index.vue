<!--  -->
<template>
  <van-sticky>
    <van-nav-bar title="原料" left-text="返回" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
      <template #right>
        <van-icon name="plus" size="18" />
      </template> </van-nav-bar
  ></van-sticky>
</template>

<script setup>
import { reactive, ref, toRefs, onBeforeMount, onMounted, defineEmits } from 'vue';
const emit = defineEmits['onClickRight'];
const onClickLeft = () => {
  history.back();
};
const onClickRight = () => {
  emit('onClickRight');
};
</script>
<style lang="scss" scoped></style>
