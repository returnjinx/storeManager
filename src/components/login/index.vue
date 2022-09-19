<!--  -->
<template>
  <div>
    <canvas id="effect_canvas"></canvas>
    <component :is="component"></component>
  </div>
</template>

<script setup>
import { reactive, ref, toRefs, onBeforeMount, onMounted } from 'vue';
import login from './login.vue';
import register from './register.vue';
import { initEffect } from './effect.js';
const component = ref(login);

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
</style>
