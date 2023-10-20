<!--  -->
<template>
  <div class="my-content">
    <div class="header-content" style="background-image: url('https://4dkk.4dage.com/scene_edit_data/KK-t-aifOiazriHV/user/thumb-1k.jpg?_=16')">
      <div class="filter-content"></div>
      <div class="info-content">
        <van-uploader>
          <div class="avatar-image">
            <img src="https://4dkk.4dage.com/scene_edit_data/KK-t-aifOiazriHV/user/thumb-1k.jpg?_=16" alt="" />
          </div>
        </van-uploader>

        <div class="nickname-content">
          <div class="input-box" v-if="isEdit">
            <input ref="nicknameIpt" type="text" v-model="changeName" />
            <span class="name-count"
              ><span class="cur">{{ userInfo.nickname.length }}</span
              >/<span class="max">{{ nameMaxlength }}</span></span
            >
            <div class="input-contorls">
              <van-button round type="default" @click="onCancel">取消</van-button>
              <van-button round type="success" @click="onConfirm">确认</van-button>
            </div>
          </div>
          <p v-else @click="changeNickname" class="nickname">{{ userInfo.nickname }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Tabbar, TabbarItem } from 'vant';
import { reactive, toRefs, ref, onBeforeMount, onMounted, nextTick } from 'vue';
const nameMaxlength = ref(15);
const userInfo = ref({
  nickname: '我是昵称',
});
const changeName = ref('');
const nicknameIpt = ref(null);
const isEdit = ref(false);
const changeNickname = () => {
  isEdit.value = true;
  changeName.value = userInfo.value.nickname;
  nextTick(() => {
    nicknameIpt.value.focus();
  });
};
const onConfirm = () => {
  userInfo.value.nickname = changeName.value;
  closeNickIpt();
};
const onCancel = () => {
  closeNickIpt();
};
const closeNickIpt = () => {
  isEdit.value = false;
  nextTick(() => {
    changeName.value = '';
  });
};
</script>
<style lang="scss" scoped>
.my-content {
  .header-content {
    .filter-content {
      position: absolute;
      z-index: 1;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(4px);
    }
    .info-content {
      position: relative;
      z-index: 2;
      padding: 50px;
      .van-uploader {
        margin: 0 auto;
        width: 100px;
        height: 100px;
        display: block;
        .avatar-image {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid skyblue;
          margin: 0 auto;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }

      .nickname-content {
        margin-top: 10px;
        width: 100%;
        .input-box {
          width: 100%;
          height: 40px;
          border: 1px solid skyblue;
          position: relative;
          border-radius: 6px;

          margin: 0 auto;
          input {
            width: 100%;
            height: 100%;
            background: none;
            color: #fff;
            font-size: 20px;
            padding: 0 68px 0 10px;
          }
          .input-contorls {
            width: 100%;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 10px 0 10px 0;
          }
          .name-count {
            position: absolute;
            font-size: 20px;
            color: #fff;
            right: 5px;
            top: 50%;
            transform: translateY(-50%);
            .cur {
              color: skyblue;
            }
            .max {
            }
          }
        }
        .nickname {
          color: skyblue;
          font-size: 24px;
          font-weight: bold;
          text-align: center;
          margin-top: 10px;
        }
      }
    }
  }
}
</style>
