<script setup lang="ts">
  import { UiHeadline } from '~shared/ui';

  import { type Funnel, QUIZ_ANSWER_TYPES, useFunnelStore } from '~entities/funnel';

  import QuizWithButtonsAnswers from './QuizWithButtonsAnswers.vue';
  import QuizWithMultipleAnswers from './QuizWithMultipleAnswers.vue';
  import QuizWithRadioAnswers from './QuizWithRadioAnswers.vue';

  const props = defineProps<{
    content: Funnel['QuizQuestion'];
  }>();

  const emit = defineEmits<{
    (e: 'onContinue'): void;
  }>();

  const funnelStore = useFunnelStore();

  function onSelected(answers: Array<Funnel['QuizAnswer']['slug']>) {
    funnelStore.setSelectedQuizDataBySlug(props.content.slug, answers);

    emit('onContinue');
  }
</script>

<template>
  <div class="flex w-full flex-1 flex-col">
    <UiHeadline
      :title="content.title"
      :subtitle="content.subtitle"
      :description="content.description"
    />

    <QuizWithRadioAnswers
      v-if="content.answerType === QUIZ_ANSWER_TYPES.radio"
      :content="content"
      @onSelected="onSelected"
    />

    <QuizWithMultipleAnswers
      v-if="content.answerType === QUIZ_ANSWER_TYPES.multiple"
      :content="content"
      @onSelected="onSelected"
    />

    <QuizWithButtonsAnswers
      v-if="content.answerType === QUIZ_ANSWER_TYPES.buttons"
      :content="content"
      @onSelected="onSelected"
    />
  </div>
</template>
