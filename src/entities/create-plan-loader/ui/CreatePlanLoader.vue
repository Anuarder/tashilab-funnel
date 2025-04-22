<script setup lang="ts">
  import gsap from 'gsap';
  import { onMounted, reactive } from 'vue';

  import './create-plan-loader.css';

  const props = withDefaults(
    defineProps<{
      animationDuration?: number;
    }>(),
    {
      animationDuration: 9,
    }
  );

  const tweened = reactive({
    number: 0,
  });

  onMounted(() => {
    gsap.to(tweened, { duration: props.animationDuration, number: 100 });
  });
</script>

<template>
  <div class="relative w-fit">
    <svg
      class="create-plan-loader"
      :style="{ '--animation-duration': `${animationDuration}s` }"
      width="150"
      height="150"
      viewBox="0 0 150 150"
    >
      <circle class="create-plan-loader__background" r="100%"></circle>
      <circle class="create-plan-loader__loader" r="100%"></circle>
    </svg>

    <span class="absolute inset-0 flex items-center justify-center text-3xl font-bold">
      <span>{{ tweened.number.toFixed(0) }}</span>
      <span>%</span>
    </span>
  </div>
</template>
