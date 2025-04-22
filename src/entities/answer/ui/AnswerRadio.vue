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
    class="flex min-h-16 w-full touch-manipulation items-center space-x-3 rounded-lg border py-4 pr-4 pl-3 text-left duration-200"
    :class="
      isSelected
        ? 'border-purple-primary bg-indigo-50'
        : 'active:border-purple-primary border-slate-200 active:bg-indigo-50'
    "
    @click="emit('onSelected', answer)"
  >
    <span class="text-xl">{{ answer.icon }}</span>
    <span class="text-sm font-semibold">{{ answer.title }}</span>
  </button>
</template>
