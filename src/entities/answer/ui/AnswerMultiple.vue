<script setup lang="ts">
  import type { Funnel } from '~entities/funnel';

  defineProps<{
    answer: Funnel['QuizAnswer'];
    isSelected: boolean;
  }>();

  const emit = defineEmits<{
    (e: 'onSelected', answer: Funnel['QuizAnswer']): void;
  }>();
</script>

<template>
  <button
    type="button"
    class="group active:border-purple-primary flex min-h-16 w-full touch-manipulation items-center justify-between space-x-3 rounded-lg border py-4 pr-4 pl-3 text-left duration-200 active:bg-indigo-50"
    :class="isSelected ? 'border-purple-primary bg-indigo-50' : 'border-slate-200'"
    @click="emit('onSelected', answer)"
  >
    <span class="flex flex-1 items-center space-x-3">
      <span class="text-xl">{{ answer.icon }}</span>
      <span class="text-sm font-semibold">{{ answer.title }}</span>
    </span>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      class="duration-200 group-active:opacity-100"
      :class="isSelected ? 'opacity-100' : 'opacity-0'"
    >
      <rect width="20" height="20" fill="#5653FE" rx="6" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M15.374 5.793a1 1 0 0 1 0 1.414l-6.416 6.417a1 1 0 0 1-1.414 0l-2.917-2.917A1 1 0 1 1 6.04 9.293l2.21 2.21 5.71-5.71a1 1 0 0 1 1.413 0Z"
        clip-rule="evenodd"
      />
    </svg>
  </button>
</template>
