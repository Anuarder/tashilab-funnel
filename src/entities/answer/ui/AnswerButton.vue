<script setup lang="ts">
  import type { Funnel } from '~entities/funnel';

  defineProps<{
    answer: Funnel['QuizAnswer'];
    isSelected?: boolean;
  }>();

  const emit = defineEmits<{
    (e: 'onSelected', answer: Funnel['QuizAnswer']): void;
  }>();
</script>

<template>
  <button
    type="button"
    class="aspect-square w-full touch-manipulation rounded-lg border text-center duration-200"
    :class="
      isSelected
        ? 'border-purple-primary bg-indigo-50'
        : 'active:border-purple-primary border-slate-200 active:bg-indigo-50'
    "
    @click="emit('onSelected', answer)"
  >
    {{ answer.icon }}
  </button>
</template>
