<script setup lang="ts">
  defineProps<{
    title: string;
    withShadowPulse?: boolean;
  }>();

  const emit = defineEmits<{
    (e: 'onClick'): void;
  }>();
</script>

<template>
  <button
    type="button"
    class="bg-purple-primary h-12 w-full touch-manipulation rounded-lg text-white duration-200 active:opacity-85"
    :class="{
      'shadow-pulse': withShadowPulse,
    }"
    @click="emit('onClick')"
  >
    {{ title }}
  </button>
</template>

<style>
  .shadow-pulse {
    animation: shadow-pulse-animation 2s infinite;
  }

  @keyframes shadow-pulse-animation {
    0% {
      box-shadow: 0 0 0 0 rgba(86, 83, 254, 0.7);
    }
    70% {
      box-shadow: 0 0 0 10px rgba(86, 83, 254, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(86, 83, 254, 0);
    }
  }
</style>
