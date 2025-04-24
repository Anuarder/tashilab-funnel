<script setup lang="ts">
  import { computed } from 'vue';
  import { useRoute, useRouter } from 'vue-router';

  import { QuizQuestionWidget } from '~/widgets/quiz-question';
  import { QuizTeaserWidget } from '~/widgets/quiz-teaser';
  import { FunnelLib, QUIZ_PAGES_SLUGS } from '~entities/funnel';

  const router = useRouter();
  const route = useRoute();
  const slug = computed(() => route.params.slug as string);

  if (!slug.value || !QUIZ_PAGES_SLUGS.includes(slug.value)) {
    throw new Error('ERROR_QUIZ_PAGE_SLUG_NOT_FOUND');
  }

  const quizPage = computed(() => FunnelLib.getQuizPageContentBySlug(slug.value));
  const nextPageSlug = computed(() => FunnelLib.getNextQuizPageSlug(slug.value));

  function onGoToNextPage() {
    if (!nextPageSlug.value) {
      throw new Error('ERROR_QUIZ_PAGE_NEXT_NOT_FOUND');
    }

    if (nextPageSlug.value.isLastPage) {
      router.push({
        name: 'CreatePlanPage',
      });
    } else {
      router.push({
        name: 'QuizPage',
        params: {
          slug: nextPageSlug.value.slug,
        },
      });
    }
  }
</script>

<template>
  <section class="flex w-full flex-col items-center overflow-auto px-4 pt-5 pb-6 text-pretty">
    <QuizQuestionWidget
      v-if="quizPage.type === 'question'"
      :content="quizPage"
      @onContinue="onGoToNextPage"
    />
    <QuizTeaserWidget v-else :content="quizPage" @onContinue="onGoToNextPage" />
  </section>
</template>
