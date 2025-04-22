<script setup lang="ts">
  defineProps<{
    title: string;
    value: string;
    image: string;
  }>();

  const emit = defineEmits<{
    (e: 'onAgeSelected', value: string): void;
  }>();
</script>

<template>
  <button
    type="button"
    class="relative aspect-square text-left duration-200 active:scale-95 active:opacity-85"
    @click="emit('onAgeSelected', value)"
  >
    <img width="160" height="160" class="aspect-square h-full w-full" :src="image" :alt="title" />

    <span
      class="bg-purple-primary absolute inset-x-1 bottom-1 flex h-10 items-center gap-2 rounded-md pr-2 pl-3 text-sm text-white"
    >
      <span class="flex-1">{{ title }}</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
        <rect width="20" height="20" fill="#fff" rx="10" />
        <path
          fill="#5653FE"
          d="M7.744 15.59a.833.833 0 0 1 0-1.18l4.41-4.41-4.41-4.41a.833.833 0 1 1 1.179-1.18l5 5a.833.833 0 0 1 0 1.18l-5 5a.833.833 0 0 1-1.179 0Z"
        />
      </svg>
    </span>
  </button>
</template>
