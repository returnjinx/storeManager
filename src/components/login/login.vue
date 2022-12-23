<!--  -->
<template>
  <div class="login-box">
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field v-model="phonenum" name="phonenum" label="账号" placeholder="账号" :rules="[{ required: true, message: '请填写账号' }]" />
        <van-field v-model="password" type="password" name="password" label="密码" placeholder="密码" :rules="[{ required: true, message: '请填写密码' }]" />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit"> 登录 </van-button>
      </div>
    </van-form>
  </div>
</template>

<script setup>
import { reactive, ref, toRefs, onBeforeMount, onMounted, nextTick } from 'vue';
import { http } from '@/utils/request';
import router from '@/router';
import { Toast } from 'vant';
const phonenum = ref('');
const password = ref('');
const onSubmit = (data) => {
  console.log('submit', data);
  http.post('/api/login', data).then((res) => {
    if (res.status == 1) {
      localStorage.setItem('token', res.token);
      nextTick(() => {
        router.replace('/main/home');
      });
      Toast.success(res.Msg);
    } else {
      Toast.fail(res.Msg);
    }
  });
};
onMounted(() => {
  localStorage.removeItem('token');
});
</script>
<style lang="scss" scoped>
.login-box {
  // height: 100vh;
  // width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
</style>
