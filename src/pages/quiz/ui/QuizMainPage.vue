<script setup lang="ts">
  import { computed } from 'vue';
  import { useRoute, useRouter } from 'vue-router';

  import { BaseLayout } from '~shared/layout/base-layout';

  import { FunnelLib, QUIZ_PAGES_SLUGS } from '~entities/funnel';

  const router = useRouter();
  const route = useRoute();
  const slug = computed(() => route.params.slug as string);

  if (!slug.value || !QUIZ_PAGES_SLUGS.includes(slug.value)) {
    throw new Error('ERROR_QUIZ_PAGE_SLUG_NOT_FOUND');
  }

  const quizPage = computed(() => FunnelLib.getQuizPageContentBySlug(slug.value));

  const quizSlugsWithoutTeasers = QUIZ_PAGES_SLUGS.filter((v) => !v.includes('teaser'));

  function calculateProgress(slug: string) {
    const index = quizSlugsWithoutTeasers.indexOf(slug);
    return index === -1 ? 0 : ((index + 1) / quizSlugsWithoutTeasers.length) * 100;
  }

  const withProgressBar = computed(
    () => quizPage.value.type === 'question' && !quizPage.value.withoutProgress
  );

  const progress = computed(() => calculateProgress(quizPage.value.slug));

  const prevQuizPageSlug = computed(() => FunnelLib.getPreviousQuizPageSlug(slug.value));

  function onGoToPrevPage() {
    if (!prevQuizPageSlug.value) {
      throw new Error('ERROR_QUIZ_PAGE_PREV_NOT_FOUND');
    }

    if (prevQuizPageSlug.value.isFirstPage) {
      router.replace({
        name: 'MainPage',
      });
    } else {
      router.replace({
        name: 'QuizPage',
        params: {
          slug: prevQuizPageSlug.value.slug,
        },
        query: {
          direction: 'back',
        },
      });
    }
  }
</script>

<template>
  <BaseLayout
    :is-can-go-back="true"
    :with-progress-bar="withProgressBar"
    :progress="progress"
    @onGoBack="onGoToPrevPage"
  >
    <div v-auto-animate class="grid grid-cols-1 overflow-hidden">
      <RouterView v-slot="{ Component, route }">
        <component :is="Component" :key="route.path" />
      </RouterView>
    </div>
  </BaseLayout>
</template>
