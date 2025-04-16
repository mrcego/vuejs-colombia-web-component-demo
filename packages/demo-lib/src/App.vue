<script setup lang="ts">
import { CustomButtonCE as CustomButton } from "./components";

function alert(message: string) {
  window.alert(message);
}
</script>

<template>
  <div class="flex flex-col h-dvh items-center justify-center gap-3">
    <span class="text-2xl text-green-600">¡Hola, Vue.js Colombia!</span>
    <custom-button @click="() => alert('Hello World')"
      >Este es el botón de color verde</custom-button
    >
  </div>
</template>
