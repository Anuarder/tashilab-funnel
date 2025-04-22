<script setup lang="ts">
  import { computed, ref } from 'vue';

  import { UiButton } from '~shared/ui';

  import { AnswerMultiple } from '~entities/answer';
  import { type Funnel } from '~entities/funnel';

  defineProps<{
    content: Funnel['QuizQuestion'];
  }>();

  const localSelectedAnswers = ref<Array<Funnel['QuizAnswer']['slug']>>([]);
  const isAnswersSelected = computed(() => localSelectedAnswers.value.length > 0);

  const emit = defineEmits<{
    (e: 'onSelected', answer: Array<Funnel['QuizAnswer']['slug']>): void;
  }>();

  function isSelected(slug: Funnel['QuizAnswer']['slug']) {
    return localSelectedAnswers.value.includes(slug);
  }

  function onSelectAnswer(answer: Funnel['QuizAnswer']) {
    const existAnswer = localSelectedAnswers.value.find((slug) => slug === answer.slug);

    if (existAnswer) {
      localSelectedAnswers.value = localSelectedAnswers.value.filter(
        (slug) => slug !== answer.slug
      );
    } else {
      localSelectedAnswers.value.push(answer.slug);
    }
  }

  function onSelected() {
    emit('onSelected', localSelectedAnswers.value);
  }
</script>

<template>
  <div class="mt-6 w-full flex-1 pb-6">
    <ul class="flex flex-col space-y-3">
      <li v-for="answer in content.answers" :key="answer.slug">
        <AnswerMultiple
          :is-selected="isSelected(answer.slug)"
          :answer="answer"
          @onSelected="onSelectAnswer"
        />
      </li>
    </ul>
  </div>

  <div v-if="isAnswersSelected" class="sticky bottom-0 w-full">
    <UiButton title="Continue" @onClick="onSelected" />
  </div>
</template>
