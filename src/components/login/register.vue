<!--  -->
<template>
  <div class="register-box">
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field v-model="username" name="用户名" label="用户名" placeholder="用户名" :rules="[{ required: true, message: '请填写用户名' }]" />
        <van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码" :rules="[{ required: true, message: '请填写密码' }]" />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit"> 注册 </van-button>
      </div>
    </van-form>
  </div>
</template>

<script setup>
import { reactive, ref, toRefs, onBeforeMount, onMounted } from 'vue';

const username = ref('');
const password = ref('');
const onSubmit = (values) => {
  console.log('submit', values);
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
