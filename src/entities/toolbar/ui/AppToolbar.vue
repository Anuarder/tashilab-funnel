<script setup lang="ts">
  import LogoSVG from '~shared/assets/images/logo.svg';

  withDefaults(
    defineProps<{
      withProgressBar?: boolean;
      progress?: number;
      isCanGoBack?: boolean;
    }>(),
    {
      withProgressBar: false,
      progress: 0,
      isCanGoBack: false,
    }
  );

  const emit = defineEmits<{
    (e: 'onGoBack'): void;
  }>();
</script>

<template>
  <nav class="grid h-12 grid-cols-5 items-center px-4">
    <button v-if="isCanGoBack" type="button" @click="emit('onGoBack')">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
        <path
          fill="#24234C"
          d="M11.707 5.293a1 1 0 0 1 0 1.414L7.414 11H19a1 1 0 1 1 0 2H7.414l4.293 4.293a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0Z"
        />
      </svg>
    </button>

    <img
      v-if="!withProgressBar"
      :class="isCanGoBack ? 'col-span-3 justify-self-center' : ''"
      width="75"
      height="20"
      :src="LogoSVG"
      alt="tashilab"
    />

    <div v-if="withProgressBar" class="col-span-3">
      <div class="relative h-1.5 overflow-hidden rounded bg-slate-200">
        <div
          class="bg-purple-primary absolute h-1.5 rounded transition-all duration-500"
          :style="{ width: `${progress}%` }"
        ></div>
      </div>
    </div>
  </nav>
</template>
