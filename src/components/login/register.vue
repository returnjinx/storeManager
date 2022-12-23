<!--  -->
<template>
  <div class="register-box">
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field v-model="phoneNum" name="phonenum" label="账号" placeholder="账号" :rules="[{ required: true, message: '请填写账号' }]" />
        <van-field v-model="nickname" name="nickname" label="密码" placeholder="密码" :rules="[{ required: true, message: '请填写密码' }]" />
        <van-field v-model="password" type="password" name="password" label="密码" placeholder="密码" :rules="[{ required: true, message: '请填写密码' }]" />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit"> 注册 </van-button>
      </div>
    </van-form>
  </div>
</template>

<script setup>
import { reactive, ref, toRefs, onBeforeMount, onMounted } from 'vue';
import { http } from '@/utils/request';
const phonenum = ref('');
const password = ref('');
const nickname = ref('');
const onSubmit = (data) => {
  console.log('submit', data);
  http.post('/api/register', data);
};
</script>
<style lang="scss" scoped>
.register-box {
  // height: 100vh;
  // width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
</style>
