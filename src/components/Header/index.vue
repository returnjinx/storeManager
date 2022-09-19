<!--  -->
<template>
  <van-sticky>
    <van-nav-bar :title="props.title" left-text="返回" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
      <template v-if="props.showRight" #right>
        <van-icon :name="props.rightIcon" size="18" />
      </template> </van-nav-bar
  ></van-sticky>
</template>

<script setup>
import { reactive, ref, toRefs, onBeforeMount, onMounted, defineProps, defineEmits } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: '标题',
  },
  showRight: {
    type: Boolean,
    default: false,
  },
  rightIcon: {
    type: String,
    default: 'plus',
  },
});
const emit = defineEmits(['onClickRight', 'onClickLeft']);
const onClickLeft = () => {
  console.log(emit);
  history.back();
};
const onClickRight = () => {
  emit('onClickRight');
};
</script>
<style lang="scss" scoped></style>
