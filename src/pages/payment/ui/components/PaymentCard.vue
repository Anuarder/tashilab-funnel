<script setup lang="ts">
  import { UiButton } from '~shared/ui';

  const fullPrice = 29.99;
  const discountedPrice = 19.99;
</script>

<template>
  <div class="rounded-xl border border-gray-200 px-3 py-4">
    <h2 class="text-center text-2xl font-semibold">Get Your IT Career Guide Today!</h2>

    <div class="mt-4 flex items-center justify-between font-semibold">
      <div class="flex gap-2 text-xl">
        <span class="line-through opacity-50">${{ fullPrice }}</span>
        <span>${{ discountedPrice }}</span>
      </div>

      <span class="text-xs"> one-time payment </span>
    </div>

    <UiButton title="Buy now" with-shadow-pulse class="mt-6 text-sm font-semibold" />
  </div>
</template>
