<script setup lang="ts">
  defineProps<{
    title: string;
    subtitle?: string;
    description?: string;
  }>();
</script>

<template>
  <div class="text-center text-pretty">
    <h1 v-html="title" class="text-xl font-semibold"></h1>
    <h2 v-if="subtitle" v-html="subtitle" class="mt-4 text-xs"></h2>
    <p v-if="description" v-html="description" class="mt-3 text-xs uppercase"></p>
  </div>
</template>
