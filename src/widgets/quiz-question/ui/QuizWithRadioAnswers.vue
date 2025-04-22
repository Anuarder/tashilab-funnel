<script setup lang="ts">
  import { AnswerRadio } from '~entities/answer';
  import { type Funnel } from '~entities/funnel';

  defineProps<{
    content: Funnel['QuizQuestion'];
  }>();

  const emit = defineEmits<{
    (e: 'onSelected', answer: Array<Funnel['QuizAnswer']['slug']>): void;
  }>();
</script>

<template>
  <div class="mt-6 w-full pb-6">
    <ul class="flex flex-col space-y-3">
      <li v-for="answer in content.answers" :key="answer.slug">
        <AnswerRadio :answer="answer" @onSelected="emit('onSelected', [answer.slug])" />
      </li>
    </ul>
  </div>
</template>
