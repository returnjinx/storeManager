<!--  -->
<template>
  <div class="staple-box">
    <van-nav-bar title="新增原料" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field v-model="info.material" is-link readonly name="material" label="原料" placeholder="点击选择原料" @click="showPicker = true" :rules="[{ required: true, message: '请选择原料' }]" />
        <van-field v-model="info.supplier" name="supplier" label="供应商" placeholder="请输入供应商" />

        <van-field v-model="info.count" name="count" :rules="[{ required: true, message: '请输入数量' }]" label="数量" placeholder="请输入数量" />
        <van-field v-model="info.unitPrice" name="unitPrice" :rules="[{ required: true, message: '请输入单价' }]" label="单价" placeholder="请输入单价" />
        <van-field v-model="info.total" name="total" label="总价" placeholder="请输入总价" :rules="[{ required: true, message: '请输入总价' }]" />
        <van-field v-model="info.date" is-link readonly name="date" label="日历" placeholder="点击选择日期" @click="showCalendar = true" />
      </van-cell-group>
      <div style="margin: 16px" class="submit-box">
        <van-button round block type="primary" native-type="submit"> 提交 </van-button>
      </div>
    </van-form>
    <van-calendar v-model:show="showCalendar" @confirm="handlerTimer" />
    <van-popup v-model:show="showPicker" position="bottom">
      <van-picker :columns="columns" @confirm="onConfirm" @cancel="showPicker = false" />
    </van-popup>
  </div>
</template>

<script setup>
import { reactive, toRefs, onBeforeMount, onMounted, ref } from 'vue';
import { http } from '@/utils/request';
const showPicker = ref(false);
const columns = ['杭州', '宁波', '温州', '嘉兴', '湖州', '其他'];
const onConfirm = (value) => {
  info.material = value;
  showPicker.value = false;
};
const onSubmit = (data) => {
  console.log('submit', data);

  http.post('/api/saveStaple', data).then((res) => {
    if (res.status == 1) {
      onClickLeft();
    }
  });
};
const onClickLeft = () => {
  history.back();
};
const showCalendar = ref(false);
const handlerTimer = (date) => {
  info.date = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  showCalendar.value = false;
  console.log(info.date);
};

const info = reactive({
  material: '',
  supplier: '',
  count: '',
  unitPrice: '',
  total: '',
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
