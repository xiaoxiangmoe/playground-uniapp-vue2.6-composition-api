<script lang="ts">
import { ref } from '@vue/composition-api';
import { onLoad } from 'uni-composition-api';
import MyButton from '@/components/MyButton.vue';

export default {
  components: { MyButton },
};
</script>
<script setup lang="ts">
onLoad(() => {
  console.log('page load');
});
const title = 'Hello';
const count = ref(0);
</script>
<template>
  <view class="content">
    <image class="logo" src="../../static/logo.png"></image>
    <view>
      <text class="title">{{ title }}</text>
      <MyButton :message="`count is ` + count" @btn-click="count = count + 1" />
    </view>
  </view>
</template>
<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin: 200rpx auto 50rpx auto;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
