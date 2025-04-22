<script setup lang="ts">
  import { AppToolbar } from '~entities/toolbar';

  defineProps({
    withProgressBar: {
      type: Boolean,
      default: false,
    },
    progress: {
      type: Number,
      default: 0,
    },
    isCanGoBack: {
      type: Boolean,
      default: false,
    },
  });

  const emit = defineEmits<{
    (e: 'onGoBack'): void;
  }>();

  function onGoBack() {
    emit('onGoBack');
  }
</script>

<template>
  <main
    class="text-purple-text-primary vh-full mx-auto grid max-w-[500px] grid-rows-[auto_1fr_auto] overflow-hidden"
  >
    <header>
      <AppToolbar
        :with-progress-bar="withProgressBar"
        :is-can-go-back="isCanGoBack"
        :progress="progress"
        @onGoBack="onGoBack"
      />
    </header>

    <slot></slot>
  </main>
</template>
