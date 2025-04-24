<script setup lang="ts">
  import { computed, onBeforeUnmount, onMounted, ref } from 'vue';

  const emit = defineEmits<{
    (e: 'onTimerStopped'): void;
  }>();

  const initialMinutes = 9;
  const initialSeconds = 59;

  const minutes = ref(initialMinutes);
  const seconds = ref(initialSeconds);

  const isRunning = ref(false);
  const timerInterval = ref<number | null>(null);

  const displayMinutes = computed(() => minutes.value.toString().padStart(2, '0'));
  const displaySeconds = computed(() => seconds.value.toString().padStart(2, '0'));

  const startTimer = () => {
    if (isRunning.value) return;

    isRunning.value = true;

    timerInterval.value = setInterval(() => {
      if (seconds.value > 0) {
        seconds.value--;
      } else if (minutes.value > 0) {
        minutes.value--;
        seconds.value = 59;
      } else {
        stopTimer();
        emit('onTimerStopped');
      }
    }, 1000);
  };

  const stopTimer = () => {
    if (timerInterval.value) {
      clearInterval(timerInterval.value);
      timerInterval.value = null;
    }
    isRunning.value = false;
  };

  onMounted(() => {
    startTimer();
  });

  onBeforeUnmount(() => {
    stopTimer();
  });
</script>

<template>
  <div class="flex flex-col">
    <div class="flex items-center text-center text-3xl leading-none font-semibold">
      <span class="w-10">{{ displayMinutes }}</span>
      <span class="w-5 -translate-y-0.5">:</span>
      <span class="w-10">{{ displaySeconds }}</span>
    </div>
    <div class="flex items-center text-center text-xs leading-none font-medium">
      <span class="w-10">min</span>
      <span class="w-5"></span>
      <span class="w-10">sec</span>
    </div>
  </div>
</template>
