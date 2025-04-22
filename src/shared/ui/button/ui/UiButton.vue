<script setup lang="ts">
  defineProps<{
    title: string;
  }>();

  const emit = defineEmits<{
    (e: 'onClick'): void;
  }>();
</script>

<template>
  <button
    type="button"
    class="bg-purple-primary h-12 w-full touch-manipulation rounded-lg text-white duration-200 active:opacity-85"
    @click="emit('onClick')"
  >
    {{ title }}
  </button>
</template>
