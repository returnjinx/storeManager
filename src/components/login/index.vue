<!--  -->
<template>
  <div>
    <canvas id="effect_canvas"></canvas>
    <div class="content">
      <h2>仓库管理系统</h2>
      <component :is="component"></component>
      <p v-if="component.__name == 'login'" class="text register-text">还没有账号，<span @click="changeType(register)">立即注册</span></p>
      <p v-else class="text login-text">已有账号，<span @click="changeType(login)">立即登录</span></p>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, toRefs, onBeforeMount, onMounted } from 'vue';
import login from './login.vue';
import register from './register.vue';
import { initEffect } from './effect.js';
const component = ref(login);
const changeType = (type) => {
  component.value = type;
};
onMounted(() => {
  initEffect('effect_canvas');
});
</script>
<style lang="scss" scoped>
#effect_canvas {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
}
h2 {
  color: var(--van-primary-color);
  font-size: 20px;
  font-weight: bold;
  margin: 10px auto 20px;
  text-align: center;
}
.content {
  width: 80%;
  height: auto;
  background: rgba(255, 255, 255, 0.2);
  // backdrop-filter: blur(4px);
  border-radius: 10px;
  margin: 0 auto;
  padding: 20px 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .text {
    color: #fff;
    text-align: right;
    margin: 10px 0 0 0;
    span {
      color: var(--van-primary-color);
      text-decoration: underline;
    }
    font-size: 12px;
  }
}
</style>
