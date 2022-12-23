<!--  -->
<template>
  <div>
    <navHeader title="人员列表" @onClickRight="onClickRight" v-bind="headerOptions" />
    <van-index-bar>
      <template v-for="(i, key, index) in list">
        <van-index-anchor :index="key" />
        <van-cell v-for="(j, j_index) in i" :title="j.name" />
      </template>
    </van-index-bar>
  </div>
</template>

<script setup>
import Pinyin from 'pinyin';
import { reactive, toRefs, onBeforeMount, onMounted, ref } from 'vue';
import navHeader from '@/components/Header/index.vue';
import router from '@/router';
import { http } from '@/utils/request';
// let nameList = reactive(['安安', '啥见客户', '接口', '就几家', '其味无穷', '幸锦星', '钟源数据库']);
let nameList = reactive([]);

let list = reactive({});
const headerOptions = ref({
  showRight: true,
});
const wordSort = (arr) => {
  return arr.sort(function (s1, s2) {
    let x1 = s1.toUpperCase();
    let x2 = s2.toUpperCase();
    if (x1 < x2) {
      return -1;
    }
    if (x1 > x2) {
      return 1;
    }
    return 0;
  });
};
const initList = (str) => {
  nameList.sort((a, b) => a.name.localeCompare(b.name, 'zh')); //a~z 排序

  nameList.forEach((item) => {
    let letter = Pinyin(item.name, { style: 'FIRST_LETTER' })[0][0].toUpperCase();
    // console.log(letter);
    if (!list[letter]) {
      list[letter] = [];
    }
    list[letter].push(item);
  });

  console.log(list);
};

const onClickLeft = () => {
  history.back();
};
const onClickRight = () => {
  router.push('/member/info');
};
const getMemberList = () => {
  http
    .get(`/api/getMemberList?page=1&pagesize=999`)
    .then((res) => {
      // console.log(res.data);
      nameList = res.data;
      // console.log(nameList);

      initList();
    })
    .catch((err) => {
      console.log(err);
    });
};
onMounted(() => {
  getMemberList();
});
</script>
<style lang="scss" scoped></style>
