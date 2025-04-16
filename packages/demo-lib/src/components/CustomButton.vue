<script setup lang="ts">
const { backgroundColor = "bg-green-600", color = "text-white" } = defineProps<{
  backgroundColor?: string;
  color?: string;
}>();
</script>

<template>
  <button
    type="button"
    :class="[backgroundColor, color]"
    class="p-2 rounded hover:bg-green-700 duration-300 transition-colors cursor-pointer"
  >
    <slot>Custom Button</slot>
  </button>
</template>

<style scoped></style>
