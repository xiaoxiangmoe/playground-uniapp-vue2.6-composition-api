<script setup lang="ts">
defineProps<{
  message: string;
}>();
const emit = defineEmits<{
  (event: 'btn-click', payload: MouseEvent): void;
}>();
</script>
<template>
  <button @click="emit('btn-click', $event)">{{ message }}</button>
</template>
<style scoped lang="scss"></style>
