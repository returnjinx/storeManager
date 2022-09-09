<!--  -->
<template>
  <div class="staple-box">
    <van-nav-bar title="新增人员" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field v-model="info.name" name="name" label="名称" placeholder="请输入名称" />
        <van-field v-model="info.phoneNum" name="phoneNum" label="手机号码" placeholder="请输入手机号码" />
        <van-field v-model="info.date" is-link readonly name="date" label="日历" placeholder="点击选择日期" @click="showCalendar = true" />
        <van-field v-model="info.address" name="address" label="联系地址" placeholder="请输入联系地址" />
      </van-cell-group>
      <div style="margin: 16px" class="submit-box">
        <van-button round block type="primary" native-type="submit"> 提交 </van-button>
      </div>
    </van-form>

    <van-calendar v-model:show="showCalendar" @confirm="onConfirm" />
  </div>
</template>

<script setup>
import { reactive, toRefs, onBeforeMount, onMounted, ref } from 'vue';

const onSubmit = (values) => {
  console.log('submit', values);
  onClickLeft();
};
const onClickLeft = () => {
  history.back();
};
const showCalendar = ref(false);
const onConfirm = (date) => {
  info.date = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  showCalendar.value = false;
};

const info = reactive({
  name: '',
  phoneNum: '',
  address: '',
  date: '',
});
</script>
<style lang="scss" scoped>
.staple-box {
  .van-form {
    margin-top: 10px;
  }
}
</style>
