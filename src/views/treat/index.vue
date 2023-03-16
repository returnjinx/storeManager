<!--  -->
<template>
  <div>
    <navHeader title="代工列表" @onClickRight="onClickRight" v-bind="headerOptions" />
    <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <!-- <van-cell v-for="item in list" :key="item" :title="item" /> -->
      <!-- <van-cell value="内容" is-link> -->
      <van-cell v-for="item in list" :key="item">
        <template #title>
          <div class="list-box">
            <p class="content">dosomething</p>
            <div class="details">
              <p class="time">2022-09-09</p>
              <p class="price">total</p>
            </div>

            <div class="image-box"></div>
          </div>
        </template>
      </van-cell>
    </van-list>
  </div>
</template>

<script setup>
import { reactive, ref, toRefs, onBeforeMount, onMounted } from 'vue';
import navHeader from '@/components/Header/index.vue';
import router from '@/router';
const list = ref([]);
const loading = ref(false);
const finished = ref(false);
const onClickRight = () => {
  router.push('/treat/info');
};
const headerOptions = ref({
  showRight: true,
});
const onLoad = () => {
  // 异步更新数据
  // setTimeout 仅做示例，真实场景中一般为 ajax 请求
  setTimeout(() => {
    for (let i = 0; i < 10; i++) {
      list.value.push(list.value.length + 1);
    }

    // 加载状态结束
    loading.value = false;

    // 数据全部加载完成
    if (list.value.length >= 40) {
      finished.value = true;
    }
  }, 1000);
};
const onClickLeft = () => {
  history.back();
};
</script>
<style lang="scss" scoped>
.list-box {
  background: #fff;
  .content {
    width: 100%;
    color: #000;
    font-size: 14px;
  }
  .details {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .time {
      color: #222;
      font-size: 12px;
    }
    .price {
      color: var(--van-danger-color);
      font-size: 18px;
      font-weight: bold;
    }
  }
  .image-box {
  }
}
</style>
