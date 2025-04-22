<script setup lang="ts">
  import { UiButton } from '~shared/ui';

  import { type Funnel } from '~entities/funnel';

  defineProps<{
    content: Funnel['QuizTeaser'];
  }>();

  const emit = defineEmits<{
    (e: 'onContinue'): void;
  }>();
</script>

<template>
  <div class="flex-1 pb-6">
    <img
      width="328"
      height="224"
      :src="content.image"
      class="mx-auto aspect-[41/28] w-full"
      role="presentation"
      alt=""
    />

    <h2 class="mt-6 text-xl font-bold">{{ content.title }}</h2>
    <p class="mt-3 text-sm leading-relaxed">
      {{ content.description }}
    </p>
  </div>

  <div class="sticky bottom-0 w-full">
    <UiButton title="Continue" @onClick="emit('onContinue')" />
  </div>
</template>
