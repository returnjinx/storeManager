<!--  -->
<template>
  <div class="staple-box">
    <van-nav-bar title="新增入库" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field v-model="info.product" is-link readonly name="product" label="产品" placeholder="点击选择产品" @click="showPicker = true" :rules="[{ required: true, message: '请选择原料' }]" />
        <van-field
          v-model="makerName"
          is-link
          readonly
          name="makerId"
          label="代工人"
          placeholder="点击选择代工人"
          @click="showMemberPicker = true"
          :rules="[{ required: true, message: '请选择代工人' }]"
        />

        <van-field v-model="info.count" @update:model-value="(value) => computedTotal(value)" name="count" label="数量" type="digit" placeholder="请输入数量" />
        <van-field v-model="info.unitPrice" @update:model-value="(value) => computedTotal(value)" name="unitPrice" label="单价" type="number" placeholder="请输入单价" />
        <van-field readonly v-model="info.total" name="total" label="总价" placeholder="请输入总价" :rules="[{ required: true, message: '请输入总价' }]" />
        <van-field v-model="info.date" is-link readonly name="date" label="日历" placeholder="点击选择日期" @click="showCalendar = true" />
      </van-cell-group>
      <div style="margin: 16px" class="submit-box">
        <van-button round block type="primary" native-type="submit"> 提交 </van-button>
      </div>
    </van-form>
    <!-- <van-calendar v-model:show="showCalendar" @confirm="onConfirm1" /> -->
    <van-popup v-model:show="showPicker" position="bottom">
      <van-picker :columns="columns" @confirm="onConfirm" @cancel="showPicker = false" />
    </van-popup>
    <van-popup v-model:show="showMemberPicker" position="bottom">
      <van-picker :columns="nameList" value-key="name" @confirm="onMemberConfirm" @cancel="showMemberPicker = false" />
    </van-popup>

    <van-popup v-model:show="showCalendar" position="bottom">
      <van-datetime-picker v-model="currentDate" type="datetime" @confirm="onConfirm1" />
    </van-popup>
  </div>
</template>

<script setup>
import { reactive, toRefs, onBeforeMount, onMounted, ref } from 'vue';
import { http } from '@/utils/request';
const showPicker = ref(false);
const showMemberPicker = ref(false);
const columns = ['杭州', '宁波', '温州', '嘉兴', '湖州', '其他'];
const currentDate = ref(new Date());
const nameList = ref([]);
const makerName = ref('');
const getMemberList = () => {
  http
    .get(`/api/getMemberList?page=1&pagesize=999`)
    .then((res) => {
      if (res.status) {
        nameList.value = res.data;
        console.log(nameList.value);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
const result = ref('');
const onConfirm = (value) => {
  info.product = value;
  showPicker.value = false;
};
const onMemberConfirm = (item) => {
  info.makerId = item.id;
  makerName.value = item.name;
  showMemberPicker.value = false;
};
const computedTotal = (val) => {
  info.total = info.count * info.unitPrice;
};
const onSubmit = (data) => {
  data.makerId = info.makerId;
  console.log('submit', data);
  // onClickLeft();
};
const onClickLeft = () => {
  history.back();
};
const showCalendar = ref(false);
const onConfirm1 = (date) => {
  console.log(date);

  info.date = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
  showCalendar.value = false;
};

const info = reactive({
  product: 1,
  makerId: '',
  count: 70,
  unitPrice: '',
  total: 1,
  date: '',
});
onMounted(() => {
  getMemberList();
});
</script>
<style lang="scss" scoped>
.staple-box {
  .van-form {
    margin-top: 10px;
  }
}
</style>
