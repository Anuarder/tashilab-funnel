<script setup lang="ts">
  import { AnswerButton } from '~entities/answer';
  import { type Funnel } from '~entities/funnel';

  defineProps<{
    content: Funnel['QuizQuestion'];
  }>();

  const emit = defineEmits<{
    (e: 'onSelected', answer: Array<Funnel['QuizAnswer']['slug']>): void;
  }>();
</script>

<template>
  <div class="mt-6 flex w-full flex-1 items-end justify-center pb-12">
    <ul class="grid w-full max-w-[360px] grid-cols-5 gap-3">
      <li
        v-for="answer in content.answers"
        :key="answer.slug"
        class="text-xl first:text-3xl last:text-3xl"
      >
        <AnswerButton :answer="answer" @onSelected="emit('onSelected', [answer.slug])" />
      </li>
    </ul>
  </div>
</template>
